from flask import (
    render_template,
    Blueprint,
)
from routes import *
from models.topic import Topic
from models.board import Board
from utils import log, formatted_time

main = Blueprint('topic', __name__)

"""
用户在这里可以
    访问论坛首页
    查看话题
    添加话题
    删除话题
    
管理员在这里可以
    删除话题
"""


@main.route("/")
def index():
    """
    论坛主页
    """
    c_u = current_user()

    page = int(request.args.get('page', 1))
    if page is None:
        page = 1
    else:
        page = int(page)
    limit = 20
    skip = limit * (page - 1)

    board_id = request.args.get('board_id', '-1')
    if board_id == '-1':
        ms = Topic.find_lss(
            limit=limit,
            skip=skip,
            sort=('lastreply_time', -1)
        )
        topic_count = Topic.count()
    else:
        ms = Topic.find_lss(
            limit=limit,
            skip=skip,
            sort=('lastreply_time', -1),
            board_id=board_id
        )
        topic_count = Topic.count(board_id=board_id)
    if topic_count % limit == 0:
        pages = topic_count // limit
    else:
        pages = topic_count // limit + 1

    ts = Topic.topic_noreply()
    bs = Board.all()
    return render_template(
        "topic/index.html",
        current_user=c_u,
        ms=ms,
        ts=ts,
        bs=bs,
        bid=board_id,
        page=page,
        pages=pages,
    )


@main.route('/topic/<string:id>')
def detail(id):
    """
    话题详情页面
    """
    c_u = current_user()
    m = Topic.find(id)
    topic_created_time = formatted_time(m.created_time)
    token = new_csrf_token()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        "topic/detail.html",
        current_user=c_u,
        topic=m,
        ts=ts,
        topic_created_time=topic_created_time,
        token=token,
    )


@main.route("/topic/add", methods=["POST"])
@csrf_required
def add():
    """
    话题增加
    """
    form = request.form
    u = current_user()
    Topic.new(form, user_id=u.id)
    return redirect(url_for('.index'))


@main.route("/topic/delete")
@csrf_required
def delete():
    """
    话题删除
    """
    id = request.args.get('id')
    Topic.delete(id)
    return redirect(url_for('.index'))


@main.route("/topic/new")
def new():
    """
    发布话题页面
    """
    board_id = request.args.get('board_id')
    bs = Board.all()
    token = new_csrf_token()
    c_u = current_user()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        "topic/new.html",
        bs=bs,
        ts=ts,
        bid=board_id,
        current_user=c_u,
        token=token,
    )
