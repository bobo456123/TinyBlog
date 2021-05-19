'use strict';
const { slice, stubTrue } = require('lodash');
//helper.js也运用在nunjuck模板中的过滤器

var _ = require('lodash');

module.exports = {
    //获取用户 ip 地址
    getClientIP: function (req) {
        return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
            req.connection.remoteAddress || // 判断 connection 的远程 IP
            req.socket.remoteAddress || // 判断后端的 socket 的 IP
            req.connection.socket.remoteAddress;
    },
    //截取字符串，超出部分替换成制定字符串
    cutString(str, start, end, replacement = "...") {
        if (!str) {
            return "";
        }
        str = str.toString();

        str = str.slice(start, end);

        if (str.length <= end - start) {
            return str;
        }
        return str + replacement;
    },
    // 生成归档文章月份列表
    archiveMonth(startDate) {
        // const { app,config, ctx, service } = this;这些都有值
        let dateList = [];
        startDate = new Date(startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-01");
        while (startDate.getTime() <= Date.now()) {
            dateList.push({
                key: this.dateFormat(startDate, "yyyyMM"),
                value: this.dateFormat(startDate, "yyyy年MM月")
            });
            startDate.setMonth(startDate.getMonth() + 1);
        }
        return dateList;
    },
    //将字符串、时间戳转换为Date类型
    date(param) {
        if (!param) {
            return "error";
        }
        let time = null;
        try {
            if (typeof param === "number" && param < 1609459200000) {//2021-01-01前的时间戳默认加上000
                param *= 1000;
            }
            time = new Date(param);
        } catch (error) {
            return "error";
        }
        return time;
    },
    //格式化日期
    dateFormat(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份         
            "d+": date.getDate(), //日         
            "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时         
            "H+": date.getHours(), //小时         
            "m+": date.getMinutes(), //分         
            "s+": date.getSeconds(), //秒         
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度         
            "S": date.getMilliseconds() //毫秒         
        };
        var week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    },
    /**
     * 根据parent字段生成树形结构，{...,children:[...]}
     * @param {*} comment 
     * @param {*} coid 
     * @returns 
     */
    getListByParent(list, id, fieldName) {
        var self = this;
        return list
            .filter(item => {
                return item.parent === id;
            })
            .map(function (item) {
                item.children = self.getListByParent(list, item[fieldName], fieldName);
                return item;
            });
    }
};