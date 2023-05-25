# TinyBlog

TinyBLog个人博客，极简、轻量、快速是博客的终极定位，技术构成主要涉及Node、egg、mysql。

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop

//  部署到docker
$ docker build -t back_img .
$ docker run -d -p 7001:7001 --name back_container back_img
//正常访问  localhost:7001
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### documents
swagger 接口配置
https://www.npmjs.com/package/egg-swagger-doc-feat/v/2.2.11

@Router
格式：@Router {Mothod} {Path}
```
a.Mothod,请求的方法(post/get/put/delete等)，不区分大小写。
b.Path,请求的路由。
```

@Request
格式：@Request {Position} {Type} {Name} {Description}
```
a.position.参数的位置,该值可以是body/path/query/header/formData.
b.Type.参数类型，body之外位置目前只支持基础类型,integer/string/boolean/number，及基础类型构成的数组，body中则支持contract中定义的类型。如果position是formData还将支持 file 类型
c.Name.参数名称.如果参数名称以*开头则表示必要，否则非必要。
d.Description.参数描述
c.如果你想给query或者path的参数设置example，你可以在Description前添加以'eg:'开头的参数，实例如下
@Request query string contactId eg:200032234567 顾问ID
```

@Response
格式：@Response {HttpStatus} {Type} {Description}
```
a.HttpStatus.Http状态码。
b.Type.同Request中body位置的参数类型。
d.Description.响应描述。
```
