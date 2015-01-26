var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var watch  = require('gulp-watch');

var nib = require('nib');

var path = {
    stylus: ['css/base/*.styl']
};

gulp.task('stylus', function () {
    gulp.src('css/default.styl')
        .pipe(stylus({
            use      : nib(),
            compress : true
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	watch(path.stylus, function(){
		gulp.start('stylus');
	});
});

gulp.task('default', ['stylus', 'watch']);