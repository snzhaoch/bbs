from flask import (
    render_template,
    request,
    Blueprint,
)
from models.user import User
from models.topic import Topic
from routes import current_user
from utils import log

main = Blueprint('search', __name__)

"""
用户在这里可以
    搜索内容
    搜索用户
"""


@main.route('/')
def search():
    """
    返回搜索的内容或用户
    """
    c_u = current_user()
    content = request.args.get('q')
    limit = 5
    topics = Topic.find_lss(
        limit=limit,
        sort=-1,
        title={'$regex': '{}'.format(content)}
    )
    users = User.find_lss(
        limit=limit,
        sort=-1,
        username={'$regex': '{}'.format(content)}
    )
    ts = Topic.topic_noreply()
    return render_template(
        '/search/search.html',
        current_user=c_u,
        content=content,
        topics=topics,
        users=users,
        ts=ts
    )


@main.route('/topics')
def search_topics():
    """
    返回搜索的全部内容
    """
    c_u = current_user()
    page = int(request.args.get('page', 1))
    content = request.args.get('content', '')
    limit = 20
    skip = limit * (page - 1)

    topics = Topic.find_lss(
        limit=limit,
        skip=skip,
        sort=-1,
        title={'$regex': '{}'.format(content)}
    )
    topic_count = Topic.count(title={'$regex': '{}'.format(content)})
    if topic_count % limit == 0:
        pages = topic_count // limit
    else:
        pages = topic_count // limit + 1
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()
    return render_template(
        '/search/topics.html',
        current_user=c_u,
        content=content,
        topics=topics,
        ts=ts,
        page=page,
        pages=pages
    )


@main.route('/users')
def search_users():
    """
    返回搜索的全部内容
    """
    c_u = current_user()
    page = int(request.args.get('page', 1))
    content = request.args.get('content', '')
    limit = 20
    skip = limit * (page - 1)

    users = User.find_lss(
        limit=limit,
        skip=skip,
        sort=-1,
        username={'$regex': '{}'.format(content)}
    )
    user_count = User.count(username={'$regex': '{}'.format(content)})
    if user_count % limit == 0:
        pages = user_count // limit
    else:
        pages = user_count // limit + 1
    # 5 个最近无人回复的话题
    ts = Topic.topic_noreply()

    return render_template(
        '/search/users.html',
        content=content,
        current_user=c_u,
        users=users,
        ts=ts,
        page=page,
        pages=pages
    )
