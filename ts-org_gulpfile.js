//following along @https://www.typescriptlang.org/docs/handbook/gulp.html

var gulp	= require("gulp")
// ,ts			= require("gulp-typescript")
// ,tsProject	= ts.createProject("tsconfig.json")
,browserify	= require("browserify")
,source		= require("vinyl-source-stream")
,tsify		= require("tsify")
,paths		= {
	pages: ["source/*.html"]
}
;

gulp.task("copy-html", function(){
	return gulp.src( paths.pages )
			.pipe( gulp.dest("dist") );
});

gulp.task("default", ["copy-html"], function(){
	// return tsProject.src()
	// 		.pipe(tsProject())
	// 		.js.pipe(gulp.dest("dist"));
	return browserify({
		basedir: "."
		,debug: true
		,entries: "source/main.ts"
		,cache: {}
		,packageCache: {}
	})
	.plugin(tsify)
	.bundle()
	.pipe(source("bundle.js"))
	.pipe(gulp.dest("dist"));
});
