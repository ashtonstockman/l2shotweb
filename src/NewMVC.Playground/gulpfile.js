/// <binding />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    babelify = require("babelify"),
    browserify = require("browserify"),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack');


    

var paths = {
    sourceRoot: "./source/",
    deployRoot: "./wwwroot/",
    source: {},
    prod: {}
};

paths.source.js = paths.sourceRoot + "js/**/*.js";
paths.source.jsx = paths.sourceRoot + "jsx/**/*.jsx";
paths.source.minJs = paths.sourceRoot + "js/**/*.min.js";
paths.source.css = paths.sourceRoot + "css/**/*.css";
paths.source.minCss = paths.sourceRoot + "css/**/*.min.css";
paths.source.concatJsDest = paths.sourceRoot + "js/site.min.js";
paths.source.concatCssDest = paths.sourceRoot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.source.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.source.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.source.js, "!" + paths.source.minJs], { base: "." })
        .pipe(concat(paths.source.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.source.css, "!" + paths.source.minCss])
        .pipe(concat(paths.source.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('handleJsx', function () {
    var bundler = browserify(paths.webroot + 'jsx/main.jsx');
    bundler.transform(babelify, { presets: ['es2015', 'react'] });

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.deployRoot + 'prod'));
});

gulp.task('webpack-build', function(done) {
    webpack(require('./webpack.config.js')).run(function (err, stats) {
        if (err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }
        done();
    });
});