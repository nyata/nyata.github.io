// gulpfile.js

var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('default');

gulp.task('jade', function() {
  gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'));
});

gulp.task('jade-watch', ['jade'], function() {
  var watcher = gulp.watch('./*.jade', ['jade']);
  watcher.on('change', function(event) {
    console.log('jade: File ' + event.path);
  });
});

gulp.task('sass-watch', ['sass'], function() {
  var watcher = gulp.watch('./css/*.scss', ['sass']);
  watcher.on('change', function(event) {
    console.log('sass: File ' + event.path);
  });
});
