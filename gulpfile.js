//define var / util references needed to define the desired tasks
var gulp		= require("gulp")
,tslint			= require("gulp-tslint")
,ts				= require("gulp-typescript")
,browserify		= require("browserify")
,transform		= require("vinyl-transform")
,uglify			= require("gulp-uglify")
,sourcemaps		= require("gulp-sourcemaps")
,karma			= require("gulp-karma")
,runSequence	= require("run-sequence")
,browserSync	= require("browser-sync")

//define complex objects used in defining the tasks
,browserified	= transform(function(filename){
	var b = browserify({entries: filename, debug: true});
	return b.bundle();
})


//define a TypeScript project describing the configuration of the application itself
, tsProject = ts.createProject({
    removeComments      : true
    ,noImplicitAny      : true
    ,target             : "ES3"
    ,module             : "commonjs"
    ,declarationFiles   : false
})
//define a TypeScript project configuration for the code's tests
,tsTestProject  = ts.createProject({
    removeComments      : true
    ,noImplicitAny      : true
    ,target             : "ES3"
    ,module             : "commonjs"
    ,declarationFiles   : false
})
;

//define a default gulp task that names subordinate tasks that are to be performed.
//gulp.task("default", ["myInit","lint","tsc","tsc-tests","bundle-js","bundle-test"] );
gulp.task("build", ["myInit","lint","tsc","tsc-tests","bundle-js","bundle-test"] );

gulp.task("myInit", function(){
  console.log("Gulp! Gulp!! Gulp!!!");
});

//define a gulp task for linting the code
gulp.task("lint", function(){
  return gulp.src([
    "./source/ts/**/**.ts"
	,"./test/**/**.test.ts"
  ])
  //this is how the book has it defined
//  .pipe(tslint())//send all files matching those patterns into tslint()
//this is how the npm documentation shows
  .pipe(tslint({
	  formatter: "prose"
  }))//send all files matching those patterns into tslint()
  .pipe(tslint.report());//send tslint() output into tslint.report()
});

//define a gulp task to compile the application's TypeScript
gulp.task("tsc", function(){
    return gulp.src("./source/ts/**/**.ts")
            .pipe(ts(tsProject))
            .js.pipe(gulp.dest("./temp/source/js"));
});

//define a gulp task to compile the application's test code
gulp.task("tsc-tests", function(){
    return gulp.src("./test/**/**.test.ts")//get these files
                .pipe(ts(tsTestProject))//send them into the ts object with the test configuration
                .js.pipe(gulp.dest("./temp/test/"));//send the js output into this dir
});

gulp.task("bundle-js", function(){
	return gulp.src("./temp/source/js/main.js")
				.pipe(browserified)
				.pipe(sourcemaps.init({loadMaps: true}))
				.pipe(uglify())
				.pipe(sourcemaps.write("./"))
				.pipe(gulp.dest("./dist/source/js/"))
});

gulp.task("bundle-test", function(){
	return gulp.src("./temp/test/**/**.test.js")
				.pipe(browserified)
				.pipe(gulp.dest("./dist/test/"));
});

gulp.task("karma", function(cb){
	gulp.src("./dist/test/**/**.test.js")
	.pipe(karma({
		configFile: "karma.conf.js"
		,action: "run"
	}))
	.on("end",cb)
	.on("error", function(err){
		//Make sure failed tests cause gulp to exit non-zero???
		throw err;
	});
});

//group together all the build related tasks
gulp.task("bundle", function(cb){
	runSequence("build", [
		"bundle-js"
		,"bundle-test"
	], cb);
});

//group together all the test related tasks
gulp.task("test", function(cb){
	runSequence("bundle", ["karma"], cb);
});

gulp.task("browser-sync",["test"], function(){
	browserSync({
		server: {
			baseDir: "./dist"
		}
	});
	return gulp.watch([
		"./dist/source/js/**/*.js"
		,"./dist/source/css/**/*.css"
		,"./dist/test/css/**/**/*.test.js"
		,"./dist/data/**/**"
		,"./index.html"
	], [browserSync.reload]);
});


//We must control the flow sequence of Gulp tasks to ensure proper execution
//we must use either: callbacks, streams, or promises"
//the following are just examples (I believe they're not meant to be used at all)
//to use a callback
/*
gulp.task("sync",function(cb){
	setTimeout(function(){
		cb();
	}, 1000)
});

//or to return a stream
gulp.task("sync", function(){
	return gulp.src("js/*.js")
			.pipe(concat("script.min.js"))
			.pipe(uglify())
			.pipe(gulp.dest("../dist/js"));
});

//then use with an alternate notation indicating dependency
gulp.task("secondTask", ["sync"], function(){
	//this will wait for "sync"
});
*/
