/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 22:11:38
 */
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
  config.middleware = ["init", "page"];

  // config.init = {//配置init中间件，对应中间件中的options参数
  //   site: "我一点都不好",
  //   enable: true, // 是否开启该中间件，不写默认开启
  //   match: ['/','/month'], // 只匹配指定路由，反之如果只忽略指定路由，可以用ignore
  //   ignore: ['/'] // 不要与match一起使用，避免冲突
  // };

  config.view = {
    defaultViewEngine: 'nunjucks'
  };

  config.cors = {
    origin: '*',
    allowMethods: `GET,HEAD,PUT,POST,DELETE,PATCH`
  };

  config.bcrypt = {
    saltRounds: 10 // default 10
  };

  config.jwt = {
    secret: 'tinyblog20210502',
    enable: true, // default is false
    match: /\/api/, // optional
    sign: {
      expiresIn: 60 * 60 * 2   //多少s后过期。actionToken.js中,jwt.sing(plyload,secret,{expiresIn:number})会被合并，调用时设置优先级更高;
    }
  }

  config.security = {
    csrf: {
      enable: false
    },
  };

  config.sequelize = {
    dialet: 'mysql',
    database: "tinyblog",
    host: "10.114.137.72",  //这里写上宿主机的ip或者远程mysql服务器ip
    port: 3310,
    username: "root",
    password: "123123",
    timezone: "+08:00",
    define: {                   // model的全局配置
      schema: "tiny",           // 前缀
      schemaDelimiter: '_',     // 连字符
      timestamps: false,        // 添加create,update,delete时间戳
      charset: 'utf8',          // 设置每张表中的每个字段的默认字符集
      collate: 'utf8_general_ci',   // 设置字符集排序
      // paranoid: true,        // 添加软删除
      // freezeTableName: true, // 防止修改表名为复数
      // underscored: false     // 防止驼峰式字段被默认转为下划线
    }
  };

  config.G = {
    pagesize: 5,
    version: "v1"
  };

  config.swaggerdoc = {
    dirScanner: './app/controller',
    basePath: "/" + config.G.version,
    apiInfo: {
      title: 'TinyBlog接口',
      description: 'TinyBlog接口 swagger-ui for egg',
      version: config.G.version,
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: true,
    // enableValidate: true,
    routerMap: true,
    enable: true,
    securityDefinitions: {
      apikey: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
