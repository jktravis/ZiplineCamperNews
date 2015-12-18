var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('scripts', function() {
  gulp.src(['static/js/**/*.js'])
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['scripts'], function(){
  browserSync.init({
    server: './',
    browser: ['firefox']
  });
  gulp.watch('static/js/**/*.js', ['scripts']);
  gulp.watch('*.html', browserSync.reload);
});