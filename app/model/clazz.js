module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Clazz = app.model.define("clazz", {
        //自动生成id
        name: STRING
    });
    return Clazz;
}