//following along @https://www.typescriptlang.org/docs/handbook/gulp.html

var gulp	= require("gulp")
// ,ts			= require("gulp-typescript")
// ,tsProject	= ts.createProject("tsconfig.json")
,browserify	= require("browserify")
,source		= require("vinyl-source-stream")
,tsify		= require("tsify")

,uglify		= require("gulp-uglify")
,sourcemaps	= require("gulp-sourcemaps")
,buffer		= require("vinyl-buffer")
,gulpUtil	= require("gulp-util")

,paths		= {
	pages: ["source/*.html"]
}//paths

;

gulp.task("copy-html", function(){
	return gulp.src( paths.pages )
			.pipe( gulp.dest("dist") );
});


////////// v3 setup + uglify ////////////
gulp.task("default", ["copy-html"], function(){
	return browserify({
		basedir			: "."
		,debug			: true
		,entries		: ["src/main.ts"]
		,cache			: {}
		,packageCache	: {}
	})
	.plugin(tsify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(uglify())
	.on('error', function(err) {
		gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString());
		this.emit('end');
	})
	.pipe(sourcemaps.write("./"))
	.pipe(gulp.dest("dist"));
});



////////// v2 setup + watchify ////////////
// ,watchify	= require("watchify")
// ,gulpUtil	= require("gulp-util")
// ,watchedBrowserify	= watchify(
// 	browserify({
// 		basedir			: "."
// 		,debug			: true
// 		,entries		: ["source/main.ts"]
// 		,cache			: {}
// 		,packageCache	: {}
//
// 	})
// 	.plugin(tsify)
// )//watchedBrowserify

// function bundle(){
// 	return watchedBrowserify
// 			.bundle()
// 			.pipe(source("bundle.js"))
// 			.pipe(gulp.dest("dist"));
// }//bundle()

// gulp.task("default", ["copy-html"], bundle );
// watchedBrowserify.on("update", bundle );
// watchedBrowserify.on("log", gulpUtil.log);




////////// v1 setup ////////////
// gulp.task("default", ["copy-html"], function(){
// 	// return tsProject.src()
// 	// 		.pipe(tsProject())
// 	// 		.js.pipe(gulp.dest("dist"));
// 	return browserify({
// 		basedir: "."
// 		,debug: true
// 		,entries: "source/main.ts"
// 		,cache: {}
// 		,packageCache: {}
// 	})
// 	.plugin(tsify)
// 	.bundle()
// 	.pipe(source("bundle.js"))
// 	.pipe(gulp.dest("dist"));
// });
