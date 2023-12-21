'use strict';

const Controller = require('egg').Controller;

class StuController extends Controller {
/*
* 查询学员信息
*  */
  async addStu() {
    const { ctx } = this;
    const userInfo= ctx.request.body;
    const params={
      tutorId: userInfo.tutorId,
      tsGrade : userInfo.tsGrade,
      tsSubject : userInfo.tsSubject,
      exLocation : userInfo.exLocation,
      PhoneNumber : userInfo.PhoneNumber,
      description : userInfo.description,
      course : userInfo.course,
      tsMethod : userInfo.tsMethod,
      status : userInfo.status,
      Location : userInfo.Location,
      createdAt:userInfo.createdAt,
      state: 0,

    }
    const result = await ctx.service.stu.addStu(params);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '添加成功',
        data: {},
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '添加失败',
        data: {},
      };
    }
  }
  // 删除学生信息
  async delStu() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      msg: '删除成功',
      data: {},
    };
  }
  // 更新学生信息
  async updateStu() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.stu.updateStu(params);
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
  // 查询学生信息
  async getStu() {
    let params = this.ctx.query //获取路径后面的参数
    // console.log('用户的参数：');
    // console.log(params);
    let sql = 'select * from students'

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
    if(params.tutorId){
      if(isMore){//true代表有多个参数
        sql += "and tutorId LIKE ?";//and是两个条件都必须满足，or是或的关系
      }else{
        sql += " WHERE tutorId LIKE ?";
      }
      content.push( "%"+params.tutorId+"%" )
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

  }

}
module.exports = StuController;
