
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
//添加收藏绑定用户id与教员id
    async add() {
        const { ctx, service } = this;
        const { user_id, teacher_id } = ctx.request.body;
        const res = await service.collection.add(user_id, teacher_id);
        if (res == 0) {
            ctx.body = {
                code: 201,
                msg: '已收藏'
            }
        }
        else {
            ctx.body = {
                code: 200,
                msg: '收藏成功'
            }
        }
        
    }
//删除收藏
    async delete() {
        const { ctx, service } = this;
        const { user_id,} = ctx.request.body;
        const res = await service.collection.delete(user_id,);
        if(res==0){
            ctx.body = {
                code: 201,
                msg: '删除失败'
            }

        }
        else{
            ctx.body = {
                code: 200,
                msg: '删除成功'
            }
        }
    }
//查询收藏  
    async select() {
        const { ctx, service } = this;
        const { user_id } = ctx.request.body;
        const res = await service.collection.select(user_id);
        ctx.body = res;
    }





}
module.exports = HomeController;
