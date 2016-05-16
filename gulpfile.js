var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('connectDev', function () {
  connect.server({
    root: './',
    port: 8000,
    livereload: true
  });
});

gulp.task('connectDist', function () {
  connect.server({
    root: 'dist',
    port: 8001,
    livereload: true
  });
});

gulp.task('lint', function() {
  return gulp.src('modules/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compress', function() {
  return gulp.src('modules/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('templateCache', function() {
    var htmlOpts = {
        conditionals: true,
        spare: true,
        empty: true,
        quotes: true
    };

    var templateOpts = {
        root: '/dist',
        standalone: true
    };

    return gulp.src('/**/*.html')
        // .pipe(minifyHtml(htmlOpts))
        .pipe(templateCache(templateOpts))
        .pipe(gulp.dest('/dist'));
});

gulp.task('build', ['lint', 'sass', 'compress']);

gulp.task('default', ['build','connectDev'], function () {
    require('opn')("http://localhost:8000");
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch(['index.html'], ['html']);
    gulp.watch(['modules/**/*.js', '!modules/dist/**.js'], ['compress']);
    // gulp.watch('public/js/**/*.html', ['templateCache']);
});