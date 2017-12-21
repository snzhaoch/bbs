from models import Model


class Chat(Model):
    """
    保存对话数据的 model
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
            ('chat_id', str, 0),
        ]
        return names

    @classmethod
    def find_chat_ids(cls, user_id):
        """
        查找用户的所有 chat_id
        """
        chats = Chat.find_all(sender_id=user_id)
        chats.extend(Chat.find_all(receiver_id=user_id))
        chats = sorted(chats, key=lambda chat: chat.updated_time, reverse=True)
        chat_ids = []
        for c in chats:
            chat_ids.append(c.chat_id)
        return chat_ids
