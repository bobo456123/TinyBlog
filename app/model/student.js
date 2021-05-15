module.exports = app => {
    const { STRING, DOUBLE } = app.Sequelize;
    const Student = app.model.define("student", {
        //自动生成id
        name: STRING,
        achievement: DOUBLE
    });

    //所属哪个班级，指向班级主键  这是多对一
    Student.associate = function () {
        app.model.Student.belongsTo(app.model.Clazz, {
            foreignKey: "clazz_id",
            as: "clazz"
        });
    }

    return Student;
}