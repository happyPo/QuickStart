'use strict';
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');

//less
gulp.task('default', function () {
    return gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(cleanCSS({advanced: true}))
        .pipe(gulp.dest('css/'))
        .pipe(notify('Done!'));
});