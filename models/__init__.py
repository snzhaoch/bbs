import time
from bson import ObjectId
from pymongo import MongoClient
from utils import (
    log,
    formatted_time,
    period_time,
)


class Model(object):
    """
    所有 model 的基类
    """

    db = MongoClient('mongodb://localhost:27017')['bbs']

    @classmethod
    def valid_names(cls):
        """
        代替 __init__ 函数，可以使 update 函数放到 models.__init__.py 中
        """
        names = [
            # (字段名, 类型, 默认值)
            ('deleted', bool, False),
            ('created_time', int, 0),
            ('updated_time', int, 0),
        ]
        return names

    def __repr__(self):
        class_name = self.__class__.__name__
        properties = ('{0} = {1}'.format(k, v) for k, v in self.__dict__.items())
        return '<{0}: \n  {1}\n>'.format(class_name, '\n  '.join(properties))

    @classmethod
    def new(cls, form, **kwargs):
        m = cls()

        for name in cls.valid_names():
            k, t, v = name
            if k in form:
                setattr(m, k, t(form[k]))
            else:
                setattr(m, k, v)

        for k, v in kwargs.items():
            if hasattr(m, k):
                setattr(m, k, v)
            else:
                raise KeyError

        timestamp = int(time.time())
        m.created_time = timestamp
        m.updated_time = timestamp
        m.deleted = False
        m.save()
        return m

    def save(self):
        name = self.__class__.__name__
        log('save', self.__dict__)
        _id = self.db[name].save(self.__dict__)
        self.id = str(_id)

    @classmethod
    def delete(cls, id):
        name = cls.__name__
        query = {
            '_id': ObjectId(id),
        }
        values = {
            '$set': {
                'deleted': True
            }
        }
        cls.db[name].update_one(query, values)

    @classmethod
    def update(cls, id, form):
        name = cls.__name__
        query = {
            '_id': ObjectId(id),
        }
        values = {
            '$set': form,
        }
        log('mongo update', query, values)
        cls.db[name].update_one(query, values)

    @classmethod
    def _new_with_bson(cls, bson):
        """
        这是给内部 all 这种函数使用的函数
        从 mongo 数据中恢复一个 model
        """
        m = cls()
        log('bson', bson)
        for key in bson:
            setattr(m, key, bson[key])
        m.id = str(bson['_id'])
        return m

    @classmethod
    def all(cls):
        return cls._find()

    @classmethod
    def count(cls, **kwargs):
        name = cls.__name__
        kwargs['deleted'] = False
        if 'id' in kwargs:
            kwargs['_id'] = ObjectId(kwargs['id'])
            kwargs.pop('id')
        count = cls.db[name].find(kwargs).count()
        return count

    @classmethod
    def _find(cls, limit=None, skip=0, sort=1, **kwargs):
        name = cls.__name__
        kwargs['deleted'] = False
        if 'id' in kwargs:
            kwargs['_id'] = ObjectId(kwargs['id'])
            kwargs.pop('id')
        if type(sort) is int:
            sort = [('_id', sort)]
        elif type(sort) is tuple:
            sort = [sort]
        if limit is None:
            ds = cls.db[name].find(kwargs).sort(sort).skip(skip)
        else:
            ds = cls.db[name].find(kwargs).sort(sort).skip(skip).limit(limit)
        log('_find', kwargs, ds)
        l = [cls._new_with_bson(d) for d in ds]
        return l

    @classmethod
    def find_by(cls, **kwargs):
        return cls.find_one(**kwargs)

    @classmethod
    def find_lss(cls, limit=None, skip=0, sort=1, **kwargs):
        return cls._find(limit, skip, sort, **kwargs)

    @classmethod
    def find_all(cls, **kwargs):
        return cls._find(**kwargs)

    @classmethod
    def find(cls, id):
        return cls.find_one(id=id)

    @classmethod
    def find_one(cls, sort=1, **kwargs):
        m = cls._find(limit=1, sort=sort, **kwargs)
        if m == []:
            return None
        else:
            return m[0]

    def json(self):
        d = self.__dict__
        d.pop('_id')
        return d

    def period_ct(self):
        return period_time(self.created_time)

    def formatted_ct(self):
        return formatted_time(self.created_time)
