import uuid
import redis
from functools import wraps
from flask import (
    session,
    request,
    abort,
    redirect,
    url_for,
)
from models.user import User
from utils import log


def current_user():
    if 'user_id' in session:
        uid = session['user_id']
        u = User.find_by(id=uid)
    else:
        u = None
    return u


# redis 自动 decode，否则数据取出来是 bytes
r = redis.StrictRedis(charset="utf-8", decode_responses=True)
# csrf_tokens = dict()


def csrf_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.args.get('token')
        u = current_user()
        # if token in csrf_tokens and csrf_tokens[token] == u.id:
        #     csrf_tokens.pop(token)
        log('check token', token, u.id, r.exists(token), r.get(token))
        if r.exists(token) and r.get(token) == u.id:
            r.delete(token)
            return func(*args, **kwargs)
        else:
            abort(401)

    return wrapper


def new_csrf_token():
    u = current_user()
    if u is not None:
        token = str(uuid.uuid4())
        # csrf_tokens[token] = u.id
        r.set(token, u.id)
        log('new token', token, u.id)
        return token
    return None


def login_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        u = current_user()
        if u is not None:
            return func(*args, **kwargs)
        else:
            return redirect(url_for('topic.index'))

    return wrapper


def authority_required(level):
    def wrapper(func):
        @wraps(func)
        def _wrapper(*args, **kwargs):
            u = current_user()
            if int(u.authority) <= level:
                return func(*args, **kwargs)
            else:
                return redirect(url_for('topic.index'))

        return _wrapper

    return wrapper
