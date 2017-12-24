from models import Model
from models.user import User
from models.board import Board
import time


class Topic(Model):
    """
    保存话题数据的 model
    """

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = super().valid_names()
        names = names + [
            ('views', int, 0),
            ('title', str, ''),
            ('content', str, ''),
            ('user_id', str, 0),
            ('board_id', str, 0),
            ('top', bool, False),
            ('test', bool, False),
            ('lastreply_time', int, int(time.time())),
        ]
        return names

    @classmethod
    def new(cls, form, **kwargs):
        """
        新增一个话题，并将话题 test 字段与所属板块同步
        """
        m = super().new(form, **kwargs)
        board = m.board()
        m.test = board.test
        m.save()
        return m

    @classmethod
    def find(cls, id):
        """
        查找话题，每调用一次 views + 1
        """
        m = cls.find_by(id=id)
        m.views += 1
        m.save()
        return m

    @classmethod
    def delete(cls, id):
        """
        删除话题，并且将对应的回复删除
        """
        from models.reply import Reply
        m = Topic.find_by(id=id)
        rs = m.replies()
        for r in rs:
            Reply.delete(r.id)
        super().delete(id)
        return m

    @classmethod
    def topic_noreply(cls):
        """
        查找最近 5 个无回复的话题实例
        """
        ms = cls.find_all(test=False)
        ts = []
        for i in range(len(ms)):
            if ms[-i].replies() == []:
                ts.append(ms[-i])
                if len(ts) == 5:
                    break
        return ts

    def replies(self):
        """
        查找话题所有回复
        """
        from .reply import Reply
        ms = Reply.find_all(topic_id=self.id)
        return ms

    def reply_last(self):
        """
        查找话题最后一条回复，若无回复则返回本话题
        """
        ms = self.replies()
        if ms != []:
            m = ms[-1]
        else:
            m = self
        return m

    def board(self):
        """
        查找话题所属的板块
        """
        m = Board.find(self.board_id)
        return m

    def user(self):
        """
        查找话题的作者
        """
        u = User.find(id=self.user_id)
        return u

    def set_top(self):
        """
        设置话题置顶
        """
        self.top = True
        self.save()

    def cancel_top(self):
        """
        取消话题置顶
        """
        self.top = False
        self.save()