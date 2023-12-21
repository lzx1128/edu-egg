// ImageController
const fs = require('fs') // 引入fs，node 自带的文件处理工具
const moment = require('moment') // 引入moment 时间处理工具
const mkdirp = require('mkdirp') // 引入文件夹处理工具
const path = require('path');
const Controller = require('egg').Controller;
const api = require('../utils/utils').api;

class ImageController extends Controller {
  async uploadImg() {
    const { ctx, app } = this;
    // 1 获取我们上传文件。 是一个数组，只有一个文件情况下，默认为数组中的下标0。
    let file = ctx.request.files[0]

    // 2 声明存放资源的路径
    let uploadDir = ''
    let newUrl = ''
    let result= ''

    try {
      // 3 读取文件内容
      let f = fs.readFileSync(file.filepath)
      // 4 获取当前日期
      let day = moment(new Date()).format('YYYYMMDD')
      // 5 生成文件最后要保存的路径地址
      let dir = path.join(this.config.uploadDir, day);

      await mkdirp(dir); // 6 这个方法是，如果 上述dir 路径存在，那就不创建，如果不存在则会创建这个对应目录文件夹
      // 7 返回图片保存的完整路径
         uploadDir = path.join(dir,file.filename);
         //解决中文乱码问题


        // 8 将图片信息保存到数据库中
        newUrl = api +  uploadDir.replace(/\\/g, '/');

      result = await app.mysql.insert('img', {
        filename: file.filename,
        imgurl: newUrl
      });
      // 8 将图片内容写入到文件夹下
      fs.writeFileSync(uploadDir, f)
    } finally {
      // 清除临时文件
      ctx.cleanupRequestFiles();
    }

    ctx.body = {
      status: 200,
      msg: '上传成功',
      data: {
        imgurl: newUrl

      }
    }
  }
}
module.exports = ImageController;
