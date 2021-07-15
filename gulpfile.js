const gulp = require('gulp');
const rename = require('gulp-rename');

const plumber = require("gulp-plumber");
const notifier = require('node-notifier');

const browser = require("browser-sync");

const ejs = require('gulp-ejs');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const babel = require('gulp-babel');

function onError (error) {
  notifier.notify(
    {
      message: "しっぱいしたワン",
      title: "パグ"
    },
    function() {
      console.log(error.message);
    }
  );
}

function taskClean (done) {
  done();
}

// ローカルサーバを起動
function taskServer (done) {
  browser({
    server: {
      baseDir: './public'
    }
  });

  done();
}

// ブラウザのリロードを行う
function taskReload (done) {
  browser.reload();

  done();
}

// ejs のビルドを行う
function taskEjs (done) {
  gulp.src(['./src/ejs/**/*.ejs', '!./src/ejs/**/_*.ejs'])
    .pipe(
      plumber({
        errorHandler: onError
      })
    )
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./public/'));

  done();
}

// scss のビルドを行う
function taskSass (done) {
  const plugins = [
    autoprefixer({ cascade: false }),
  ];

  gulp.src(['./src/scss/**/*.scss', '!./src/scss/**/_*.scss'])
    .pipe(
      plumber({
        errorHandler: onError
      })
    )
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public/css'));

  done();
}

// js のビルドを行う
function taskJs (done) {
  gulp.src(['./src/js/**/*.js', '!./src/js/**/_*.js'])
    .pipe(
      plumber({
        errorHandler: onError
      })
    )
    .pipe(babel())
    .pipe(gulp.dest('./public/js'));

  done();
}

// ファイルの変更を監視する
function taskSurvey (done) {
  gulp.watch('./src/ejs/**/*.ejs', gulp.series(taskEjs, taskReload));
  gulp.watch('./src/scss/**/*.scss', gulp.parallel(taskSass, taskReload));
  gulp.watch('./src/ejs/**/*.js', gulp.series(taskJs, taskReload));

  done();
}

exports.clean = taskClean;
exports.default = gulp.series(gulp.parallel(taskEjs, taskSass, taskJs), taskServer, taskSurvey);
