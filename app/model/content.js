module.exports = app => {
    const { STRING, INTEGER, TEXT, CHAR } = app.Sequelize;
    const Content = app.model.define("content", {
        //自动生成id
        cid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },

        title: STRING(200),
        slug: STRING(200),
        created: INTEGER(10).UNSIGNED,
        modified: INTEGER(10).UNSIGNED,
        text: TEXT,

        order: INTEGER(10).UNSIGNED,
        authorId: INTEGER(10).UNSIGNED,
        template: STRING(32),
        type: STRING(16),
        status: STRING(16),

        password: STRING(32),
        commentsNum: INTEGER(10).UNSIGNED,
        allowComment: CHAR(1),
        allowPing: CHAR(1),
        allowFeed: CHAR(1),

        parent: INTEGER(10).UNSIGNED
    });

    //所属哪个班级，指向班级主键  这是多对一
    Content.associate = function () {
        app.model.Content.belongsTo(app.model.User, {
            foreignKey: "authorId",
            targetKey: "uid",
            as: "user"
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