/*
 Navicat Premium Data Transfer

 Source Server         : admin
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3306
 Source Schema         : stu

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 05/01/2024 11:12:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for img
-- ----------------------------
DROP TABLE IF EXISTS `img`;
CREATE TABLE `img` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '图片url',
  `filename` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '图片名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=210 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of img
-- ----------------------------
BEGIN;
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (197, 'http://localhost:7001/app/public/upload/20231219/WechatIMG40.jpg', 'WechatIMG40.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (198, 'http://localhost:7001/app/public/upload/20231219/VD9jXZJZqUw29df62e13a09cda2449342acdde43c37e.jpg', 'VD9jXZJZqUw29df62e13a09cda2449342acdde43c37e.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (199, 'http://localhost:7001/app/public/upload/20231219/WechatIMG40.jpg', 'WechatIMG40.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (200, 'http://localhost:7001/app/public/upload/20231219/WechatIMG40.jpg', 'WechatIMG40.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (201, 'http://localhost:7001/app/public/upload/20231219/WechatIMG40.jpg', 'WechatIMG40.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (202, 'http://localhost:7001/app/public/upload/20231219/WechatIMG40.jpg', 'WechatIMG40.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (203, 'http://localhost:7001/app/public/upload/20231219/Iy1gBtEMG7gt9df62e13a09cda2449342acdde43c37e.jpg', 'Iy1gBtEMG7gt9df62e13a09cda2449342acdde43c37e.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (204, 'http://localhost:7001/app/public/upload/20231219/5qhCO2TkG4dx9df62e13a09cda2449342acdde43c37e.jpg', '5qhCO2TkG4dx9df62e13a09cda2449342acdde43c37e.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (205, 'http://localhost:7001/app/public/upload/20231219/RTNvOXpA3hbM8e3a9f5b1e977c5772534b7d973b4627.jpg', 'RTNvOXpA3hbM8e3a9f5b1e977c5772534b7d973b4627.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (206, 'http://localhost:7001/app/public/upload/20231219/WechatIMG105.jpg', 'WechatIMG105.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (207, 'http://localhost:7001/app/public/upload/20231219/WechatIMG105.jpg', 'WechatIMG105.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (208, 'http://localhost:7001/app/public/upload/20231219/4DG0kv9Utbgi8e3a9f5b1e977c5772534b7d973b4627.jpg', '4DG0kv9Utbgi8e3a9f5b1e977c5772534b7d973b4627.jpg');
INSERT INTO `img` (`id`, `imgurl`, `filename`) VALUES (209, 'http://localhost:7001/app/public/upload/20231219/apeAYo70gibP8e3a9f5b1e977c5772534b7d973b4627.jpg', 'apeAYo70gibP8e3a9f5b1e977c5772534b7d973b4627.jpg');
COMMIT;

-- ----------------------------
-- Table structure for reviews
-- ----------------------------
DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL COMMENT '用户iid',
  `orderId` int(11) DEFAULT NULL COMMENT '订单ID',
  `tutorId` int(11) DEFAULT NULL,
  `goodsScore` int(11) DEFAULT NULL COMMENT '课程内容',
  `logisticsScore` int(11) DEFAULT NULL COMMENT '教学效果',
  `serviceScore` int(11) DEFAULT NULL COMMENT '沟通效果',
  `content` varchar(255) DEFAULT NULL COMMENT '评价内容',
  `createdAt` datetime DEFAULT NULL COMMENT '开始时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reviews
-- ----------------------------
BEGIN;
INSERT INTO `reviews` (`id`, `userId`, `orderId`, `tutorId`, `goodsScore`, `logisticsScore`, `serviceScore`, `content`, `createdAt`, `updatedAt`) VALUES (18, 51, 84, 1025, 4, 5, 5, '测试', '2023-12-19 13:19:47', '2023-12-19 13:19:47');
INSERT INTO `reviews` (`id`, `userId`, `orderId`, `tutorId`, `goodsScore`, `logisticsScore`, `serviceScore`, `content`, `createdAt`, `updatedAt`) VALUES (22, 55, 88, 1025, 3, 4, 5, '111111', '2023-12-19 19:30:44', '2023-12-19 19:30:44');
INSERT INTO `reviews` (`id`, `userId`, `orderId`, `tutorId`, `goodsScore`, `logisticsScore`, `serviceScore`, `content`, `createdAt`, `updatedAt`) VALUES (23, 55, 91, 1025, 2, 3, 5, '测试11111111', '2023-12-20 13:37:46', '2023-12-20 13:37:46');
INSERT INTO `reviews` (`id`, `userId`, `orderId`, `tutorId`, `goodsScore`, `logisticsScore`, `serviceScore`, `content`, `createdAt`, `updatedAt`) VALUES (24, 55, 92, 1025, 3, 4, 5, '3333333', '2023-12-20 17:33:53', '2023-12-20 17:33:53');
COMMIT;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
BEGIN;
INSERT INTO `role` (`id`, `roleName`, `description`, `status`) VALUES (1, '教员', '教师', '1');
INSERT INTO `role` (`id`, `roleName`, `description`, `status`) VALUES (2, '学员', '学员', '2');
COMMIT;

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tutorId` varchar(255) DEFAULT NULL COMMENT '用户ID',
  `tsGrade` varchar(255) DEFAULT NULL COMMENT '年级',
  `tsSubject` varchar(255) DEFAULT NULL COMMENT '科目',
  `Location` varchar(255) DEFAULT NULL COMMENT '教学地址',
  `exLocation` varchar(255) DEFAULT NULL COMMENT '详细地址',
  `PhoneNumber` varchar(20) DEFAULT NULL COMMENT '手机号',
  `course` varchar(255) DEFAULT NULL COMMENT '家教薪酬',
  `description` varchar(255) DEFAULT NULL COMMENT '自我介绍',
  `tsMethod` varchar(255) DEFAULT NULL COMMENT '授课方式',
  `status` varchar(255) DEFAULT NULL COMMENT '订单状态',
  `state` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
BEGIN;
INSERT INTO `students` (`id`, `tutorId`, `tsGrade`, `tsSubject`, `Location`, `exLocation`, `PhoneNumber`, `course`, `description`, `tsMethod`, `status`, `state`, `createdAt`) VALUES (84, '1025', '三年级', '语文', '北京市,北京市,昌平区', '天坛', '17634328154', '100元/小时', '测试', '线上教学', '2', 1, '2023-12-19 18:55:26');
INSERT INTO `students` (`id`, `tutorId`, `tsGrade`, `tsSubject`, `Location`, `exLocation`, `PhoneNumber`, `course`, `description`, `tsMethod`, `status`, `state`, `createdAt`) VALUES (88, '1025', '四年级', '数学', '北京市,北京市,昌平区', '2', '17634328154', '80元/小时', '3', '线上教学', '2', 1, '2023-12-19 19:30:44');
INSERT INTO `students` (`id`, `tutorId`, `tsGrade`, `tsSubject`, `Location`, `exLocation`, `PhoneNumber`, `course`, `description`, `tsMethod`, `status`, `state`, `createdAt`) VALUES (91, '1025', '一年级', '数学', '北京市,北京市,昌平区', '2', '17634328154', '60元/小时', '1', '线下授课', '2', 1, '2023-12-20 13:37:46');
INSERT INTO `students` (`id`, `tutorId`, `tsGrade`, `tsSubject`, `Location`, `exLocation`, `PhoneNumber`, `course`, `description`, `tsMethod`, `status`, `state`, `createdAt`) VALUES (92, '1025', '一年级', '英语', '北京市,北京市,昌平区', '6', '17634328154', '70元/小时', '1', '线下授课', '2', 1, '2023-12-20 17:33:53');
COMMIT;

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL COMMENT '用户ID',
  `name` varchar(255) NOT NULL COMMENT '姓名',
  `age` int(11) NOT NULL COMMENT '年龄',
  `gender` varchar(10) NOT NULL COMMENT '性别',
  `experience` varchar(255) NOT NULL COMMENT '教龄',
  `PhoneNumber` varchar(20) NOT NULL COMMENT '手机号',
  `school` varchar(255) NOT NULL COMMENT '学校',
  `subject` varchar(255) NOT NULL COMMENT '专业',
  `teaching_method` varchar(255) NOT NULL COMMENT '授课方式',
  `course` varchar(255) NOT NULL COMMENT '自我描述',
  `major` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '学科',
  `location` varchar(255) NOT NULL COMMENT '家教费用',
  `exLocation` varchar(255) DEFAULT NULL COMMENT '擅长学科',
  `Information` varchar(255) NOT NULL COMMENT '家教地址',
  `avatar` varchar(255) NOT NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=1026 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teachers
-- ----------------------------
BEGIN;
INSERT INTO `teachers` (`id`, `userId`, `name`, `age`, `gender`, `experience`, `PhoneNumber`, `school`, `subject`, `teaching_method`, `course`, `major`, `location`, `exLocation`, `Information`, `avatar`) VALUES (1025, 50, '李四', 34, '男', '1', '18738015681', '北京理工', '计算机', '线下授课', '60元/小时', '语文数学英语', '北京市,北京市,昌平区', '同学公寓', '对学生有耐心，会因材施教', 'http://localhost:7001/app/public/upload/20231219/RTNvOXpA3hbM8e3a9f5b1e977c5772534b7d973b4627.jpg');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `PhoneNumber` varchar(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `PhoneNumber`, `password`, `avatar`, `role`) VALUES (50, '18738015681', '123456', 'http://tmp/nyzGdL0SPiaZ954ae7d38af083c45bb7c2a1918dd834.jpeg', '教员');
INSERT INTO `user` (`id`, `PhoneNumber`, `password`, `avatar`, `role`) VALUES (55, '17634328154', '123456', 'http://tmp/nyzGdL0SPiaZ954ae7d38af083c45bb7c2a1918dd834.jpeg', '学员');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
