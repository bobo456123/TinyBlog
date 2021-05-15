/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1619936548504_2513';

  // add your middleware config here
  config.middleware = ["init"];

  // config.init = {//配置init中间件，对应中间件中的options参数
  //   site: "我一点都不好"
  // };

  config.view = {
    defaultViewEngine: 'nunjucks'
  };

  config.cors = {
    origin: '*',
    allowMethods: `GET,HEAD,PUT,POST,DELETE,PATCH`
  };

  config.jwt = {
    secret: 'tinyblog20210502'
  };

  config.security = {
    csrf: {
      enable: false
    },
  };

  config.sequelize = {
    dialet: 'mysql',
    database: "tinyblog",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123123",
    timezone: "+08:00",
    define: {                   // model的全局配置
      schema: "tiny",           // 前缀
      schemaDelimiter: '_',    // 连字符
      timestamps: false,        // 添加create,update,delete时间戳
      // paranoid: true,      // 添加软删除
      // freezeTableName: true, // 防止修改表名为复数
      // underscored: false // 防止驼峰式字段被默认转为下划线
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
