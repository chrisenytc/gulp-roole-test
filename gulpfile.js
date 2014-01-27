var gulp = require('gulp');
var gutil = require('gulp-util');
var roole = require('gulp-roole');

gulp.task('test', function() {
    return gulp.src("./src/*.roo")
    .pipe(roole())
    .pipe(gulp.dest("./dist"));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('./src/*.roo', ['test']);
});

gulp.task('default', ['test', 'watch']);