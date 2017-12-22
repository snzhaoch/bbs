import time


def formatted_time(time_unix):
    """
    unix 时间格式化函数
    2017/12/10 08:59:15
    """
    format = '%Y/%m/%d %H:%M:%S'
    value = time.localtime(time_unix)
    return time.strftime(format, value)


def period_time(time_unix):
    """
    Unix时间距现在时间
    3年前
    2个月前
    1天前
    """
    now_time = time.time()
    period_year = int((now_time - time_unix) / 60 / 60 / 24 // 365)
    period_month = int((now_time - time_unix) / 60 / 60 / 24 // 30)
    period_day = int((now_time - time_unix) / 60 / 60 // 24)
    period_hour = int((now_time - time_unix) / 60 // 60)
    period_minute = int((now_time - time_unix) // 60)
    period_second = int((now_time - time_unix)) + 1
    period = {'年': period_year, '个月': period_month, '天': period_day, '小时': period_hour, '分钟': period_minute}
    for s, p in period.items():
        if p is not 0:
            r = '{}{}前'.format(p, s)
            return r
    r = '{}秒前'.format(period_second)
    return r


def log(*args, **kwargs):
    """
    log 函数，并将执行时间与参数写到 log 日志中
    """
    dt = formatted_time(int(time.time()))
    with open('log.txt', 'a', encoding='utf-8') as f:
        print(dt, *args, **kwargs)
        print(dt, *args, file=f, **kwargs)
