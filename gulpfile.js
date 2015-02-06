var gulp = require('gulp'),
    webp = require('gulp-webp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    minifyHTML = require('gulp-minify-html'),
    gutil = require('gulp-util'),
    inlinecss = require('gulp-inline-css');

gulp.task('jshint', function() {
  return gulp.src(['./js/*.js', './views/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('webp', function () {
    return gulp.src(['./img/*.png', './img/*.jpg'])
        .pipe(webp())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('webp-views', function () {
    return gulp.src(['./views/images/*.png', './views/images/*.jpg'])
        .pipe(webp())
        .pipe(gulp.dest('./dist/views/images'));
});

gulp.task('csso-views', function() {
  gulp.src('./views/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/views/css'));
});

gulp.task('scripts', function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('scripts-views', function() {
  gulp.src('./views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('inlinecss-minifyhtml', function () {
  var opts = {comments:true,spare:true};

  gulp.src('./*.html')
    .pipe(inlinecss())
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minifyhtml-views', function() {
  var opts = {comments:true,spare:true};

  gulp.src('./views/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('default', ['webp', 'webp-views', 'csso-views', 'scripts', 'scripts-views', 'inlinecss-minifyhtml', 'minifyhtml-views']);
