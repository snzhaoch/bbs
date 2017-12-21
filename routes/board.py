from flask import (
    render_template,
    Blueprint,
)
from routes import *
from models.board import Board
from models.topic import Topic


main = Blueprint('board', __name__)

"""
用户在这里可以
    查看不同板块话题

管理员在这里可以
    增加板块
    编辑板块
    删除板块
"""


@main.route("/admin")
@authority_required(level=2)
def index():
    """
    板块管理页面
    """
    boards = Board.find_all()
    user = current_user()
    crsf_token = new_csrf_token()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        'board/admin_index.html',
        boards=boards,
        user=user,
        crsf_token=crsf_token,
        ts=ts,
    )


@main.route("/add", methods=["POST"])
@csrf_required
def add():
    form = request.form
    Board.new(form)
    return redirect(url_for('topic.index'))


@main.route("/update", methods=["POST"])
@csrf_required
def update():
    form = request.form
    board_id = request.args.get('id')
    Board.update(board_id, form)
    return redirect(url_for('board.index'))


@main.route("/delete")
@csrf_required
def delete():
    board_id = request.args.get('id')
    Board.delete(board_id)
    return redirect(url_for('board.index'))