'use strict';
const Service = require('egg').Service;

class StuService extends Service {
  /**
   * 添加学生信息
   * @param {*} name -名称
   * @param {*} age -年龄
   * @return {Object} 对象
   */
  async addStu(params) {
    try {

      const result = await this.app.mysql.insert('students', params);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 删除学生信息
   * @param {*} id  学生ID
   * @return {Object} 对象
   */
  async delStu(id) {
    try {
      const result = await this.app.mysql.delete('students', {
        id,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 更新学生信息
   * @param {*} params 学生信息
   * @return {Object} 对象
   */
  async updateStu(params) {
    try {
      const result = await this.app.mysql.update('students', params);
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

  //   async getStu() {
  //   const { ctx } = this;
  //   try {
  //     // const params = {
  //     //   phoneNumber
  //     // };
  //     const student = await ctx.model.Students.findAll({
  //       where: { phoneNumber },
  //     });
  //
  //     const result = await ctx.app.mysql.get('students',params);
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async getStus() {
  //   try {
  //     const result = await this.app.mysql.select('students');
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}


module.exports = StuService;
