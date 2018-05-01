const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const { exec } = require('child_process');

gulp.task('clean', () =>
  gulp.src(['lib', 'es'], { read: false })
    .pipe(clean()));

gulp.task('lib', ['clean'], () =>
  gulp.src(['src/**/*.js', '!src/**/*.test.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib')));

gulp.task('es', ['clean'], () =>
  gulp.src(['src/**/*.js', '!src/**/*.test.js'])
    .pipe(babel({
      babelrc: false,
      presets: [
        ['env', { modules: false }],
        'flow',
      ],
      plugins: [
        'transform-class-properties',
        'transform-object-rest-spread',
      ],
    }))
    .pipe(gulp.dest('es')));

gulp.task('types', ['clean'], (callback) => {
  exec(
    'flow-copy-source src lib --ignore **/*.test.js',
    error => callback(error),
  );
});

gulp.task('default', ['lib', 'es', 'types']);
