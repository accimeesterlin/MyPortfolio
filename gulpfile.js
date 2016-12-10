var gulp = require('gulp'),
	prefix = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	watch = require('gulp-watch'),
	nested = require('postcss-nested'),
	cssImport=  require('postcss-import'),
	variable = require('postcss-simple-vars'),
	autoRefresh = require('browser-sync').create();




gulp.task('style', function(){
	return gulp.src('mainCss/style.css')
	.pipe(postcss([cssImport, nested, variable, prefix]))
	.pipe(gulp.dest('style'));
});


gulp.task('watch', function(){
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




	watch('javascript.js', function(){
		autoRefresh.reload();
	});

	// watch('App/containerTop.js', function(){
	// 	autoRefresh.reload();
	// });

	// watch('App/random.js', function(){
	// 	autoRefresh.reload();
	// });
	
	watch('mainCss/**/*.css', function(){
		gulp.start('cssInject');
	});
});


gulp.task('cssInject', ['style'], function(){
	gulp.src('style/style.css')
	//Method name stream to pipe it in the browser.
	.pipe(autoRefresh.stream());
});
















