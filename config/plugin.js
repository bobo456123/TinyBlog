/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 23:10:55
 */
'use strict';

//支持路径别名。package.json 中添加“_moduleAliases”
require('module-alias/register');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  sequelize: {
    enable: true,
    package: "egg-sequelize"
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt'
  }
};
