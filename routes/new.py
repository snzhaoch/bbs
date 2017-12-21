from flask import (
    render_template,
    Blueprint,
)
from models.new import New
from routes import *
from models.topic import Topic
from utils import log

main = Blueprint('new', __name__)

"""
用户在这里可以
    查看消息列表
    查看对应话题
"""


@main.route('/')
@login_required
def index():
    """
    用户消息列表
    """
    user = current_user()
    user_id = user.id
    news = New.find_news(user_id)
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        "new/index.html",
        user=user,
        news=news,
        ts=ts,
    )


@main.route('/view')
@login_required
def view():
    """
    返回消息对应的话题页面
    """
    id = request.args.get('id', '')
    user = current_user()
    new = New.find(id)
    if user.id == new.receiver_id:
        new.read = True
        new.save()
        return redirect(
            url_for(
                'topic.detail',
                id=new.topic_id,
            )
        )