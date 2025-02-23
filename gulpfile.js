import gulp from 'gulp'
import sassPkg from 'gulp-sass'
import dartSass from 'sass'
import less from 'gulp-less'
import watch from 'gulp-watch'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import { deleteAsync } from 'del'
import handlebars from 'gulp-compile-handlebars'
import rename from 'gulp-rename'
import include from 'gulp-include'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import gulpif from 'gulp-if'
import zip from 'gulp-zip'
import path from 'path'
import browserSyncPkg from 'browser-sync'

const browserSync = browserSyncPkg.create()
const sass = sassPkg(dartSass)
const { series, parallel } = gulp

const paths = {
  src: './src',
  dest: './dist',
  scss: '/scss',
  css: '/css',
  less: '/less',
  js: '/js',
  images: '/images',
  components: '/components',
  fonts: '/fonts',
}

const isDebug = process.env.NODE_ENV !== 'production'

// HTML task
const html = function () {
  const options = {
    ignorePartials: true,
    batch: [paths.src + paths.components],
    helpers: {
      capitals: function (str) {
        return str.toUpperCase()
      },
    },
  }
  return gulp
    .src(paths.src + '/*.{html,hbs,handlebars}')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(handlebars({}, options))
    .pipe(
      rename((path) => {
        path.extname = '.html'
      }),
    )
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

// SCSS task
const scss = function () {
  return gulp
    .src(paths.src + paths.scss + '/**/*.{scss,sass,css}')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(gulpif(isDebug, sourcemaps.init()))
    .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(isDebug, sourcemaps.write()))
    .pipe(gulp.dest(paths.dest + '/css'))
    .pipe(browserSync.stream())
}

// LESS task
const lessTask = function () {
  return gulp
    .src(paths.src + paths.less + '/**/*.less')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(gulpif(isDebug, sourcemaps.init()))
    .pipe(less({ paths: ['node_modules'] }))
    .pipe(autoprefixer())
    .pipe(gulpif(isDebug, sourcemaps.write()))
    .pipe(gulp.dest(paths.dest + '/css'))
    .pipe(browserSync.stream())
}

// Fonts task
const fonts = function () {
  return gulp
    .src(paths.src + paths.fonts + '/**/*')
    .pipe(gulp.dest(paths.dest + '/fonts'))
    .pipe(browserSync.stream())
}

// Images task
const images = function () {
  return gulp
    .src(paths.src + paths.images + '/**/*')
    .pipe(gulp.dest(paths.dest + '/images'))
    .pipe(browserSync.stream())
}

// JS task
const scripts = function () {
  return gulp
    .src(paths.src + paths.js + '/**/*.js')
    .pipe(gulp.dest(paths.dest + '/js'))
    .pipe(browserSync.stream())
}

// Clean task
const clean = function () {
  return deleteAsync(paths.dest)
}

// Serve task (browserSync)
const serve = function () {
  browserSync.init({
    server: {
      baseDir: paths.dest,
    },
    port: 3000,
    open: true,
    notify: false,
  })
}

// Watch task
const watchFiles = function () {
  watch([paths.src + '/**/*.html', './src/data/data.json'], html)
  watch(paths.src + paths.scss + '/**/*.scss', scss)
  watch(paths.src + paths.less + '/**/*.less', lessTask)
  watch(paths.src + paths.fonts + '/**/*', fonts)
  watch(paths.src + paths.images + '/**/*', images)
  watch(paths.src + paths.js + '/**/*.js', scripts)
  serve()
}

// Export tasks
export { html, scss, lessTask, fonts, images, scripts, clean, watchFiles, serve }

// Default task
export default series(clean, parallel(scss, lessTask, html, fonts, images, scripts), watchFiles)
