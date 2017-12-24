DogeMax BBS
===========================
一个灌水，交流，学习的论坛
------------------------------------------------
## 一键部署方式
    ```Bash
    sudo su
    bash -x setup_development.sh
    ```
------------------------------------------------
## 论坛简介/演示
------------------------------------------------
* 注册登录
    * 注册
        * 用户名过滤，禁止非法字段；有长度限制
        * 密码无限制，可为空
        * 注册失败有原因提示
        * 注册成功跳转到首页
    * 登录
        * 登录失败有原因提示
        * 登陆成功跳转到首页

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E6%B3%A8%E5%86%8C_%E7%99%BB%E5%BD%95.gif)


* 话题
    * 有板块区分
    * 支持 Markdown
    * 可以设置置顶
    * 无人回复话题展示
    * 可以删除
    * 话题有分页功能

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E8%AF%9D%E9%A2%98.gif)


* 评论（动图与消息提示功能一起展示）
    * 支持 Markdown
    * 可以在回复中 @ 其他人
    * 作者回复会有标记
    * 可以删除


* 消息提示
    * 以下情况会收到消息提示
        * 在回复中被 @
        * 发布的话题被作者以外的人回复
    * 提示方式
        * 导航栏消息按钮会显示未读数量
        * 点击消息按钮会显示消息列表，未读消息会用黄色标记，点击链接的话题，黄色标记消失，导航栏提示消失

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E8%AF%84%E8%AE%BA_%40_%E6%B6%88%E6%81%AF%E6%8F%90%E7%A4%BA.gif)


* 私信
    * 发送方式
        * 在用户主页点击私信按钮给该用户发送私信
        * 点击，导航栏的私信按钮，手动输入用户名，发送私信
    * 提示方式
        * 收到私信导航栏私信按钮会显示未读书量
        * 点击私信按钮会显示私信列表，未读私信会用黄色标记，可以点击查看对话查找与该用户的历史记录

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E7%A7%81%E4%BF%A1.gif)


* 搜索
    * 在导航栏的搜索框可以搜索内容与用户
    * 可以查找更多内容，有分页功能

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E6%90%9C%E7%B4%A2.gif)


* 个人信息编辑
    * 改密码
    * 改个性签名
    * 改头像

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%BC%96%E8%BE%91.gif)


* 版块管理
    * 新增板块
    * 删除版块（会将板块下的话题一起删除）
    * 编辑版块
    * 带有 "测试" 字段的板块会与其他版块隔离
        - 此版块内容不会出现在'主页'与'无人回复话题'中
        - 测试板块以外的置顶帖会在其他版块共享，但不会出现在测试板块
        - 测试板块置顶帖也只在测试板块存在

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E6%9D%BF%E5%9D%97%E7%AE%A1%E7%90%86.gif)


* 用户权限管理
    * 管理员
        * 管理板块
        * 删除话题
        * 删除回复
        * 设置置顶话题
    * 超级管理员
        * 可以设置论坛用户权限
        * 不能将其他用户设为超级管理员
        * 超级管理员自身权限不能被变更
        * 管理板块
        * 删除话题
        * 删除回复
        * 设置置顶话题

    ![image](https://github.com/snzhaoch/bbs/blob/master/demo/%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86.gif)
