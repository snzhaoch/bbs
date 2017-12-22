from flask import (
    render_template,
    Blueprint,
)
from routes import *
from models.message import Message
from models.topic import Topic
from models.chat import Chat

main = Blueprint('message', __name__)

"""
用户在这里可以
    查看私信列表
    发送私信
    查看对话内容
"""


@main.route("/add", methods=["POST"])
@csrf_required
def add():
    form = request.form
    u = current_user()
    friend_name = form['username']
    friend = User.find_by(username=friend_name)
    m = Message.new(form, sender_id=u.id, receiver_id=friend.id)
    chat_id = m.chat_id
    c = Chat.find_by(chat_id=chat_id)
    if c is None:
        f = {
            'sender_id': m.sender_id,
            'receiver_id': m.receiver_id,
            'chat_id': m.chat_id,
        }
        Chat.new(f)
    else:
        c.updated_time = m.created_time
        c.save()
    return redirect(url_for(".view", friend_name=friend_name))


@main.route("/", methods=["GET"])
@login_required
def index():
    '''
    用户私信列表
    '''
    receiver_name = request.args.get('receiver_name', '')
    u = current_user()
    chat_ids = Chat.find_chat_ids(u.id)
    log('chat_ids',chat_ids)
    messages = Message.find_list(chat_ids)
    crsf_token = new_csrf_token()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    t = render_template(
        "message/index.html",
        user=u,
        messages=messages,
        receiver_name=receiver_name,
        crsf_token=crsf_token,
        ts=ts,
    )
    return t


@main.route("/view/<string:friend_name>")
@login_required
def view(friend_name):
    """
    私信的详细页面
    """
    user = current_user()
    user_id = user.id
    friend = User.find_by(username=friend_name)
    friend_id = friend.id
    messages = Message.find_chat(user_id, friend_id)
    # 当最新的一封私信收件人是自己时， 对话中所有收到的 message 会被标记成已读
    if current_user().id == messages[0].receiver_id:
        Message.mark_read(
            sender_id=friend_id,
            receiver_id=user_id
        )
    crsf_token = new_csrf_token()
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        "message/detail.html",
        user=user,
        messages=messages,
        friend_name=friend_name,
        crsf_token=crsf_token,
        ts=ts,
    )
