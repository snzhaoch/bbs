from models import Model


class Board(Model):
    """
    保存板块数据的 model
    """

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = super().valid_names()
        names = names + [
            ('title', str, ''),
            ('test', bool, False),
        ]
        return names

    @classmethod
    def new(cls, form, **kwargs):
        """
        新增板块，若板块名字带有"测试"，则将 test 字段设为 True
        """
        m = super().new(form, **kwargs)
        if '测试' in form['title']:
            m.test = True
            m.save()
        return m

    @classmethod
    def delete(cls, id):
        """
        删除板块，并且将对应的话题删除
        """
        from models.topic import Topic
        topics = Topic.find_all(board_id=id)
        for t in topics:
            Topic.delete(t.id)
        super().delete(id)