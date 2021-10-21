/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-15 19:58:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 23:20:58
 */
// /app/contract/user.js
module.exports = {
    addUser: {
        username: {
            type: 'string',
            required: true,
            description: '用户名',
            example: 'user01',
            format: /^\w{6,12}$/,
        },
        email: {
            type: 'string',
            required: true,
            description: '电子邮箱地址',
            example: 'user01@tinyblog.com',
            format: /.+\@\w+\.\w+/,
        },
        screenName: {
            type: 'string',
            required: false,
            description: '用户昵称',
            example: '管理员不在家'
        },
        password: {
            type: 'string',
            required: true,
            description: '密码',
            example: '123123',
        },
        confirm: {
            type: 'string',
            required: false,
            description: '用户密码确认',
            example: '123123'
        },
        url: {
            type: 'string',
            required: false,
            description: '个人主页地址',
            example: 'http://www.tinyblog.6feel.com'
        },
        group: {
            type: 'string',
            required: false,
            description: '用户组',
            example: 'administrator'
        },
    },
    loginRequest: {
        username: {
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
