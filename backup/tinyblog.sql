/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tinyblog

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2021-10-23 23:30:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tiny_clazzs`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_clazzs`;
CREATE TABLE `tiny_clazzs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tiny_clazzs
-- ----------------------------

-- ----------------------------
-- Table structure for `tiny_comments`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_comments`;
CREATE TABLE `tiny_comments` (
  `coid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cid` int(10) unsigned DEFAULT NULL,
  `author` varchar(200) DEFAULT NULL,
  `authorId` int(10) unsigned DEFAULT NULL,
  `ownerId` int(10) unsigned DEFAULT NULL,
  `mail` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `ip` varchar(64) DEFAULT NULL,
  `agent` varchar(200) DEFAULT NULL,
  `text` text,
  `type` varchar(16) DEFAULT NULL,
  `status` varchar(16) DEFAULT NULL,
  `parent` int(10) unsigned DEFAULT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`coid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tiny_comments
-- ----------------------------
INSERT INTO `tiny_comments` VALUES ('3', '15', '1111', '0', '0', '491153409@qq.com', '', null, null, '111111', 'comment', 'approved', '0', '2021-05-18 23:30:59');
INSERT INTO `tiny_comments` VALUES ('4', '15', '2222', '0', '0', '491153409@qq.com', '', null, null, '22222222', 'comment', 'approved', '0', '2021-05-18 23:36:37');
INSERT INTO `tiny_comments` VALUES ('5', '15', '3333333333333333', '0', '0', '491153409@qq.com', '', null, null, '333333333333333333333333333333333', 'comment', 'approved', '0', '2021-05-19 20:01:31');
INSERT INTO `tiny_comments` VALUES ('6', '15', '44444', '0', '0', '491153409@qq.com', '', null, null, '44444', 'comment', 'approved', '0', '2021-05-19 20:19:47');
INSERT INTO `tiny_comments` VALUES ('7', '15', '123', '0', '0', '491153409@qq.com', '', null, null, '43242424242', 'comment', 'approved', '6', '2021-05-19 20:19:58');
INSERT INTO `tiny_comments` VALUES ('8', '15', '???', '0', '0', '491153409@qq.com', '', null, null, '333', 'comment', 'approved', '7', '2021-07-19 21:57:42');

-- ----------------------------
-- Table structure for `tiny_contents`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_contents`;
CREATE TABLE `tiny_contents` (
  `cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `created` int(10) unsigned DEFAULT '0',
  `modified` int(10) unsigned DEFAULT '0',
  `text` longtext,
  `order` int(10) unsigned DEFAULT '0',
  `authorId` int(10) unsigned DEFAULT '0',
  `template` varchar(32) DEFAULT NULL,
  `type` varchar(16) DEFAULT 'post',
  `status` varchar(16) DEFAULT 'publish',
  `password` varchar(32) DEFAULT NULL,
  `commentsNum` int(10) unsigned DEFAULT '0',
  `allowComment` char(1) DEFAULT '0',
  `allowPing` char(1) DEFAULT '0',
  `allowFeed` char(1) DEFAULT '0',
  `parent` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`cid`),
  UNIQUE KEY `slug` (`slug`),
  KEY `created` (`created`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tiny_contents
-- ----------------------------
INSERT INTO `tiny_contents` VALUES ('1', '欢迎使用 Typecho', 'start', '1619923080', '1619935303', '<!--markdown-->如果您看到这篇文章,表示您的 blog 已经安装成功.\r\n\r\n\r\n  [1]: http://127.0.0.2/usr/uploads/2021/05/1506960899.jpg', '0', '1', null, 'post', 'publish', null, '6', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('2', '关于', 'start-page', '1619923096', '1619923096', '<!--markdown-->本页面由 Typecho 创建, 这只是个测试页面.', '0', '1', null, 'page', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('3', '这是第一篇帖子', '3', '1619923185', '1619923185', '<!--markdown-->hi，blog', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '0', '0');
INSERT INTO `tiny_contents` VALUES ('4', '第二篇文章', '4', '1619923474', '1619923474', '<!--markdown-->hi，你好', '0', '1', null, 'post', 'publish', null, '1', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('5', '联系我们', '5', '1619932200', '1619932236', '<!--markdown-->电话：\r\n邮箱：', '0', '1', null, 'page', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('6', '360截图20210414191512799.jpg', '360截图20210414191512799-jpg', '1619932449', '1619932449', 'a:5:{s:4:\"name\";s:30:\"360截图20210414191512799.jpg\";s:4:\"path\";s:35:\"/usr/uploads/2021/05/1506960899.jpg\";s:4:\"size\";i:48738;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', '1', '1', null, 'attachment', 'publish', null, '0', '1', '0', '1', '1');
INSERT INTO `tiny_contents` VALUES ('7', '第三篇文章', '7', '1620394080', '1620396722', '<!--markdown-->第三篇文章第三篇文章第三篇文章第三篇文章第三篇文![222.jpg][1]章第三篇文章\r\n\r\n\r\n  [1]: http://127.0.0.2/usr/uploads/2021/05/1022595625.jpg', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('8', '222.jpg', '222-jpg', '1620396718', '1620396718', 'a:5:{s:4:\"name\";s:7:\"222.jpg\";s:4:\"path\";s:35:\"/usr/uploads/2021/05/1022595625.jpg\";s:4:\"size\";i:39235;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', '1', '1', null, 'attachment', 'publish', null, '0', '1', '0', '1', '7');
INSERT INTO `tiny_contents` VALUES ('9', '第四篇文章', '9', '1620396779', '1620396779', '<!--markdown-->第四篇文章第四篇文章第四篇文章第四篇文章', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('10', '第五篇文章', '10', '1620396786', '1620396786', '<!--markdown-->第五篇文章第五篇文章第五篇文章第五篇文章', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('11', '第六篇文章', '11', '1620396794', '1620396794', '<!--markdown-->第六篇文章第六篇文章第六篇文章第六篇文章', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('12', '第七篇文章', '12', '1620396802', '1620396802', '<!--markdown-->第七篇文章第七篇文章第七篇文章第七篇文章', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('13', '第八篇文章', '13', '1620396814', '1620396814', '<!--markdown-->第八篇文章第八篇文章第八篇文章第八篇文章', '0', '1', null, 'post', 'private', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('14', '第九篇文章', '14', '1620396822', '1620396822', '<!--markdown-->第九篇文章第九篇文章第九篇文章第九篇文章', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('15', '第十篇文章', '15', '1620396830', '1620396830', '<!--markdown-->第十篇文章第十篇文章第十篇文章第十篇文章第十篇文章', '0', '1', null, 'post', 'publish', null, '0', '1', '1', '1', '0');
INSERT INTO `tiny_contents` VALUES ('16', '第十一篇文章', '16', '1620396780', '1620397126', '<!--markdown-->第十一篇文章第十一篇文章第十一篇文章第十一篇文章', '0', '1', null, 'post', 'private', null, '0', '1', '1', '1', '0');

-- ----------------------------
-- Table structure for `tiny_fields`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_fields`;
CREATE TABLE `tiny_fields` (
  `cid` int(10) unsigned NOT NULL,
  `name` varchar(200) NOT NULL,
  `type` varchar(8) DEFAULT 'str',
  `str_value` text,
  `int_value` int(10) DEFAULT '0',
  `float_value` float DEFAULT '0',
  PRIMARY KEY (`cid`,`name`),
  KEY `int_value` (`int_value`),
  KEY `float_value` (`float_value`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tiny_fields
-- ----------------------------
INSERT INTO `tiny_fields` VALUES ('5', 'fie', 'str', 'nihao', '0', '0');

-- ----------------------------
-- Table structure for `tiny_metas`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_metas`;
CREATE TABLE `tiny_metas` (
  `mid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `type` varchar(32) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `count` int(10) unsigned DEFAULT '0',
  `order` int(10) unsigned DEFAULT '0',
  `parent` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`mid`),
  KEY `slug` (`slug`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tiny_metas
-- ----------------------------
INSERT INTO `tiny_metas` VALUES ('1', '默认分类', 'default', 'category', '只是一个默认分类', '11', '1', '0');
INSERT INTO `tiny_metas` VALUES ('2', '标签1', '标签1', 'tag', null, '1', '0', '0');
INSERT INTO `tiny_metas` VALUES ('3', '默认子分类', 'fenlei', 'category', '111', '0', '1', '1');
INSERT INTO `tiny_metas` VALUES ('4', '分类1', '分1', 'category', '分', '0', '2', '0');
INSERT INTO `tiny_metas` VALUES ('5', '分类2', '分2', 'category', '分22', '0', '3', '0');
INSERT INTO `tiny_metas` VALUES ('6', '分类11', '分11', 'category', '-分11', '0', '1', '4');
INSERT INTO `tiny_metas` VALUES ('7', '分类12', '分12', 'category', '-分12', '0', '2', '4');
INSERT INTO `tiny_metas` VALUES ('8', '标签2', '标签2', 'tag', null, '0', '0', '0');
INSERT INTO `tiny_metas` VALUES ('9', '标签3', '标签3', 'tag', null, '0', '0', '0');
INSERT INTO `tiny_metas` VALUES ('10', '11', '11', 'tag', null, '0', '0', '0');

-- ----------------------------
-- Table structure for `tiny_options`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_options`;
CREATE TABLE `tiny_options` (
  `name` varchar(32) NOT NULL,
  `user` int(10) unsigned NOT NULL DEFAULT '0',
  `value` text,
  PRIMARY KEY (`name`,`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tiny_options
-- ----------------------------
INSERT INTO `tiny_options` VALUES ('theme', '0', 'default');
INSERT INTO `tiny_options` VALUES ('theme:default', '0', 'a:2:{s:7:\"logoUrl\";N;s:12:\"sidebarBlock\";a:5:{i:0;s:15:\"ShowRecentPosts\";i:1;s:18:\"ShowRecentComments\";i:2;s:12:\"ShowCategory\";i:3;s:11:\"ShowArchive\";i:4;s:9:\"ShowOther\";}}');
INSERT INTO `tiny_options` VALUES ('timezone', '0', '28800');
INSERT INTO `tiny_options` VALUES ('lang', '0', 'zh_CN');
INSERT INTO `tiny_options` VALUES ('charset', '0', 'UTF-8');
INSERT INTO `tiny_options` VALUES ('contentType', '0', 'text/html');
INSERT INTO `tiny_options` VALUES ('gzip', '0', '0');
INSERT INTO `tiny_options` VALUES ('generator', '0', 'TinyBlog V1.0');
INSERT INTO `tiny_options` VALUES ('title', '0', 'Hello World');
INSERT INTO `tiny_options` VALUES ('description', '0', 'Just So So ...');
INSERT INTO `tiny_options` VALUES ('keywords', '0', 'tinyblog,nodejs,blog');
INSERT INTO `tiny_options` VALUES ('rewrite', '0', '0');
INSERT INTO `tiny_options` VALUES ('frontPage', '0', 'recent');
INSERT INTO `tiny_options` VALUES ('frontArchive', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsRequireMail', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsWhitelist', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsRequireURL', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsRequireModeration', '0', '0');
INSERT INTO `tiny_options` VALUES ('plugins', '0', 'a:2:{s:9:\"activated\";a:0:{}s:7:\"handles\";a:0:{}}');
INSERT INTO `tiny_options` VALUES ('commentDateFormat', '0', 'F jS, Y \\a\\t h:i a');
INSERT INTO `tiny_options` VALUES ('siteUrl', '0', 'http://127.0.0.1:7001');
INSERT INTO `tiny_options` VALUES ('defaultCategory', '0', '1');
INSERT INTO `tiny_options` VALUES ('allowRegister', '0', '0');
INSERT INTO `tiny_options` VALUES ('defaultAllowComment', '0', '1');
INSERT INTO `tiny_options` VALUES ('defaultAllowPing', '0', '1');
INSERT INTO `tiny_options` VALUES ('defaultAllowFeed', '0', '1');
INSERT INTO `tiny_options` VALUES ('pageSize', '0', '5');
INSERT INTO `tiny_options` VALUES ('postsListSize', '0', '10');
INSERT INTO `tiny_options` VALUES ('commentsListSize', '0', '10');
INSERT INTO `tiny_options` VALUES ('commentsHTMLTagAllowed', '0', null);
INSERT INTO `tiny_options` VALUES ('postDateFormat', '0', 'Y-m-d');
INSERT INTO `tiny_options` VALUES ('feedFullText', '0', '1');
INSERT INTO `tiny_options` VALUES ('editorSize', '0', '350');
INSERT INTO `tiny_options` VALUES ('autoSave', '0', '0');
INSERT INTO `tiny_options` VALUES ('markdown', '0', '1');
INSERT INTO `tiny_options` VALUES ('xmlrpcMarkdown', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsMaxNestingLevels', '0', '5');
INSERT INTO `tiny_options` VALUES ('commentsPostTimeout', '0', '2592000');
INSERT INTO `tiny_options` VALUES ('commentsUrlNofollow', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsShowUrl', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsMarkdown', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsPageBreak', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsThreaded', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsPageSize', '0', '20');
INSERT INTO `tiny_options` VALUES ('commentsPageDisplay', '0', 'last');
INSERT INTO `tiny_options` VALUES ('commentsOrder', '0', 'ASC');
INSERT INTO `tiny_options` VALUES ('commentsCheckReferer', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsAutoClose', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsPostIntervalEnable', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsPostInterval', '0', '60');
INSERT INTO `tiny_options` VALUES ('commentsShowCommentOnly', '0', '0');
INSERT INTO `tiny_options` VALUES ('commentsAvatar', '0', '1');
INSERT INTO `tiny_options` VALUES ('commentsAvatarRating', '0', 'G');
INSERT INTO `tiny_options` VALUES ('commentsAntiSpam', '0', '1');
INSERT INTO `tiny_options` VALUES ('routingTable', '0', 'a:26:{i:0;a:25:{s:5:\"index\";a:6:{s:3:\"url\";s:1:\"/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:8:\"|^[/]?$|\";s:6:\"format\";s:1:\"/\";s:6:\"params\";a:0:{}}s:7:\"archive\";a:6:{s:3:\"url\";s:6:\"/blog/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:13:\"|^/blog[/]?$|\";s:6:\"format\";s:6:\"/blog/\";s:6:\"params\";a:0:{}}s:2:\"do\";a:6:{s:3:\"url\";s:22:\"/action/[action:alpha]\";s:6:\"widget\";s:9:\"Widget_Do\";s:6:\"action\";s:6:\"action\";s:4:\"regx\";s:32:\"|^/action/([_0-9a-zA-Z-]+)[/]?$|\";s:6:\"format\";s:10:\"/action/%s\";s:6:\"params\";a:1:{i:0;s:6:\"action\";}}s:4:\"post\";a:6:{s:3:\"url\";s:24:\"/archives/[cid:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:26:\"|^/archives/([0-9]+)[/]?$|\";s:6:\"format\";s:13:\"/archives/%s/\";s:6:\"params\";a:1:{i:0;s:3:\"cid\";}}s:10:\"attachment\";a:6:{s:3:\"url\";s:26:\"/attachment/[cid:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:28:\"|^/attachment/([0-9]+)[/]?$|\";s:6:\"format\";s:15:\"/attachment/%s/\";s:6:\"params\";a:1:{i:0;s:3:\"cid\";}}s:8:\"category\";a:6:{s:3:\"url\";s:17:\"/category/[slug]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:25:\"|^/category/([^/]+)[/]?$|\";s:6:\"format\";s:13:\"/category/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"slug\";}}s:3:\"tag\";a:6:{s:3:\"url\";s:12:\"/tag/[slug]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:20:\"|^/tag/([^/]+)[/]?$|\";s:6:\"format\";s:8:\"/tag/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"slug\";}}s:6:\"author\";a:6:{s:3:\"url\";s:22:\"/author/[uid:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:24:\"|^/author/([0-9]+)[/]?$|\";s:6:\"format\";s:11:\"/author/%s/\";s:6:\"params\";a:1:{i:0;s:3:\"uid\";}}s:6:\"search\";a:6:{s:3:\"url\";s:19:\"/search/[keywords]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:23:\"|^/search/([^/]+)[/]?$|\";s:6:\"format\";s:11:\"/search/%s/\";s:6:\"params\";a:1:{i:0;s:8:\"keywords\";}}s:10:\"index_page\";a:6:{s:3:\"url\";s:21:\"/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:22:\"|^/page/([0-9]+)[/]?$|\";s:6:\"format\";s:9:\"/page/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"page\";}}s:12:\"archive_page\";a:6:{s:3:\"url\";s:26:\"/blog/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:27:\"|^/blog/page/([0-9]+)[/]?$|\";s:6:\"format\";s:14:\"/blog/page/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"page\";}}s:13:\"category_page\";a:6:{s:3:\"url\";s:32:\"/category/[slug]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:34:\"|^/category/([^/]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:16:\"/category/%s/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"slug\";i:1;s:4:\"page\";}}s:8:\"tag_page\";a:6:{s:3:\"url\";s:27:\"/tag/[slug]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:29:\"|^/tag/([^/]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:11:\"/tag/%s/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"slug\";i:1;s:4:\"page\";}}s:11:\"author_page\";a:6:{s:3:\"url\";s:37:\"/author/[uid:digital]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:33:\"|^/author/([0-9]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:14:\"/author/%s/%s/\";s:6:\"params\";a:2:{i:0;s:3:\"uid\";i:1;s:4:\"page\";}}s:11:\"search_page\";a:6:{s:3:\"url\";s:34:\"/search/[keywords]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:32:\"|^/search/([^/]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:14:\"/search/%s/%s/\";s:6:\"params\";a:2:{i:0;s:8:\"keywords\";i:1;s:4:\"page\";}}s:12:\"archive_year\";a:6:{s:3:\"url\";s:18:\"/[year:digital:4]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:19:\"|^/([0-9]{4})[/]?$|\";s:6:\"format\";s:4:\"/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"year\";}}s:13:\"archive_month\";a:6:{s:3:\"url\";s:36:\"/[year:digital:4]/[month:digital:2]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:30:\"|^/([0-9]{4})/([0-9]{2})[/]?$|\";s:6:\"format\";s:7:\"/%s/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"year\";i:1;s:5:\"month\";}}s:11:\"archive_day\";a:6:{s:3:\"url\";s:52:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:41:\"|^/([0-9]{4})/([0-9]{2})/([0-9]{2})[/]?$|\";s:6:\"format\";s:10:\"/%s/%s/%s/\";s:6:\"params\";a:3:{i:0;s:4:\"year\";i:1;s:5:\"month\";i:2;s:3:\"day\";}}s:17:\"archive_year_page\";a:6:{s:3:\"url\";s:38:\"/[year:digital:4]/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:33:\"|^/([0-9]{4})/page/([0-9]+)[/]?$|\";s:6:\"format\";s:12:\"/%s/page/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"year\";i:1;s:4:\"page\";}}s:18:\"archive_month_page\";a:6:{s:3:\"url\";s:56:\"/[year:digital:4]/[month:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:44:\"|^/([0-9]{4})/([0-9]{2})/page/([0-9]+)[/]?$|\";s:6:\"format\";s:15:\"/%s/%s/page/%s/\";s:6:\"params\";a:3:{i:0;s:4:\"year\";i:1;s:5:\"month\";i:2;s:4:\"page\";}}s:16:\"archive_day_page\";a:6:{s:3:\"url\";s:72:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:55:\"|^/([0-9]{4})/([0-9]{2})/([0-9]{2})/page/([0-9]+)[/]?$|\";s:6:\"format\";s:18:\"/%s/%s/%s/page/%s/\";s:6:\"params\";a:4:{i:0;s:4:\"year\";i:1;s:5:\"month\";i:2;s:3:\"day\";i:3;s:4:\"page\";}}s:12:\"comment_page\";a:6:{s:3:\"url\";s:53:\"[permalink:string]/comment-page-[commentPage:digital]\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:36:\"|^(.+)/comment\\-page\\-([0-9]+)[/]?$|\";s:6:\"format\";s:18:\"%s/comment-page-%s\";s:6:\"params\";a:2:{i:0;s:9:\"permalink\";i:1;s:11:\"commentPage\";}}s:4:\"feed\";a:6:{s:3:\"url\";s:20:\"/feed[feed:string:0]\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:4:\"feed\";s:4:\"regx\";s:17:\"|^/feed(.*)[/]?$|\";s:6:\"format\";s:7:\"/feed%s\";s:6:\"params\";a:1:{i:0;s:4:\"feed\";}}s:8:\"feedback\";a:6:{s:3:\"url\";s:31:\"[permalink:string]/[type:alpha]\";s:6:\"widget\";s:15:\"Widget_Feedback\";s:6:\"action\";s:6:\"action\";s:4:\"regx\";s:29:\"|^(.+)/([_0-9a-zA-Z-]+)[/]?$|\";s:6:\"format\";s:5:\"%s/%s\";s:6:\"params\";a:2:{i:0;s:9:\"permalink\";i:1;s:4:\"type\";}}s:4:\"page\";a:6:{s:3:\"url\";s:12:\"/[slug].html\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:22:\"|^/([^/]+)\\.html[/]?$|\";s:6:\"format\";s:8:\"/%s.html\";s:6:\"params\";a:1:{i:0;s:4:\"slug\";}}}s:5:\"index\";a:3:{s:3:\"url\";s:1:\"/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:7:\"archive\";a:3:{s:3:\"url\";s:6:\"/blog/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:2:\"do\";a:3:{s:3:\"url\";s:22:\"/action/[action:alpha]\";s:6:\"widget\";s:9:\"Widget_Do\";s:6:\"action\";s:6:\"action\";}s:4:\"post\";a:3:{s:3:\"url\";s:24:\"/archives/[cid:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:10:\"attachment\";a:3:{s:3:\"url\";s:26:\"/attachment/[cid:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:8:\"category\";a:3:{s:3:\"url\";s:17:\"/category/[slug]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:3:\"tag\";a:3:{s:3:\"url\";s:12:\"/tag/[slug]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:6:\"author\";a:3:{s:3:\"url\";s:22:\"/author/[uid:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:6:\"search\";a:3:{s:3:\"url\";s:19:\"/search/[keywords]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:10:\"index_page\";a:3:{s:3:\"url\";s:21:\"/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:12:\"archive_page\";a:3:{s:3:\"url\";s:26:\"/blog/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:13:\"category_page\";a:3:{s:3:\"url\";s:32:\"/category/[slug]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:8:\"tag_page\";a:3:{s:3:\"url\";s:27:\"/tag/[slug]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:11:\"author_page\";a:3:{s:3:\"url\";s:37:\"/author/[uid:digital]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:11:\"search_page\";a:3:{s:3:\"url\";s:34:\"/search/[keywords]/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:12:\"archive_year\";a:3:{s:3:\"url\";s:18:\"/[year:digital:4]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:13:\"archive_month\";a:3:{s:3:\"url\";s:36:\"/[year:digital:4]/[month:digital:2]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:11:\"archive_day\";a:3:{s:3:\"url\";s:52:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:17:\"archive_year_page\";a:3:{s:3:\"url\";s:38:\"/[year:digital:4]/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:18:\"archive_month_page\";a:3:{s:3:\"url\";s:56:\"/[year:digital:4]/[month:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:16:\"archive_day_page\";a:3:{s:3:\"url\";s:72:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:12:\"comment_page\";a:3:{s:3:\"url\";s:53:\"[permalink:string]/comment-page-[commentPage:digital]\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}s:4:\"feed\";a:3:{s:3:\"url\";s:20:\"/feed[feed:string:0]\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:4:\"feed\";}s:8:\"feedback\";a:3:{s:3:\"url\";s:31:\"[permalink:string]/[type:alpha]\";s:6:\"widget\";s:15:\"Widget_Feedback\";s:6:\"action\";s:6:\"action\";}s:4:\"page\";a:3:{s:3:\"url\";s:12:\"/[slug].html\";s:6:\"widget\";s:14:\"Widget_Archive\";s:6:\"action\";s:6:\"render\";}}');
INSERT INTO `tiny_options` VALUES ('actionTable', '0', 'a:0:{}');
INSERT INTO `tiny_options` VALUES ('panelTable', '0', 'a:0:{}');
INSERT INTO `tiny_options` VALUES ('attachmentTypes', '0', '@image@');
INSERT INTO `tiny_options` VALUES ('secret', '0', 'Hc39WLPwcXDhV1gpjC)hN@&1J$vQfY@T');
INSERT INTO `tiny_options` VALUES ('installed', '0', '1');
INSERT INTO `tiny_options` VALUES ('allowXmlRpc', '0', '2');

-- ----------------------------
-- Table structure for `tiny_relationships`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_relationships`;
CREATE TABLE `tiny_relationships` (
  `cid` int(10) unsigned NOT NULL,
  `mid` int(10) unsigned NOT NULL,
  PRIMARY KEY (`cid`,`mid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tiny_relationships
-- ----------------------------
INSERT INTO `tiny_relationships` VALUES ('1', '1');
INSERT INTO `tiny_relationships` VALUES ('3', '6');
INSERT INTO `tiny_relationships` VALUES ('4', '2');
INSERT INTO `tiny_relationships` VALUES ('4', '7');
INSERT INTO `tiny_relationships` VALUES ('7', '3');
INSERT INTO `tiny_relationships` VALUES ('9', '3');
INSERT INTO `tiny_relationships` VALUES ('10', '1');
INSERT INTO `tiny_relationships` VALUES ('11', '1');
INSERT INTO `tiny_relationships` VALUES ('12', '1');
INSERT INTO `tiny_relationships` VALUES ('13', '1');
INSERT INTO `tiny_relationships` VALUES ('14', '4');
INSERT INTO `tiny_relationships` VALUES ('15', '1');
INSERT INTO `tiny_relationships` VALUES ('16', '1');
INSERT INTO `tiny_relationships` VALUES ('16', '10');

-- ----------------------------
-- Table structure for `tiny_students`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_students`;
CREATE TABLE `tiny_students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `achievement` double DEFAULT NULL,
  `clazz_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clazz_id` (`clazz_id`),
  CONSTRAINT `tiny_students_ibfk_1` FOREIGN KEY (`clazz_id`) REFERENCES `tiny_clazzs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tiny_students
-- ----------------------------

-- ----------------------------
-- Table structure for `tiny_users`
-- ----------------------------
DROP TABLE IF EXISTS `tiny_users`;
CREATE TABLE `tiny_users` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `screenName` varchar(32) DEFAULT NULL,
  `logged` int(10) unsigned DEFAULT NULL,
  `group` varchar(16) DEFAULT NULL,
  `authCode` varchar(64) DEFAULT NULL,
  `created` datetime NOT NULL,
  `activated` datetime NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tiny_users
-- ----------------------------
INSERT INTO `tiny_users` VALUES ('4', 'user02', '$2a$10$fXssyeVy5sf3/jKDTHn9xOWBMwGCYoWAfWMhzF/DeLRF02W4qGymG', 'user02@tinyblog.com', 'http://www.tinyblog.6feel.com', '管理员不在家', null, 'administrator', null, '2021-10-23 20:45:20', '2021-10-23 20:45:20');
INSERT INTO `tiny_users` VALUES ('6', 'user03', '$2a$10$kzzeZlHzCt6e9ctfY3ncWuln6ZMTPst64NB8tGeqL2/KBwbopu3/m', 'user02@tinyblog.com', 'http://www.tinyblog.6feel.com', '管理员不在家', null, 'administrator', null, '2021-10-23 20:45:46', '2021-10-23 20:45:46');
INSERT INTO `tiny_users` VALUES ('9', 'user01', '$2a$10$SJD.9oTnJwOh9y4WBiG0oOUb/04lsqxM.hDLADQLpQnEHk07UgaBW', 'user02@tinyblog.com', 'http://www.tinyblog.6feel.com', '管理员不在家', null, 'administrator', null, '2021-10-23 23:22:37', '2021-10-23 23:22:37');
INSERT INTO `tiny_users` VALUES ('10', 'admin', '$2a$10$OthRWgx5yXNsNdxs4sowFO474a.VnlNJqz4Sn80uFjwCa.2saOqZS', 'admin@tinyblog.com', 'http://www.tinyblog.6feel.com', '管理员不在家', null, 'administrator', null, '2021-10-23 23:24:44', '2021-10-23 23:24:44');
