var gulp = require('gulp'),
    webp = require('gulp-webp'),
    uncss = require('gulp-uncss'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    minifyHTML = require('gulp-minify-html'),
    gutil = require('gulp-util');

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

gulp.task('webp2', function () {
    return gulp.src(['./views/images/*.png', './views/images/*.jpg'])
        .pipe(webp())
        .pipe(gulp.dest('./dist/views/images'));
});

gulp.task('uncss', function() {
  return gulp.src('./css/*.css')
    .pipe(uncss({
      html: ['./*.html', './views/*.html']
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('uncss2', function() {
  return gulp.src('./views/css/*.css')
    .pipe(uncss({
      html: ['./views/*.html']
    }))
    .pipe(gulp.dest('./dist/views/css'));
});

gulp.task('csso', function() {
  gulp.src('./css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('csso2', function() {
  gulp.src('./views/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/views/css'));
});

gulp.task('uglify', function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('uglify2', function() {
  gulp.src('./views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('minifyHTML', function() {
  var opts = {comments:true,spare:true};

  gulp.src('./*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minifyHTML2', function() {
  var opts = {comments:true,spare:true};

  gulp.src('./views/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/views/'));
});

gulp.task('default', ['webp', 'webp2', 'uncss', 'uncss2', 'csso', 'csso2', 'uglify', 'uglify2', 'minifyHTML', 'minifyHTML2']);
