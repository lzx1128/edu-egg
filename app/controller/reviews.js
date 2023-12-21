'use strict';

const Controller = require('egg').Controller;

class ReviewsController extends Controller {
  // 添加评论
  async addReviews() {
    const { ctx } = this;
const userInfo= ctx.request.body;
    const params={
      userId: userInfo.userId,
      orderId: userInfo.orderId,
      tutorId: userInfo.tutorId,
      goodsScore: userInfo.goodsScore,
      logisticsScore: userInfo.logisticsScore,
      serviceScore: userInfo.serviceScore,
      content: userInfo.content,
      createdAt: userInfo.createdAt,
      updatedAt: userInfo.updatedAt,
    }
    const result = await ctx.service.reviews.addReviews(params);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '评价成功',
        data: {},
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '评价失败',
        data: {},
      };
    }
  }
  //添加评论
    async getReviews() {
      let params = this.ctx.query //获取路径后面的参数
      let sql = 'select * from reviews'
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
      let result= await this.app.mysql.query(
        sql,content
      );

        if (result) {
            this.ctx.body = {
                status: 200,
                msg: '查询成功',
                data: result,
            };
        } else {
            this.ctx.body = {
                status: 201,
                msg: '查询失败',
                data: {},
            };
        }
    }

}
module.exports = ReviewsController;
