'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware} = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  /* 教员信息列表 */
  router.get('/getTeachers', controller.teachers.getTeachers);// 获取教员信息
  router.get('/getTeacher', controller.teachers.getTeacher);// 获取教员信息
  router.post('/addTeachers', controller.teachers.addTeachers);// 添加教员信息
  router.post('/updateTeachers', controller.teachers.updateTeachers);// 更新教员信息
  // router.post('/delTeachers', controller.teachers.delTeachers);
  /* 订单 */
  /* 学生列表  */
  router.get('/getStu', controller.stu.getStu); // 获取学生信息
  router.post('/addStu', controller.stu.addStu); // 添加学生信息
  router.post('/updateStu', controller.stu.updateStu); // 更新学生信息
  router.post('/delStu', controller.stu.delStu); // 删除学生信息
  router.post('/upload',  controller.upload.upload);  /* 图片上传 */
  router.post('/api/image/upload', controller.image.uploadImg);//上传图片
  // router.post('/upload', controller.upload.upload);
  router.post('/wxOpenid', controller.wxapi.wxOpenid);/* 微信接口 */
  // router.post('/wxCryptPhone', controller.wxapi.wxCryptPhone);
  router.post('/login', controller.user.login); // 登录
  router.post('/register', controller.user.register);//注册
  router.get('/getUserInfo',_jwt, controller.user.getUserInfo);//获取用户信息
  router.post('/updateUser', controller.user.updateUser);//更新用户信息
  router.post('/resetPassword', controller.user.resetPassword);//修改密码

  router.post('/addReviews', controller.reviews.addReviews)//添加评论
  router.get('/getReviews', controller.reviews.getReviews)//获取评论
  // router.post('/v1/getUserInfo', controller.teachers.getUserInfo);

};
