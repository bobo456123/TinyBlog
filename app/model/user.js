/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 21:20:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 22:14:15
 */
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const User = app.model.define("user", {
        //自动生成id
        uid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },

        username: { type: STRING(32), unique: true },
        password: STRING(64),
        email: { type: STRING(200) },
        url: STRING(200),
        screenName: STRING(32), 

        logged: INTEGER(10).UNSIGNED,
        group: STRING(16),
        authCode: STRING(64)
    }, {
        // 不要忘记启用时间戳！
        timestamps: true,
        // 想要 createdAt 但是希望名称叫做 created
        createdAt: "created",
        // // 不想要 updatedAt
        updatedAt: "activated"
    });
    return User;
}