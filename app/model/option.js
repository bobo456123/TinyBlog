module.exports = app => {
    const { STRING, INTEGER, TEXT, CHAR } = app.Sequelize;
    const Option = app.model.define("option", {
        //自动生成id
        name: { type: STRING(32), primaryKey: true },
        user: { type: INTEGER(10).UNSIGNED, primaryKey: true },
        value: { type: TEXT, allowNull: true }
    });
    return Option;
}