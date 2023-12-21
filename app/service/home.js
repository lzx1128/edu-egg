'use strict';
const Service = require('egg').Service;

class HomeService extends Service {
  /**
   * 添加学生信息
   * @param {*} name -名称
   * @param {*} age -年龄
   * @return {Object} 对象
   */
  async addCart(nicheng,
    photo,
    gender,
    school,
    describe) {
    try {
      const params = {
        nicheng,
        photo,
        gender,
        school,
        describe,
      };
      const result = await this.app.mysql.insert('category', params);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  // /**
  //  * 删除学生信息
  //  * @param {*} id  学生ID
  //  * @return {Object} 对象
  //  */
  async delCart(id) {
    try {
      const result = await this.app.mysql.delete('category', {
        id,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  // /**
  //  * 更新学生信息
  //  * @param {*} params 学生信息
  //  * @return {Object} 对象
  //  */
  async updateCart(params) {
    try {
      const result = await this.app.mysql.update('category', params);
      const updateSuccess = result.affectedRows === 1;
      if (updateSuccess) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 查询学生信息
   * @param {*} id -学生ID
   * @return {Object} 学生信息
   */
  async getCart(userId) {
    try {
      const params = {
        userId
      };
      const result = await this.app.mysql.get('students', params);
      return result;
    } catch (error) {
      console.log(error);
    }
  }


}

module.exports = HomeService;
