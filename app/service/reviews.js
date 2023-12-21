'use strict';
const Service = require('egg').Service;

class ReviewsService extends Service {
//添加评论
  async addReviews(params) {
    try {
      const result = await this.app.mysql.insert('reviews', params);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ReviewsService;
