const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const { exec } = require('child_process');

function clear() {
  return gulp.src(['lib', 'es'], { read: false, allowEmpty: true })
    .pipe(clean());
}

function lib() {
  return gulp.src(['src/**/*.js', '!src/**/*.test.js'])
    .pipe(babel({
      rootMode: 'upward',
    }))
    .pipe(gulp.dest('lib'));
}

function es() {
  return gulp.src(['src/**/*.js', '!src/**/*.test.js'])
    .pipe(babel({
      rootMode: 'upward',
      presets: [
        ['@babel/preset-env', { modules: false }],
      ],
    }))
    .pipe(gulp.dest('es'));
}

function types(callback) {
  exec(
    'flow-copy-source src lib --ignore **/*.test.js',
    (error) => callback(error),
  );
}

exports.clear = clear;
exports.lib = lib;
exports.es = es;
exports.types = types;

exports.default = gulp.series(
  clear,
  gulp.parallel(
    lib,
    es,
    types,
  ),
);
