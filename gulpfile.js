const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
 
gulp.task('default', function(){
    gulp.src('src/scripts/spec/**/*spec.js')
    .pipe(jasmine())
});