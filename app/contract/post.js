/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-15 19:58:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 16:37:39
 */
// /app/contract/post.js
module.exports = {
    addPost: {
        title: {
            type: 'string',
            required: true,
            description: '标题',
            example: '标题',
        },
        text: {
            type: 'string',
            required: true,
            description: '标题',
            example: '标题',
        },
    },
    deletePosts: {
        ids: {
            type: 'array',
            itemType: 'number',
            required: true,
            description: '帖子ids',
            example: [10, 13],
            message:"参数错误"
        },
    },
}
