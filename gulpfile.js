const gulp = require('gulp');
const ts = require('gulp-typescript');
const karma = require('karma').server;

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch(['app/**/*.ts','app/*.ts'], ['scripts']);
});

gulp.task('default', ['watch']);