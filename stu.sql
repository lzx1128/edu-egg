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

 Date: 05/01/2024 11:40:11
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

SET FOREIGN_KEY_CHECKS = 1;
