/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-15 19:58:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-15 23:48:25
 */
// /app/contract/user.js
module.exports = {
    loginRequest: {
        name: {
            type: 'string',
            required: true,
            description: '用户名',
            example: 'admin'
        },
        password: {
            type: 'string',
            required: true,
            description: '密码',
            example: '123',
        }
    },
    createUserRequest: {
        mobile: {
            type: 'string',
            required: true,
            description: '手机号',
            example: '18801731528',
            format: /^1[34578]\d{9}$/,
        },
        password: {
            type: 'string',
            required: true,
            description: '密码',
            example: '111111',
        },
        realName: {
            type: 'string',
            required: true,
            description: '姓名',
            example: 'Tom'
        },
    },
}
