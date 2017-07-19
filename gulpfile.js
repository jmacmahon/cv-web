const gulp = require('gulp');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

const browserSync = require('browser-sync');

gulp.task('default', () => {});

gulp.task('browserify', () => (
  browserify({
    entries: ['src/js/main.jsx'],
    extensions: ['.js', '.jsx'],
    debug: true,
  })
  .transform('babelify', { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/js/'))
));

gulp.task('sass', () => (
  gulp.src('src/css/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css/'))
));

gulp.task('html', () => (
  gulp.src('src/html/**/*.html')
  .pipe(gulp.dest('dist/'))
));

gulp.task('build', ['browserify', 'sass', 'html']);

gulp.task('serve', ['build'], () => {
  browserSync({
    server: {
      baseDir: 'dist',
    },
  });
  gulp.watch('src/js/**/*.js{,x}', ['browserify']);
  gulp.watch('src/css/**/*.scss', ['sass']);
  gulp.watch('src/html/**/*.html', ['html']);
});
