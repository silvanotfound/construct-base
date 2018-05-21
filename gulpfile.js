const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
 
gulp.task('default', function(){
    gulp.src('spec/utils/**/*[sS]pec.js')
    .pipe(jasmine())
});