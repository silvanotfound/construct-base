const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const jshint = require('gulp-jshint');

gulp.task('jshint', function () {
    return gulp.src('./src/js/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('test',['jshint'], function () {
    return gulp.src('./src/test/**/*spec.js')
            .pipe(jasmine());
});

gulp.task('default', ['test']);