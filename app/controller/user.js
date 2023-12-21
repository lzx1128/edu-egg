'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 注册
  async register() {
    const { ctx } = this;
    const { PhoneNumber, password,   role,   avatar} = ctx.request.body; // 获取注册需要的参数
    const userInfo = await ctx.service.user.getPhoneNumber(PhoneNumber); // 获取用户信息
    // 判断是否已经存在
    if (userInfo && userInfo.id) {
      ctx.body = {
        status: 500,
        msg: '手机号已被注册，请重新输入',
        data: null,
        success: false,
      };
      return;
    }
    // 调用 service 方法，将数据存入数据库。
    const result = await ctx.service.user.register({
      PhoneNumber,
      password,
      avatar,
      role,
    });

    if (result) {
      ctx.body = {
        status: 200,
        msg: '注册成功',
        data: null,
        success: true,
      };
    } else {
      ctx.body = {
        status: 500,
        msg: '注册失败',
        data: null,
        success: false,
      };
    }
  }
//登录
  async login() {
    // app 为全局属性，相当于所有的插件方法都植入到了 app 对象。
    const { ctx,app } = this;
    const { PhoneNumber, password } = ctx.request.body;
    // 根据用户名，在数据库查找相对应的id操作
    const userInfo = await ctx.service.user.getPhoneNumber(PhoneNumber);
    // 没找到说明没有该用户
    if (!userInfo || !userInfo.id) {
      ctx.status = 401;
      ctx.body = {
        status: 401,
        msg: '账号不存在',
        data: null,
      };
      return;
    }
    if (!PhoneNumber || !password) {
      ctx.body = {
        status: 500,
        msg: '账号密码不能为空',
        data: null
      }
      return
    }
    // 找到用户，并且判断输入密码与数据库中用户密码。
    if (userInfo && password !== userInfo.password) {
      ctx.status = 401;
      ctx.body = {
        status: 401,
        msg: '账号密码错误',
        success: false,
        data: null,
      };
      return;
    }
    const token = app.jwt.sign(
      {
        id: userInfo.id,
        PhoneNumber: userInfo.PhoneNumber,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // token 有效期为 24 小时
      },
      app.config.jwt.secret
    );

    ctx.body = {
      status: 200,
      msg: '登录成功',
      success: true,
      data: {
        id:userInfo.id,
        PhoneNumber:userInfo.PhoneNumber,
        avatar:userInfo.avatar,
        role:userInfo.role || '学员',
        token,
      },
    };
  }
  /*  更新用户信息 */
  async updateUser() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.user.updateUser(params);
      if (result) {
        ctx.body = {
          status: 200,
          msg: '更新成功',
          data: result,
        };
      } else {
        ctx.body = {
          status: 201,
          msg: '更新失败',
          data: {},
        };
      }

  }
  //
  async getUserInfo() {
    const { ctx, app } = this;
    const token = ctx.request.header.token;
    // 通过 app.jwt.verify 方法，解析出 token 内的用户信息
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    // 通过 getUserByName 方法，以用户名 decode.username 为参数，从数据库获取到该用户名下的相关信息
    const userInfo = await ctx.service.user.getPhoneNumber(decode.PhoneNumber);

    // userInfo 中应该有密码信息，所以我们指定下面四项返回给客户端
    // const defaultAvatar =
    //   'http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png';
    ctx.body = {
      status: 200,
      msg: '请求成功',
      data: {
        id: userInfo.id,
        PhoneNumber: userInfo.PhoneNumber,
        role:userInfo.role || '学员',
        avatar: userInfo.avatar,
      },
    };
  }
  /*
  * 重置密码
  *  */

    async resetPassword() {
    const { ctx } = this;
            const { PhoneNumber, password } = ctx.request.body;
            const userInfo = await ctx.service.user.getPhoneNumber(PhoneNumber);
            if (!userInfo || !userInfo.id) {
                ctx.body = {
                    status: 500,
                    msg: '账号不存在',
                    data: null,
                };
                return;
            }
            const result = await ctx.service.user.resetPassword({
                id: userInfo.id,
                password,
            });
            if (result) {
                ctx.body = {
                    status: 200,
                    msg: '重置成功',
                    data: null,
                };
            } else {
                ctx.body = {
                    status: 500,
                    msg: '重置失败',
                    data: null,
                };
            }
    }
}
  module.exports = UserController;
