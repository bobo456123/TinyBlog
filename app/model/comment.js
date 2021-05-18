module.exports = app => {
    const { STRING, INTEGER, TEXT, CHAR } = app.Sequelize;
    const Comment = app.model.define("comment", {
        //自动生成id
        coid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },
        cid: INTEGER(10).UNSIGNED,
        author: STRING(200),
        authorId: { type: INTEGER(10).UNSIGNED, defaultValue: 0 },

        ownerId: { type: INTEGER(10).UNSIGNED, defaultValue: 0 },
        mail: STRING(200),
        url: STRING(200),
        ip: STRING(64),
        agent: STRING(200),

        text: TEXT,
        type: { type: STRING(16), defaultValue: "comment" },
        status: { type: STRING(16), defaultValue: "approved" },
        parent: { type: INTEGER(10).UNSIGNED, defaultValue: 0 }

    }, {
        // 不要忘记启用时间戳！
        timestamps: true,
        // 想要 createdAt 但是希望名称叫做 created
        createdAt: "created",
        // // 不想要 updatedAt
        updatedAt: false
    });
    return Comment;
}