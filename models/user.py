from models import Model
import hashlib
Model = Model


class User(Model):
    """
    保存用户数据的 model
    """

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = super().valid_names()
        names = names + [
            ('username', str, ''),
            ('password', str, ''),
            ('image', str, '/user/image/user_default.png'),
            ('signature', str, '这家伙很懒，什么个性签名都没有留下'),
            ('authority', str, '3'),
        ]
        return names

    @staticmethod
    def salted_password(password, salt='$!@><?>HUI&DWQa`'):
        """
        为用户密码加盐
        """
        def sha256(ascii_str):
            return hashlib.sha256(ascii_str.encode()).hexdigest()

        hash1 = sha256(password)
        hash2 = sha256(hash1 + salt)
        return hash2

    @classmethod
    def register(cls, form):
        """
        注册用户
        """
        name = form['username']
        password = form['password']
        if len(name) <= 2:
            return '用户名长度需大于2'
        elif User.find_by(username=name) is not None:
            return '用户名已存在'
        else:
            password = User.salted_password(password)
            u = User.new(dict(
                username=name,
                password=password,
            ))
            if name == 'admin':
                u.authority = '1'
                u.save()
            return u

    @classmethod
    def validate_login(cls, form):
        """
        验证登录
        """
        if User.find_by(username=form['username']) is None:
            return '用户名不存在'
        user = User.find_by(
            username=form['username'],
            password=User.salted_password(form['password'])
        )
        if user is None:
            return '密码错误'
        else:
            return user

    @classmethod
    def auth_dict(cls):
        """
        权限字典
        """
        auth_dict = {
            '1': '超级管理员',
            '2': '管理员',
            '3': '普通用户',
        }
        return auth_dict

    def auth(self):
        """
        用户权限
        """
        auth_dict = User.auth_dict()
        authority = auth_dict[self.authority]
        return authority

    def unread_news_count(self):
        """
        查找用户未读消息数量
        """
        from models.new import New
        c = New.unread_news_count(user_id=self.id)
        return c

    def unread_messages_count(self):
        """
        查找用户未读私信数量
        """
        from models.message import Message
        c = Message.unread_messages_count(user_id=self.id)
        return c