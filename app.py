from flask import Flask
from routes.user import main as user_routes
from routes.topic import main as topic_routes
from routes.reply import main as reply_routes
from routes.board import main as board_routes
from routes.message import main as message_routes
from routes.new import main as new_routes
from routes.search import main as search_routes
from config import secret_key


def configured_app():
    app = Flask(__name__)
    # 设置 secret_key 来使用 flask 自带的 session，为了保证安全，
    # 此 secret_key 不能上传到 Github，代码使用者可以自行设置
    app.secret_key = secret_key

    app.register_blueprint(topic_routes)
    app.register_blueprint(user_routes, url_prefix='/user')
    app.register_blueprint(reply_routes, url_prefix='/reply')
    app.register_blueprint(board_routes, url_prefix='/board')
    app.register_blueprint(message_routes, url_prefix='/message')
    app.register_blueprint(new_routes, url_prefix='/new')
    app.register_blueprint(search_routes, url_prefix='/search')
    return app


if __name__ == '__main__':
    app = configured_app()
    # 自动 reload jinja
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.jinja_env.auto_reload = True
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    config = dict(
        debug=True,
        host='0.0.0.0',
        port=3000,
        threaded=True,
    )
    app.run(**config)
