module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const User = app.model.define("user", {
        //自动生成id
        uid: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true },

        name: STRING(32),
        password: STRING(64),
        mail: STRING(200),
        url: STRING(200),
        screenName: STRING(32),

        created: INTEGER(10).UNSIGNED,
        activated: INTEGER(10).UNSIGNED,
        logged: INTEGER(10).UNSIGNED,
        group: STRING(16),
        authCode: STRING(64)
    });
    return User;
}