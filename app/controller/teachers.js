'use strict';

const Controller = require('egg').Controller;

class TeachersController extends Controller {
  /*
  * 添加教员信息
  *  */
  async addTeachers() {
    const { ctx } = this;
    const userInfo = ctx.request.body;
    console.log(userInfo.PhoneNumber);
    const user = await ctx.service.teachers.getUserInfo({PhoneNumber : userInfo.PhoneNumber}); // 获取用户信息
    const param = {
      userId : userInfo.userId,
      name : userInfo.name,
      gender : userInfo.gender,
      age : userInfo.age,
      PhoneNumber : userInfo.PhoneNumber,
      experience : userInfo.experience,
      school : userInfo.school,
      subject : userInfo.subject,
      teaching_method : userInfo.teaching_method,
      major : userInfo.major,
      course : userInfo.course,
      location : userInfo.location,
      exLocation : userInfo.exLocation,
      Information : userInfo.Information,
      avatar : userInfo.avatar,

    } = ctx.request.body;
    // 判断是否已经存在
    // console.log(user);
    if (user) {
      ctx.body = {
        status: 500,
        msg: '教员已被注册',
        data: null
      };
      return;
    }

    const result = await ctx.service.teachers.addTeachers(param);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '添加成功',
        data: result,
      }
    } else {
      ctx.body = {
        status: 201,
        msg: '添加失败',
        data: {},
      };
    }
  }
//   // 删除学生信息
//   async delTeachers() {
//     const { ctx } = this;
//     const { id } = ctx.request.body;
//     const result = await ctx.service.teachers.delTeachers(id);
//     if (result) {
//       ctx.body = {
//         status: 200,
//         msg: '删除成功',
//         data: {},
//       };
//     } else {
//       ctx.body = {
//         status: 201,
//         msg: '删除失败',
//         data: {},
//       };
//     }
//   }
//   // 更新教员信息
  async updateTeachers() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.teachers.updateTeachers(params);
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
  // 查询教员信息
  async getTeachers() {
    const { ctx } = this;
    const result = await ctx.service.teachers.getTeachers();
    ctx.body = {
      status: 200,
      msg: '查询成功',
      data: result,
    };
  }
  // 根据userid查询查询教员信息
  async getTeacher() {
    let params = this.ctx.query //获取路径后面的参数
    // console.log('用户的参数：');
    // console.log(params);
    let sql = 'select * from teachers'

    let content = [];//参数
    let isMore = false;//是否有多个查询参数
    /**
     * @模糊查询-量大的时候效率低
     * select * from user where name like ? % 内容 %
     * 在user表中全局查找name值 == 内容的
     * % 内容 % 全局查找内容
     *   内容 %  查找以 内容 开头的数据
     * */
    if(params.id){
      sql += " where id like ?";
      content.push( "%"+params.id+"%" );
      isMore = true;
    }
    if(params.major){
      if(isMore){//true代表有多个参数
        sql += "and major LIKE ?";//and是两个条件都必须满足，or是或的关系
      }else{
        sql += " WHERE major LIKE ?";
      }
      content.push( "%"+params.major+"%" )
      isMore = true;
    }
    if(params.userId){
      if(isMore){//true代表有多个参数
        sql += "and userId LIKE ?";//and是两个条件都必须满足，or是或的关系
      }else{
        sql += " WHERE userId LIKE ?";
      }
      content.push( "%"+params.userId+"%" )
      isMore = true;
    }

    if (params.PhoneNumber) {
      if (isMore) {
        sql += " AND PhoneNumber LIKE ?";
      } else {
        sql += " WHERE PhoneNumber LIKE ?";
      }
      content.push("%" + params.PhoneNumber + "%");
    }
    let result= await this.app.mysql.query(
      sql,content
    );
    this.ctx.body = {
      status: 200,
      msg: '查询成功',
      data: result,
    };
    //   try {
    //
    //     const result = await this.app.mysql.get('teachers' ,
    //       params);
    //     return result;
    //   } catch (error) {
    //     console.log(error);
    //   }
  }
}
module.exports = TeachersController;
