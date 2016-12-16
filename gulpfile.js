const gulp = require('gulp');
const ts = require('gulp-typescript');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);

// var gulp = require('gulp');
// var jasmine = require('gulp-jasmine');
// var typescript = require('gulp-tsc');
// var runSequence = require('run-sequence');
 
// gulp.task('compile', function(){
//   return gulp.src(['src/ts/**/*.ts'])
//     .pipe(typescript())
//     .pipe(gulp.dest('src/js/'));
// });

// gulp.task('test', function() {
//    return gulp.src('spec/*.js')
//       .pipe(jasmine());
// });

// gulp.task('default', function() {
//    runSequence( 'compile', 'test' );
// });