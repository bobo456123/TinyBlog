/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 22:19:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-25 23:24:17
 */
module.exports = app => {
    const { STRING, INTEGER, TEXT, CHAR } = app.Sequelize;
    const Content = app.model.define("content", {
        //自动生成id
        cid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },

        title: STRING(200),
        slug: STRING(200),
        text: TEXT,

        order: INTEGER(10).UNSIGNED,
        authorId: INTEGER(10).UNSIGNED,
        template: STRING(32),
        type: { type: STRING(16), defaultValue: "post" },
        status: { type: STRING(16), defaultValue: "publish" },

        password: STRING(32),
        commentsNum: { type: INTEGER(10).UNSIGNED, defaultValue: 0 },
        allowComment: { type: CHAR(1), defaultValue: "1" },
        allowPing: { type: CHAR(1), defaultValue: "1" },
        allowFeed: { type: CHAR(1), defaultValue: "1" },

        parent: { type: INTEGER(10).UNSIGNED, defaultValue: 0 },
    }, {
        // 不要忘记启用时间戳！
        timestamps: true,
        // 想要 createdAt 但是希望名称叫做 created
        createdAt: "created",
        // 想要 updatedAt 但是希望名称叫做 modified
        updatedAt: "modified"
    });

    //所属哪个班级，指向班级主键  这是多对一
    Content.associate = function () {
        app.model.Content.belongsTo(app.model.User, {
            foreignKey: "authorId",
            targetKey: "uid",
            as: "user"
        });

        app.model.User.hasMany(app.model.Content, {
            foreignKey: "authorId",
            targetKey: "uid",
            as: "content"
        });

        app.model.Content.belongsToMany(app.model.Meta, { as: 'meta', through: app.model.Relationship, foreignKey: 'cid' });
        // app.model.Content.belongsToMany(app.model.Meta, {
        //     as: 'meta',
        //     through: app.model.Relationship,
        //     foreignKey: 'cid',
        //     otherKey: 'mid'
        // });
    }

    return Content;
}