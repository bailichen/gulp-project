###安装依赖
#####npm install

###技术栈：rem.js+gulp+webpack+json+less
```
启动服务器
$ node node_modules/gulp/bin/gulp.js defaultwo
```

#webpack的使用
--------------------------------------------------------------------------------------------------------------
###webpack的优点：
    1.丰富的插件，方便进行开发工作
    2.大量的加载器，包括加载各种静态资源
    3.代码分割，提供按需加载的能力
    4.发布工具
###webpack的优势：
    1.webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
    2.能被模块化的不仅仅是 JS 了。
    3.开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。
    4.扩展性强，插件机制完善，特别是支持 React 热插拔（见 react-hot-loader ）的功能让人眼前一亮。
#####安装webpack：	$ npm install webpack -g
#####$ npm init  # 会自动生成一个package.json文件
#####$ npm install webpack --save-dev #将webpack增加到package.json文件中
plugins 是插件项，这里我们使用了一个 CommonsChunkPlugin的插件，它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用。
    *entry 是页面入口文件配置，output 是对应输出项配置 （即入口文件最终要生成什么名字的文件、存放到哪里）
    *module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理。 所有加载器需要使用npm来加载
    *最后是 resolve 配置，配置查找模块的路径和扩展名和别名（方便书写）
####SVG
    *SVG可缩放矢量图形（Scalable Vector Graphics，SVG）是基于可扩展标记语言（XML），用于描述二维矢量图形的一种图形格式。
    *可以解决png,jpg,jpeg等格式的图片在不同分辨率的屏幕下的出现模糊的bug(SVG兼容到ie9及以上版本（亲测）)
```

```
