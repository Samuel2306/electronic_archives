const gulp = require('gulp');
const uglify= require('gulp-uglify'); //js压缩
const sass = require('gulp-sass'); //sass编译
const rename = require('gulp-rename');
const tinypng_nokey = require('gulp-tinypng-nokey'); //图片压缩

const devRoot = 'src/';
const distRoot = 'dist/';
const devPath = {
  css : devRoot + 'scss/',
  js : devRoot + 'js/',
  images : devRoot + 'images/',
  media : devRoot + 'media/'
};
const distPath = {
  css : distRoot + 'css/',
  js : distRoot + 'js/',
  images : distRoot + 'images/',
  media : distRoot + 'media/'
};

gulp.task('sass', function () {
  const sassConfig = {
    outputStyle: 'compact' //'compressed'为压缩css,'compact'为横排css；不设置sassConfig为标准格式化css
  };
  return gulp.src(devPath.css + '*.scss')
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(gulp.dest(distPath.css));
});

// js压缩
gulp.task('jsmin', function () {
  gulp.src(devPath.js + '*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(distPath.js));
});

// 图片压缩
gulp.task('imagemin', function () {
  gulp.src(devPath.images + '*.{png,jpg,jpeg,gif,ico}')
    .pipe(tinypng_nokey())
    .pipe(gulp.dest(distPath.images));
});

// html文件拷贝
gulp.task('html', function () {
  gulp.src(devRoot + '*.html')
    .pipe(gulp.dest(distRoot));
});

// 多媒体文件拷贝
gulp.task('media', function () {
  gulp.src(devPath.media + '*.{mp4,mpeg,mp3,ogg}')
    .pipe(gulp.dest(distPath.media));
});


// 实时监听
gulp.task('watch', ['sass', 'jsmin', 'imagemin', 'html', 'media'],function () {
  gulp.watch(devPath.css + '*.scss', ['sass']);
  gulp.watch(devPath.js + '*.js', ['jsmin']);
  gulp.watch(devPath.images + '*.{png,jpg,jpeg,gif,ico}', ['imagemin']);
  gulp.watch(devRoot + '*.html', ['html']);
  gulp.watch(devPath.media + '*.{mp4,mpeg,mp3,ogg}', ['media']);
});
// gulp任务
gulp.task('default', ['watch']);
