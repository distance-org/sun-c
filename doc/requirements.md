大的模块：
用户
帖子
消息回复
消息通知
消息推送

## users
###　功能
- 创建用户资料
- 更新用户资料
- 查看用户资料
- 指定用户发布的帖子
- 用户回复的帖子

## posts
### 功能
- 帖子列表
-



## category（一级）

用户表
id
nickname
gender
phone
qq
微信
email
pwd
regTime
lastLoginTime


帖子表：
id
category_id
title
content
imagesPath
authorId
createTime
updateTime


种类表
id
name

comments表
id 评论内容  帖子id  fromUserId toUserId toCommentsId  createTime

私信表

系统消息表
id
content
createTime
updateTime
audit_status

notification表(暂时不考虑)
id
type：通知类型 帖子回复、私信、系统消息


