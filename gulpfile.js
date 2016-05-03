// gulpfile.js

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default');

gulp.task('jade', function() {
  gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});
