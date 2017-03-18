
// Importing modules. 
const gulp = require('gulp'),
	  babelify = require('babelify'),
	  browserify = require('browserify'),
	  source = require('vinyl-source-stream'),
	  buffer = require('vinyl-buffer'),
	  prefix = require('autoprefixer'),
	  postcss = require('gulp-postcss'),
	  watch = require('gulp-watch'),
	  nested = require('postcss-nested'),
	  cssImport=  require('postcss-import'),
	  variable = require('postcss-simple-vars'),
	  autoRefresh = require('browser-sync').create();





// ==================================================================
// ==================================================================

// ES6 piping tasking and bundle all of them together
gulp.task('es6', () => {
	browserify('application/app.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		
		.bundle()
		.on('error', function (errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(source('app.js'))
		.pipe(buffer())

		.pipe(gulp.dest('build/'));
});

// ==================================================================
// ==================================================================

// ES6 Compiling tasks
gulp.task('compiler', ['es6'],() => {
	gulp.watch('application/**/*.js',['es6'])

});

// ==================================================================
// ==================================================================


// CSS styling 
gulp.task('style', function(){
	return gulp.src('mainCss/style.css')
	.pipe(postcss([cssImport, nested, variable, prefix]))

	.pipe(gulp.dest('style'));
});

// ==================================================================
// ==================================================================


// Gulp watch tasks
gulp.task('watch', ['compiler'], function(){
	//Initialize with browser-sync
	autoRefresh.init({
		notify:false,
		server:{
			baseDir:""
		}
	});
	//Havhing browser sync reload the index.html
	watch('index.html', function(){
		autoRefresh.reload();
	});

	// Watching every single of JavaScript files
	watch('application/**/*.js', function(){
		autoRefresh.reload();
	});

	
	watch('mainCss/**/*.css', function(){
		gulp.start('cssInject');
	});
});

// ==================================================================
// ==================================================================

// Inject css without refreshing the browser
gulp.task('cssInject', ['style'], function(){
	gulp.src('style/style.css')
	//Method name stream to pipe it in the browser.
	.pipe(autoRefresh.stream());
});





















