from models import Model
from models.topic import Topic


class Reply(Model):
    """
    保存回复数据的 model
    """

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = super().valid_names()
        names = names + [
            ('content', str, ''),
            ('topic_id', str, 0),
            ('user_id', str, 0),
        ]
        return names

    @classmethod
    def new(cls, form, **kwargs):
        """
        创建 reply 实例，并将 reply 所属话题的 lastreply_time 更新
        """
        r = super().new(form, **kwargs)
        topic_id = r.topic_id
        update_form = {'lastreply_time': r.created_time}
        Topic.update(topic_id, update_form)
        return r

    def user(self):
        """
        查找回复的用户
        """
        from .user import User
        u = User.find(self.user_id)
        return u
