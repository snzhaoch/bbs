from flask import (
    render_template,
    Blueprint,
    send_from_directory,
)
from models.topic import Topic
from models.reply import Reply
import os
from routes import *
from utils import log, formatted_time

main = Blueprint('user', __name__)

"""
用户在这里可以
    注册登录登出
    查看创建话题
    查看参与话题
    查看用户信息
    编辑签名
    上传头像
    更改密码
    

超级管理员在这里可以
    查看用户权限
    更改普通用户与管理员权限
    // 超级管理员自身权限无法被变更
"""


@main.route("/signin")
def index():
    """
    注册登录页面
    """
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    error = request.args.get('error')
    return render_template("/user/login.html", ts=ts, error=error)


@main.route("/register", methods=['POST'])
def register():
    """
    注册
    """
    form = request.form
    # 用类函数来判断
    u = User.register(form)
    if type(u) is str:
        # 转到 topic.index 页面
        return redirect(url_for('user.index', error=u))
    else:
        # session 中写入 user_id
        session['user_id'] = u.id
        # 设置 cookie 有效期为 永久
        session.permanent = True
        return redirect(url_for('topic.index'))


@main.route("/login", methods=['POST'])
def login():
    """
    登录
    """
    form = request.form
    u = User.validate_login(form)
    if type(u) is str:
        return redirect(url_for('user.index', error=u))
    else:
        session['user_id'] = u.id
        session.permanent = True
        return redirect(url_for('topic.index'))


@main.route("/logout")
@login_required
def logout():
    """
    登出
    """
    session.pop("user_id", None)
    return redirect(url_for('topic.index'))


@main.route('/edit')
@login_required
def user_edit():
    """
    信息设置页面
    """
    u = current_user()
    crsf_token = new_csrf_token()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        '/user/edit.html',
        user=u,
        ts=ts,
        crsf_token=crsf_token,
    )


@main.route('/profile_update', methods=['POST'])
@csrf_required
def user_update():
    """
    签名更新
    """
    form = request.form
    u = current_user()
    # 禁止改名字
    # u.username = form['name']
    u.signature = form['signature']
    u.save()
    return redirect(url_for('.user_edit'))


@main.route('/password_update', methods=['POST'])
@csrf_required
def password_update():
    """
    密码更新
    """
    form = request.form
    old_pwd = form['old_pass']
    new_pwd = form['new_pass']
    u = current_user()
    if u.password == u.salted_password(old_pwd):
        u.password = u.salted_password(new_pwd)
        u.save()
    return redirect(url_for('.user_edit'))


@main.route('/<string:username>')
def user_detail(username):
    """
    用户详情页面
    """
    u = User.find_by(username=username)
    c_u = current_user()
    if u is None:
        abort(404)
    else:
        user_created_time = formatted_time(u.created_time)
        # 5 个最近创建的话题
        topics_after = Topic.find_lss(5, 0, -1, user_id=u.id)
        # 5 个最近参与的话题
        replys_after = Reply.find_lss(5, 0, -1, user_id=u.id)
        replys_topic = []
        topic_ids = []
        for v in replys_after:
            topic_id = v.topic_id
            if topic_id in topic_ids:
                continue
            else:
                t = Topic.find_by(id=v.topic_id)
                # 下面这个 if else 是因为删除 topic 时未删除 对应的 reply，
                # 导致 t 有为 None 的情况，项目完成初始化 mongodb 时可以去掉
                if t is not None:
                    replys_topic.append(t)
                    topic_ids.append(topic_id)
                else:
                    continue
        # 5 个最近无人回复的话题
        ts = Topic.topic_noreply()
        return render_template(
            '/user/profile.html',
            user=u,
            current_user=c_u,
            user_created_time=user_created_time,
            topics=topics_after,
            ts=ts,
            replys_topic=replys_topic
        )


@main.route('/<string:username>/topics')
def user_topics(username):
    """
    用户创建话题页面
    """
    u = User.find_by(username=username)
    c_u = current_user()
    page = int(request.args.get('page', 1))
    if u is None:
        abort(404)
    else:
        # 全部创建的话题，每页 20 个
        limit = 5
        skip = limit * (page - 1)

        topics = Topic.find_lss(
            limit=limit,
            skip=skip,
            sort=-1,
            user_id=u.id
        )
        # 当前用户的 topic 一共有多少页
        topic_count = Topic.count(user_id=u.id)
        if topic_count % limit == 0:
            pages = topic_count // limit
        else:
            pages = topic_count // limit + 1
        # 5 个最近无人回复的话题
        ts = Topic.topic_noreply()
        return render_template(
            '/user/topics.html',
            user=u,
            current_user=c_u,
            ts=ts,
            topics=topics,
            page=page,
            pages=pages,
        )


@main.route('/<string:username>/replies')
def user_replies(username):
    """
    用户参与话题页面
    """
    u = User.find_by(username=username)
    c_u = current_user()
    page = int(request.args.get('page', 1))
    if u is None:
        abort(404)
    else:
        # 全部参与的话题，每页 20 个
        limit = 5
        skip = limit * (page - 1)
        replys_after = Reply.find_lss(
            limit=limit,
            skip=skip,
            sort=-1,
            user_id=u.id,
        )
        replys_topic = []
        topic_ids = []
        for v in replys_after:
            topic_id = v.topic_id
            if topic_id in topic_ids:
                continue
            else:
                t = Topic.find_by(id=v.topic_id)
                replys_topic.append(t)
                topic_ids.append(topic_id)
        # 当前用户的 topic 一共有多少页
        topic_count = len(replys_topic)
        if topic_count % limit == 0:
            pages = topic_count // limit
        else:
            pages = topic_count // limit + 1
        # 5 个最近无人回复的话题
        ts = Topic.topic_noreply()
        return render_template(
            '/user/replies.html',
            user=u,
            current_user=c_u,
            ts=ts,
            topics=replys_topic,
            page=page,
            pages=pages
        )


def valid_suffix(suffix):
    """
    验证上传图片格式
    """
    valid_type = ['jpg', 'png', 'jpeg']
    return suffix in valid_type


@main.route('/image/add', methods=["POST"])
@csrf_required
def add_img():
    """
    上传图片
    :return:
    """
    u = current_user()
    file = request.files['avatar']
    suffix = file.filename.split('.')[-1]
    if valid_suffix(suffix):
        # 变更名字，同时防范攻击：/../../../../../../root/.ssh/authorized_keys
        filename = '{}.{}.{}'.format(u.username, str(uuid.uuid4()), suffix)
        file.save(os.path.join('user_image', filename))
        User.update(u.id, dict(
            user_image='/image/' + filename
        ))

    return redirect(url_for(".user_detail", username=u.username))


@main.route("/image/<filename>")
def uploads(filename):
    # nginx 缓存静态文件
    return send_from_directory('user_image', filename)


@main.route("/admin")
@authority_required(level=1)
def admin():
    """
    用户权限管理页面
    """
    users = User.find_lss(sort=-1)
    auth_dict = User.auth_dict()
    # 禁止将其他用户设为超级管理员
    auth_dict.pop('1')
    user = current_user()
    token = new_csrf_token()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        '/user/admin.html',
        users=users,
        auth_dict=auth_dict,
        user=user,
        ts=ts,
        token=token,
    )


@main.route("/auth_edit", methods=["POST"])
@csrf_required
def auth_edit():
    """
    权限变更
    """
    user_id = request.args.get('user_id')
    form = request.form
    User.update(user_id, form)
    return redirect(url_for('.admin'))
