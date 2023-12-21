'use strict';
const Controller = require('egg').Controller;
const WXBizDataCrypt = require('.././extend/ WXBizDataCrypt');
const wxConfig = {
  appid: 'wxaea6e74238fb94f5',
  secret: '2f997ea2af634ecef1b6dcd4e0352591',
};
class wxController extends Controller {
  async wxOpenid() {
    const { ctx } = this;
    const { Code } = ctx.request.body;
    const APPID =wxConfig.appid
    const SECRET = wxConfig.secret
    const url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + Code + '&grant_type=authorization_code';
    const { data } = await this.ctx.curl(url, {
      // 通过 contentType 声明以 JSON 格式发送
      contentType: 'json',
      dataType: 'json',
    });
    this.ctx.body = {
      status: 200,
      msg: '授权成功',
      openid: data.openid,
      session_key: data.session_key
    };
  }
  async wxCryptPhone() {
    const { ctx } = this;
    const { session_key, iv, encryptedData } = ctx.request.body;
    const pc = new WXBizDataCrypt(wxConfig.appid, session_key);
    // 获取到微信用户的手机号码
    const { phoneNumber } = pc.decryptData(encryptedData, iv);
    // 如果获取失败
    if (!phoneNumber) {
      this.ctx.body = {
        status: 500,
        message: '获取手机号码失败',
        mobile: '',
        params: {
          session_key,
          iv,
          encryptedData,
        },
      };
    } else {
      // 如果获取成功 直接加入到数据库 返回手机号 和 token给微信端
      this.ctx.body = {
        mobile: phoneNumber,
        status: 200,
        params: {
          session_key,
          iv,
          encryptedData,
        },
      };
    }
  }
}

module.exports = wxController;
