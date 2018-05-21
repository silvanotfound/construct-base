const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const concat = require('gulp-concat');

gulp.task('clean', function(){
    return gulp.src('./dist/')
            .pipe(clean());
});

gulp.task('jshint', function () {
    return gulp.src('./src/js/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('test',['jshint'], function () {
    return gulp.src('src/test/**/*spec.js')
            .pipe(jasmine());
});

gulp.task('uglify',['test','clean'], function(){
    return gulp.src('./src/js/**/*.js')
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['uglify']);