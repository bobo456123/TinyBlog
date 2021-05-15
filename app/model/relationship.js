module.exports = app => {
    const { STRING, INTEGER, TEXT, CHAR } = app.Sequelize;
    const Relationship = app.model.define("relationship", {
        //自动生成id
        cid: {
            type: INTEGER(10).UNSIGNED,
            primaryKey: true,
            // references: {
            //     model: app.model.Content,
            //     key: 'cid'
            // }
        },
        mid: {
            type: INTEGER(10).UNSIGNED,
            primaryKey: true,
            // references: {
            //     model: app.model.Meta,
            //     key: 'mid'
            // }
        }
    });
    return Relationship;
}