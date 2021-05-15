module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT, FLOAT } = app.Sequelize;
    const Field = app.model.define("field", {
        //自动生成id
        cid: { type: INTEGER(10).UNSIGNED, primaryKey: true },

        name: { type: STRING(200), primaryKey: true },
        type: STRING(8),
        str_value: TEXT,
        int_value: INTEGER(10),
        float_value: FLOAT
    });
    return Field;
}