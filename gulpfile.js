var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var concat       = require('gulp-concat');
var watch        = require('gulp-watch');
var connect      = require('gulp-connect');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

// TASK FOR START DEVELOPMENT SERVER
gulp.task('startServer', function() {
    connect.server({
        port     : 8081,
        name     : 'Liam Klyneker Local Development',
        root     : '.',
        fallback : 'index.html'
        // livereload: true
    });
    
    gulp.start('watch');
});

gulp.task('watch', function() {
    watch(path.stylus, function(){
        gulp.start('stylus');
    });
});

gulp.task('stylus', function () {
    gulp.src('css/default.styl')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(stylus({
                compress : true
            }))
        .pipe(autoprefixer({
                browsers : ['last 3 versions']
            }))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});


gulp.task('buildGh', ['stylus']);


// PATHS
var path = {
    stylus: ['css/default.styl', 'css/base/*.styl', 'css/vendor/*.styl']
};





























