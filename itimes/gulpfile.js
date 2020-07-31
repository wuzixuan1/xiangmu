const{ src,dest,task,parallel,watch} = require("gulp");
//声明任务
//拷贝文件
const htmlmin = require("gulp-htmlmin");
const copy_html = ()=>
src("*.html")
.pipe(
    htmlmin({
        removeEmptyAttibutes:true,
        collapseWhitespace:true,
    })
)
.pipe(dest("dist/"))
.pipe(connect.reload());

//拷贝登录注册页面的css
const logCss = () =>
src("log/**/*")
.pipe(dest("dist/logCss"))
.pipe(connect.reload());


//处理图片
const image = () =>
src("img/**/*")
.pipe(dest("dist/images"))
.pipe(connect.reload());

//处理数据源
const data = () =>
src(["*.json","!package.json"])
.pipe(dest("dist/data"))
.pipe(connect.reload());

//处理PHP
const php =()=>
src("newPHP/*.php")
.pipe(dest("dist/"))
.pipe(connect.reload());


//处理打包压缩js文件

const concat = require("gulp-concat");
// const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const script = ()=>
src(["*.js","!gulpfile.js"])
.pipe(dest("dist/js"))
.pipe(connect.reload());


const scripts = ()=>
src(["demo/*.js"])
.pipe(dest("dist/jsTool"))
.pipe(connect.reload());



//处理scss 
const minifyCSS = require("gulp-minify-css");
const scss = require("gulp-sass");

//主页css
const scss_files = () =>
src("scss/index.scss")
.pipe(scss())
.pipe(dest("dist/css"))
.pipe(minifyCSS())
.pipe(rename("index.min.css"))
.pipe(dest("dist/css"))
.pipe(connect.reload());
//公共css
const scss_rest = () =>
src("scss/rest.scss")
.pipe(scss())
.pipe(dest("dist/css"))
.pipe(minifyCSS())
.pipe(rename("rest.min.css"))
.pipe(dest("dist/css"))
.pipe(connect.reload());

//商品详情页

const scss_commodity = () =>
src("scss/commodity.scss")
.pipe(scss())
.pipe(dest("dist/css"))
.pipe(minifyCSS())
.pipe(rename("commodity.min.css"))
.pipe(dest("dist/css"))
.pipe(connect.reload());
//放大镜CSS
const scss_shop = () =>
src("scss/shop.scss")
.pipe(scss())
.pipe(dest("dist/css"))
.pipe(minifyCSS())
.pipe(rename("shop.min.css"))
.pipe(dest("dist/css"))
.pipe(connect.reload());
//购物车scss
const scss_buy = () =>
src("scss/buy.scss")
.pipe(scss())
.pipe(dest("dist/css"))
.pipe(minifyCSS())
.pipe(rename("buy.min.css"))
.pipe(dest("dist/css"))
.pipe(connect.reload());
//注册任务
task(copy_html);
task(image);
task(logCss);
task(data);
task(script);
task(scss_files);
task(scripts);
task(php);
task(scss_rest);
task(scss_commodity);
task(scss_shop);
task(scss_buy);


exports.build = parallel(
    copy_html,
    image,
    logCss,
    data,
    script,
    scss_files,
    scripts,
    php,
    scss_rest,
    scss_commodity,
    scss_shop,
    scss_buy
);
//设置监听
function watch_items() {
    watch("*.html", copy_html);
    watch("log/**/*",  logCss);
    watch("img/**/*",  image);
    watch(["*.json","!package.json"], data);
    watch("scss/index.scss", scss_files);
    watch(["*.js", "!gulpfile.js"], script);
    watch(["demo/*.js"],scripts);
    watch("newPHP/*.php", php);
    watch("scss/rest.scss", scss_rest);
    watch("scss/commodity.scss", scss_commodity);
    watch("scss/shop.scss", scss_shop);
    watch("scss/buy.scss", scss_buy);
  };

const connect = require("gulp-connect");
function server() {
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true,
  });
}
task(server);
task(watch_items);
exports.default = parallel(watch_items, server);
