var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
var size       = require('gulp-size');
var concat     = require('gulp-concat');
var imagemin   = require('gulp-imagemin');
var minifycss  = require('gulp-minify-css');
var prefix     = require('gulp-autoprefixer');

//
// Default Task
//
gulp.task('default', ['sass', 'scripts', 'stats']);

//
// SASS
//
gulp.task('sass', function() {
  gulp.src(['./app/assets/sass/app.scss'])
    .pipe(sass({
      includePaths: ['./app/assets/sass/'],
      outputStyle: 'expanded'
    }))
    .pipe(prefix("last 3 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(minifycss())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./public/css'));
});

//
// Images
//
gulp.task('images', function() {
  gulp.src('./public/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
});

//
// Scripts
//
gulp.task('scripts', function() {
  gulp.src(['app/assets/js/app.js'])
    .pipe(browserify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/js/'));
});

//
// Stats
//
gulp.task('stats', function() {
    gulp.src('public/js/*')
    .pipe(size({showFiles: true}));

    gulp.src('public/css/*')
    .pipe(size({showFiles: true}));
});
