'use strict';
const Service = require('egg').Service;

class TeachersService extends Service {
  /**
   * 添加学生信息
   * @param {*} name -名称
   * @param {*} age -年龄
   * @return {Object} 对象
   */
  async addTeachers( body) {
    try {
      const result = await this.app.mysql.insert('teachers', body);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  // // /**
  // //  * 删除教员信息信息
  // //  * @param {*} id  教员信息ID
  // //  * @return {Object} 对象
  // //  */
  async delTeachers(id) {
    try {
      const result = await this.app.mysql.delete('teachers', {
        id,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  // // /**
  // //  * 更新学生信息
  // //  * @param {*} params 学生信息
  // //  * @return {Object} 对象
  // //  */
  async updateTeachers(body) {
    try {
      const result = await this.app.mysql.update('teachers', {
        where: {
          userId: body.userId,
        },
      });
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
   * 查询教员信息
   * id（主键）
   * teacher_id（外键，关联教员注册表的id）
   * 姓名（name）：教员的姓名。
   * 手机号（phone_number）：教员的手机号码。
   * 学校（school）：教员所在的学校名称。
   * 专业（major）：教员所学的专业。
   * 科目（subjects）：教员教授的科目，可以是一个或多个科目的组合。
   * 地区（region）：教员所在的地区。
   * 性别（gender）：教员的性别。
   * 自我描述（self_description）：教员对自己的简短介绍。
   * 课酬（course_fee）：教员每小时或每天的课酬。
   * 任教方式（teaching_method）
   */
  // 获取用户信息
  async getUserInfo(param) {
    const result = await this.app.mysql.get('teachers', param);
    // const result = await this.app.mysql.query(`SELECT * FROM tb_ResidentInfo WHERE PhoneNumber = ?`,[param.PhoneNumber])
    // const result = await this.app.mysql.query(`SELECT * FROM tb_ResidentInfo where`,param)
    return result;
  }
  async getTeachers() {
    try {
      const result = await this.app.mysql.select('teachers' +
        '');
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TeachersService;
