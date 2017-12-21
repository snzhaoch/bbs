from models import Model
from routes import current_user
from utils import log


class Message(Model):
    """
    保存私信数据的 model
    """

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = super().valid_names()
        names = names + [
            ('content', str, ''),
            ('sender_id', str, 0),
            ('receiver_id', str, 0),
            ('read', bool, False),
        ]
        return names

    @classmethod
    def new(cls, form, **kwargs):
        """
        消息的创建函数
        """
        m = super().new(form, **kwargs)
        min_id = min(m.sender_id, m.receiver_id)
        max_id = max(m.sender_id, m.receiver_id)
        chat_id = '{}{}'.format(min_id, max_id)
        m.chat_id = chat_id
        m_id = m.id
        form = {
            m.sender_id: True,
            m.receiver_id: True,
            'chat_id': chat_id,
        }
        m.update(m_id, form)
        log(m)
        return m

    @staticmethod
    def mark_read(sender_id, receiver_id):
        """
        设置消息已读
        """
        unread_messages = Message.find_all(
            sender_id=sender_id,
            receiver_id=receiver_id,
            read=False
        )
        if unread_messages is not []:
            for m in unread_messages:
                m.read = True
                m.save()
            log(unread_messages)

    def sender(self):
        """
        查找消息发送对象
        """
        from models.user import User
        sender = User.find(self.sender_id)
        return sender

    def receiver(self):
        """
        查找私信接收对象
        """
        from models.user import User
        receiver = User.find(self.receiver_id)
        return receiver

    def unread_messages(self):
        """
        查找未读私信实例
        """
        user = current_user()
        messages = Message.find_all(
            receiver_id=user.id,
            chat_id=self.chat_id,
            read=False,
        )
        return messages

    @classmethod
    def unread_messages_count(cls, user_id):
        """
        查找用户未读私信数量
        """
        c = Message.count(
            receiver_id=user_id,
            read=False,
        )
        return c

    @staticmethod
    def find_chat(user_id, friend_id):
        '''
        查找两个之间的所有私信
        两个参数位置任意
        私信按时间排序，最近发的排在前面
        '''
        min_id = min(user_id, friend_id)
        max_id = max(user_id, friend_id)
        chat_id = '{}{}'.format(min_id, max_id)
        messages = Message.find_lss(
            sort=-1,
            chat_id=chat_id,
        )
        return messages

    @staticmethod
    def find_list(chat_ids):
        """
        查找用户的消息列表
        """
        message_list = []
        for c in chat_ids:
            m = Message.find_all(chat_id=c)
            m = m[-1]
            message_list.append(m)
        return message_list

    def friend(self):
        """
        查找用户私信对象
        """
        user_id = current_user().id
        if self.sender_id == user_id:
            return self.receiver()
        else:
            return self.sender()
