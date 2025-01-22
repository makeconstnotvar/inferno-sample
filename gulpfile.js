const path = require('path');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');
//const autoprefixer = require('gulp-autoprefixer');
const hash = require('gulp-hash');
const inject = require('gulp-inject');
const del = require('del');

const apps = ['admin', 'manager', 'secure', ''];

/* Копирование */
gulp.task(`copy`, function () {
  return gulp.src(['public/**/*', '!public/index.html', '!public/ie.html'])
    .pipe(gulp.dest(`build/`));
});

gulp.task(`common`, function () {
  return gulp.src(['build/scripts/*'])
    .pipe(gulp.dest(`build/scripts`));
});

gulp.task(`inject`, function () {
  const sources = gulp.src([`build/scripts/*.js`, `build/styles/*.css`,], {read: false});
  return gulp.src(['public/index.html', 'public/ie.html'])
    .pipe(inject(sources, {ignorePath: '/build'}))
    .pipe(gulp.dest(`build/`));
});


/* Стили */
const styles = ['src/styles/styles.scss'];

gulp.task('styles-release', function () {
  return gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
    //.pipe(autoprefixer())
    .pipe(hash())
    .pipe(clean())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/admin/styles'))
    .pipe(gulp.dest('build/manager/styles'))
    .pipe(gulp.dest('build/secure/styles'))
    .pipe(gulp.dest('build/rick-and-morty/styles'));
});

gulp.task('styles-debug', function () {
  return gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
    //.pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/admin/styles'))
    .pipe(gulp.dest('build/manager/styles'))
    .pipe(gulp.dest('build/secure/styles'))
    .pipe(gulp.dest('build/rick-and-morty/styles'));
});

gulp.task('styles-delete', function () {
  return del(['build/**/*.css', 'build/**/*.css.map']);
});

/* Основные таски */
gulp.task('debug', gulp.series(
  'styles-debug',
  'copy',
  'common',
  'inject',
));

gulp.task('release', gulp.series(
  'styles-release',
  'copy',
  'common',
  'inject',
));

gulp.task('watch', gulp.series('styles-delete', 'styles-debug', function () {
  return gulp.watch(['src/styles/**/*.scss'], gulp.series('styles-debug'));
}));

gulp.task('clean', function () {
  return del(['build/*/']);
});

function tildaResolver(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return {file: url};
}

