module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT, FLOAT } = app.Sequelize;
    //Bug：模型名称为meta时，mysql中表没有自动添加表示负数的s
    const Meta = app.model.define("metas", {
        //自动生成id
        mid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },
        name: STRING(200),
        slug: STRING(200),
        type: { type: STRING(32), allowNull: false },
        description: STRING(200),

        count: INTEGER(10),
        order: INTEGER(10),
        parent: INTEGER(10)
    });

    Meta.associate = function () {
        app.model.Meta.belongsToMany(app.model.Content, { as: 'content', through: app.model.Relationship, foreignKey: 'mid' });
    }

    return Meta;
}