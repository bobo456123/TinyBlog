module.exports = app => {
    const { STRING, INTEGER, TEXT, CHAR } = app.Sequelize;
    const Comment = app.model.define("comment", {
        //自动生成id
        coid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },
        cid: INTEGER(10).UNSIGNED,
        created: INTEGER(10).UNSIGNED,
        author: STRING(200),
        authorId: INTEGER(10).UNSIGNED,

        ownerId: INTEGER(10).UNSIGNED,
        mail: STRING(200),
        url: STRING(200),
        ip: STRING(64),
        agent: STRING(200),

        text: TEXT,
        type: STRING(16),
        status: STRING(16),
        parent: INTEGER(10).UNSIGNED

    });
    return Comment;
}