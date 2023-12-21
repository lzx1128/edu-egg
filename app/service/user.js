'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  // 更新用户信息
  async updateUser(params) {
    try {
      const result = await this.app.mysql.update('user', params);
      // console.log(result);
      if (result) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  // 查询用户信息
  async getPhoneNumber(PhoneNumber) {
    const { app } = this;
    try {
      const result = await app.mysql.get('user', { PhoneNumber });
      // console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
  // 注册
  async register(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user', params);
      return result;
    } catch (error) {
      return null;
    }
  }
  //重置密码
    async resetPassword(params) {
        const { app } = this;
        try {
            const result = await app.mysql.update('user', params);
            return result;
        } catch (error) {
            return null;
        }
    }

}
module.exports = UserService;
