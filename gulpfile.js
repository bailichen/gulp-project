var yargs = require('yargs').argv;
var PORT = 3000;
var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');

var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var minifyHtml = require('gulp-minify-html');
var uglify=require('gulp-uglify');
var webpackTask = require('webpack-stream');
//对js作用，对js进行模块化编程
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin ;
var ProvidePlugin = webpack.ProvidePlugin;

var option = {base: 'src'};
var app = __dirname + '/app';
var jscontent=0
var csscontent=0

gulp.task("default",['release'],function(){

	if(yargs.l){
		gulp.start('loca_servese')
	}
	if(yargs.c){
		gulp.start('cleanTask')
	}
	gulp.run('watchAll')
})

gulp.task("release",function(){
	gulp.run('html')
	gulp.run('img')
	gulp.run('less')
	gulp.run('js')
	gulp.run('json')
})

gulp.task("html",function(){
	gulp.src("src/html/**/*.html",option)
		.pipe(minifyHtml())
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}))	
})
gulp.task("img",function(){
	gulp.src("src/img/**/*",option)
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}))

	gulp.src("src/img/team/**/*",option)
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}))
})
gulp.task("json",function(){
	gulp.src("src/json/**/*",option)
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}))
})
gulp.task("less",function(){
	csscontent++;
	console.log("css提交了"+csscontent+"次")
	// gulp.src("src/css/**/*.css",option)
	// 	.pipe(gulp.dest(app))
	// 	.pipe(browserSync.reload({stream:true}))

	gulp.src("src/css/**/*.less",option)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(minify())
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}))		
})

gulp.task("js",function(){
	jscontent++;
	console.log("js提交了"+jscontent+"次")
	gulp.src("src/js/**/*.js",option)
		.pipe(uglify())
		.pipe(gulp.dest(app))
		.pipe(browserSync.reload({stream:true}))
})

gulp.task("watchAll",function(){
	gulp.watch("src/html/**/*",['html'])
	gulp.watch("src/img/**/*",['img'])
	gulp.watch("src/js/**/*.js",['js'])
	gulp.watch("src/css/**/*",['less'])
	gulp.watch("src/json/**/*",['json'])
})




// 自动刷新 browser-sync start
gulp.task('browser',['default'],function(){
  browserSync({
    // host: 172.16.157.1,
    port: 8881,
    open: true,
    // 路径显示/d 开始
    startPath: "/app/html",
    //timestamps:false,
    server: {
      directory: true,
      routes: {
        '/d': "./app/html/"
      },
      middleware: function(req,res,next){
        next();
      },
      baseDir: './'
    },
    // 指定浏览器
    // browser: "google chrome" // 或  ["google chrome","firefox"]
    // 延迟刷新，默认0
    reloadDelay: 1,
    // 是否载入css修改，默认true
    injectChanges: false
  });
});
gulp.task('bro',function(){
  gulp.src('./app/**')
  .pipe(browserSync.reload({stream:true}));
});
gulp.task('defaultwo',['bro','browser'],function(){
  	gulp.watch('./app/**',['bro']);
});
// 自动刷新 browser-sync end
/*gulp.task("loca_servese",function(){
	connect().use(serveStatic(__dirname)).listen(8881,function(){
		console.log('正常开启服务器:Localhost:8881...');
	})
})*/
