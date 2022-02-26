/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-16 00:21:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 00:24:06
 */
let errCode = new Map();
errCode.set("DATA_NOT_EXIST", { Code: 1, Msg: "数据不存在" });
errCode.set("PARAM_ERROR", { Code: 2, Msg: "参数错误" });

module.exports = errCode;