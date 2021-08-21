/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-05-02 14:24:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 14:16:31
 */
'use strict';

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
  },
  routerPlus:{
    enable: true,
    package: 'egg-router-plus',
  }
};
