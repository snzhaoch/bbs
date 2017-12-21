#!/usr/bin/env bash

# 如何使用
# sudo su
# bash -x setup_development.sh


# 默认 root
echo "sudo su" >> /home/ubuntu/.bashrc

# ${source_root} 是代码所在目录
source_root='/home/bbs'

echo "cd ${source_root}" >> /root/.bashrc

# 换成中科大的源
ln -f -s ${source_root}/sources.list /etc/apt/sources.list
mkdir /root/.pip
ln -f -s ${source_root}/pip.conf /root/.pip/pip.conf

# 装依赖
apt-get update
apt-get install -y git python3 python3-pip
apt-get install -y nginx mongodb supervisor redis-server

pip3 install -U pip setuptools wheel
pip3 install jinja2 flask gunicorn pymongo gevent

# 删掉 nginx default 设置
rm -f /etc/nginx/sites-enabled/*
rm -f /etc/nginx/sites-available/*

# 建立一个软连接
ln -s -f ${source_root}/bbs.conf /etc/supervisor/conf.d/bbs.conf
# 不要再 sites-available 里面放任何东西
ln -s -f ${source_root}/bbs.nginx /etc/nginx/sites-enabled/bbs

# 设置文件夹权限给 nginx 用
chmod o+xr /home
chmod -R o+xr ${source_root}

service supervisor restart
service nginx restart

echo "setup development environemtn success"