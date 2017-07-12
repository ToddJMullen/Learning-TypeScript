//this is the version that I've come up with from the book
//for learnign purposes I'll create others that will do something besides throw error via tutorials


//define var / util references needed to define the desired tasks
var	source		= "./source/"
,transpiled		= "./txp/"
,prodDistro		= "./www/"
,gulp			= require("gulp")
,tslint			= require("gulp-tslint")
,ts				= require("gulp-typescript")
,browserify		= require("browserify")
,transform		= require("vinyl-transform")
,uglify			= require("gulp-uglify")
,sourcemaps		= require("gulp-sourcemaps")
,karma			= require("gulp-karma")
,runSequence	= require("run-sequence")
,browserSync	= require("browser-sync")

//added this based on comments when researching dest.write() error saying that vinyl-transform
//does not have a stream & will not sork with browserify
,buffer			= require('vinyl-buffer')

//define complex objects used in defining the tasks
,browserified	= transform(function(filename){
	var b = browserify({entries: filename, debug: true});
	return b.bundle();
})


//define a TypeScript project describing the configuration of the application itself
, tsProject = ts.createProject({
    removeComments      : true
    ,noImplicitAny      : true
    ,target             : "es6"
    ,module             : "commonjs"
    ,declarationFiles   : false
})
//define a TypeScript project configuration for the code's tests
,tsTestProject  = ts.createProject({
    removeComments      : true
    ,noImplicitAny      : true
    ,target             : "es6"
    ,module             : "commonjs"
    ,declarationFiles   : false
})
;

//define a default gulp task that names subordinate tasks that are to be performed.
//gulp.task("default", ["myInit","lint","build-ts","build-ts-tests","bundle-js","bundle-test"] );
gulp.task("build-all", [
	"lint"
	,"build-ts"
	,"bundle-js"
	,"build-css"
	,"build-html"
//	,"build-ts-tests"
//	,"bundle-test"
] );

//define a gulp task for linting the code
gulp.task("lint", function(){
  return gulp.src([
    source + "ts/**/**.ts"
//	,source + "test/**/**.test.ts"
  ])
  //this is how the book has it defined
//  .pipe(tslint())//send all files matching those patterns into tslint()
//this is how the npm documentation shows
  .pipe(tslint({
	  formatter: "verbose"
  }))//send all files matching those patterns into tslint()
  .pipe(tslint.report());//send tslint() output into tslint.report()
});

/////////////////////
// define the TypeScript compilation tasks
/////////////////////
//
//define a gulp task to compile the application's TypeScript into Javascript
gulp.task("build-ts", function(){
//	console.log("'build-ts' building TypeScript files.");
    return gulp.src( source + "ts/**/**.ts")
			.pipe(tsProject())
            .js.pipe(gulp.dest( transpiled + "out/js"));
});

gulp.task("build-css", function(){
//	console.log("'bundle-css' parsing css files.");
	return gulp.src( source + "styles/**/**.css")
			.pipe( gulp.dest( transpiled + "out/css/"));
});

gulp.task("build-html", function(){
//	console.log("'bundle-html' copying html files.");
	return gulp.src( source + "html/**/*.html")
			.pipe( gulp.dest( prodDistro + ""));
});


/////////////////////
// define Prod build tasks for combining, minifying etc.
/////////////////////
gulp.task("bundle-js", function(){
//	console.log("'bundle-js' parsing built Javascript files.")
	return gulp.src( transpiled + "out/js/**.js")
//				.pipe(browserified)
//				.pipe(sourcemaps.init({loadMaps: true}))
//				.pipe(buffer())//added to fix dest.write() error
//				.pipe(uglify())
//				.pipe(sourcemaps.write( "./" ))
				.pipe(gulp.dest("www/src/js"))
});

gulp.task("bundle-css", function(){
//	console.log("'bundle-css' parsing/copying stylesheet files.")
	return gulp.src( transpiled + "out/css/**.css")
//				.pipe(browserified)
//				.pipe(buffer())//added to fix dest.write() error
//				.pipe(uglify())
				.pipe(gulp.dest("www/src/css"))
});


//group together all the build-all related tasks
gulp.task("bundle", function(cb){
//	console.log("'bundle' calling 'build-all' after 'bundle-js'");
	runSequence("build-all", [
		"bundle-js"
		,"bundle-css"
	], cb);
});


/////////////////////////
// setup a watch for changes to the TypeScript files that will trigger a build
/////////////////////////
gulp.task("build-and-watch",["build-all"], function(){
//gulp.task("watch-ts",["browser-sync"], function(){
	console.log("'build-and-watch' telling gulp to watch the ts/, styles/, & html/ folders"
					+ " after telling gulp to watch the prod folders.");
/*	browserSync({
		server: {
			baseDir: prodDistro
		}
	});*/
	return gulp.watch([
		"source/ts/**/*.ts"
		,"source/styles/**/*.css"
		,"source/html/**/*.html"
	], ["build-all","bundle"]);
});//watch-ts










// Trying to make a minimal file...
// I've moved these down here because they're just adding to the confusion of trying to learn
// this stuff & I'll reposition & add these back once I understand how they're supposed
// to be wired together.


//group together all the test related tasks
gulp.task("test", function(cb){
//	runSequence("bundle", ["karma"], cb);
console.log("'test' calling 'bundle'");
	runSequence("bundle", cb);
});

/////////////////////////
// setup browser sync to watch for changes & refresh on demand
/////////////////////////

gulp.task("browser-sync",["test"], function(){
	//var prodDistro = prodDistro;
	console.log("'browser-sync' called");
	browserSync({
		server: {
			baseDir: prodDistro
		}
	});
	return gulp.watch([
		prodDistro + "src/js/**/*.js"
		,prodDistro + "src/css/**/*.css"
//		,prodDistro + "test/css/**/**/*.test.js"
		,prodDistro + "data/**/**"
		,prodDistro + "**.html"
	], [browserSync.reload]);
});




//define a gulp task to compile the application's TypeScript test code into Javascript
gulp.task("build-ts-tests", function(){
    return gulp.src( source + "test/**/**.test.ts")//get these files
                .pipe( ts(tsTestProject()) )//send them into the ts object with the test configuration
                .js.pipe(gulp.dest( transpiled + "test/"));//send the js output into this dir
});

gulp.task("bundle-test", function(){
	return gulp.src( transpiled +  "test/**/**.test.js")
				.pipe(browserified)
				.pipe(gulp.dest( "www/dist/test/"));
});



gulp.task("karma", function(cb){
	var prodDistro = prodDistro;
	gulp.src( prodDistro + "test/**/**.test.js")
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
