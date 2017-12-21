from flask import Blueprint
from models.reply import Reply
from models.topic import Topic
from models.new import New
from routes import *
from utils import log

main = Blueprint('reply', __name__)

"""
用户在这里可以
    添加回复
    @ 用户
    删除回复
    
管理员可以在这里
    删除话题
"""


def users_from_content(content):
    # 不能解决 @在文本中间 比如 123@name abc，这样就不能获得name了
    parts = content.split(' ')
    users = []
    for p in parts:
        if p.startswith('@'):
            username = p[1:]
            u = User.find_by(username=username)
            users.append(u)
    return users


def send_news(sender, receivers, topic_id):
    for r in receivers:
        form = dict(
            sender_id=sender.id,
            receiver_id=r.id,
            topic_id=topic_id,
        )
        m = New.new(form)
        log(m)


@main.route("/add", methods=["POST"])
@csrf_required
def add():
    form = request.form
    u = current_user()
    content = form['content']
    topic_id = form['topic_id']
    # 获取 reply 中 @ 的用戶
    users = users_from_content(content)
    topic_user = Topic.find_by(id=topic_id).user()
    if topic_user not in users:
        users.append(topic_user)
    if topic_user.id == u.id:
        users.remove(topic_user)
    send_news(u, users, topic_id)
    m = Reply.new(form, user_id=u.id)
    return redirect(
        url_for(
            'topic.detail',
            id=m.topic_id
        )
    )


@main.route("/delete")
@csrf_required
def delete():
    id = request.args.get('id')
    topic_id = request.args.get('topic_id')
    Reply.delete(id)
    return redirect(url_for('topic.detail', id=topic_id))
