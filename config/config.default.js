/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594024185296_2979';
  config.meta = {
    charset: 'utf-8',
    // 其他配置...
  };
  // add your middleware config here
  config.middleware = [];

// config/config.default.js

  config.jwt = {
    secret: '123456',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };


  // 数据库连接
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'stu',
      charset: 'utf8mb4', // 设置字符集为 utf8mb4

    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // config.default.js
const userConfig = {
  // myAppName: 'egg',
  uploadDir: 'app/public/upload',
};
  //文件存放路径和文件白名单
  config.uploadDir = 'app/public/img';
  config.multipart = {
    mode: 'file',
    fileSize: 1048576000,
    whitelist: ['.txt', '.png', '.jpg'],
  };
// // 文件静态路径
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/app/public',
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };



  // config.cors = {
  //   origin: '*', // 允许所有跨域访问
  //   credentials: true, // 允许 Cookie 跨域跨域
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  // };



  return {
    ...config,
    ...userConfig,
  };
};
