from models import Model
from models.user import User
from models.topic import Topic


class New(Model):
    """
    保存提示数据的 model
    """

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = super().valid_names()
        names = names + [
            ('sender_id', str, 0),
            ('receiver_id', str, 0),
            ('topic_id', str, 0),
            ('read', bool, False),
        ]
        return names

    @classmethod
    def find_news(cls, user_id):
        """
        查找用户的所有消息，按时间排序
        """
        news = cls.find_lss(sort=-1, receiver_id=user_id)
        return news

    @classmethod
    def unread_news_count(cls, user_id):
        """
        查找用户未读消息数量
        """

        c = New.count(
            receiver_id=user_id,
            read=False,
        )
        return c

    def topic(self):
        """
        查找消息所属的话题
        """
        topic = Topic.find_by(id=self.topic_id)
        return topic

    def sender(self):
        """
        查找消息的发送用户
        """
        sender = User.find_by(id=self.sender_id)
        return sender

    def receiver(self):
        """
        查找消息的接收用户
        """
        receiver = User.find_by(id=self.receiver_id)
        return receiver