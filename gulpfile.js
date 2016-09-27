'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var combineMq = require('gulp-combine-mq');

//less
gulp.task('cssmin', function () {
    return gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(combineMq({
            beautify: false
        }))
        .pipe(cleanCSS({advanced: true}))
        .pipe(gulp.dest('css/'))
        .pipe(notify('Done!'));
});

gulp.task('jsmin', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
});