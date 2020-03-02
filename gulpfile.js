//##1

// var gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");


// gulp.task("default"
//         ,function(){
//             return tsProject.src()
//             .pipe(tsProject())
//             .js.pipe(gulp.dest("dist"));
//         }
// );

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// var gulp = require("gulp");
// var browserify = require("browserify");
// var source =  require("vinyl-source-stream");
// var tsify = require("tsify");
// var paths = {
//     pages:["src/*.html"]
// };

// //这里增加了copy-html任务
// gulp.task("copy-html",function(){
//     return gulp.src(paths.pages).pipe(gulp.dest("dist"));
// });



// gulp.task("default"
//         ,gulp.series(gulp.parallel('copy-html') //把copy-html任务加作default的依赖项 ; 这样，当default执行时，copy-html任务会被首先执行。
//         ,function(){
//             return browserify({
//                 basedir:'.',
//                 debug:true,
//                 entries:['src/main.ts'],
//                 cache:{},
//                 packageCache: {},
//             }).plugin(tsify) //使用tsify插件调用Browserify，而不是gulp-typescript。 方便的是，两者传递相同的参数对象到TypeScript编译器。
//             .bundle() //正在调用bundle
    //             .pipe(source('bundle.js')) //结束调用bundle后，我们使用变量source（参见L19）把所生成的文件命名为bundle.js。
//             .pipe(gulp.dest("dist")); //把生成的 bundle.js 保存到本文件所在目录下的'dist'文件夹下
//         })
// );

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// var gulp = require("gulp");
// var browserify = require("browserify");
// var source = require("vinyl-source-stream");
// var watchify = require("watchify");
// var tsify = require("tsify");
// var fancy_log = require("fancy-log");  
// var paths ={
//     pages: ["src/*.html"],
// };


// var watchedBrowserify = watchify(
//                             browserify({ //将browserify实例包裹在watchify的调用里
//                                 basedir:".", 
//                                 debug:true,
//                                 entries:['src/main.ts'],
//                                 cache:{},
//                                 packageCache:{},
//                             }).plugin(tsify)
// );



// gulp.task("copy-html",function(){
//     return gulp.src(paths.pages).pipe(gulp.dest("dist"));
// });



// function bundle(){
//     return watchedBrowserify.bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest("dist"));
    
// }   

// gulp.task("default",
//     gulp.series(
//         gulp.parallel("copy-html"),bundle)
// );
// watchedBrowserify.on("update",bundle);
// watchedBrowserify.on("log",fancy_log);



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


var gulp = require("gulp");
var  browserify  = require ("browserify");
var source =  require("vinyl-source-stream");
var tsify = require("tsify");

var uglify =  require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");

var  paths = {
    pages: 'src/*.html',
};

gulp.task("copy-html",
    function(){
        return gulp.src(paths.pages)
            .pipe(gulp.dest('dist'))
    }
);


gulp.task('default',
    gulp.series(gulp.parallel('copy-html'),
        function(){
            return browserify({
                    basedir:'.',
                    debug:true , 
                    entries:['src/main.ts'], 
                    cache:{},  
                    packageCache:{},
                }).plugin(tsify)
                .boundle().pipe(source('boundle.js'))
                        .pipe(buffer())
                        .pipe(sourcemaps.init({loadMaps:true}))
                        .pipe(uglify())
                        .pipe(sourcemaps.write('./'))
                        .pipe(gulp.dest("dist"));
        }
    )
);

