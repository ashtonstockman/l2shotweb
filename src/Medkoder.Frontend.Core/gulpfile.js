/// <binding />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    webpack = require('webpack');

var paths = {
    sourceRoot: "./src/",
    distRoot: "./wwwroot/"
};

gulp.task("clean", function (cb) {
    rimraf(paths.distRoot, cb);
});

gulp.task('webpack', ["clean"], function(done) {
    webpack(require('./webpack.config.js')).run(function (err, stats) {
        if (err) {
            console.log('Error', err);
        } else {
            console.log(stats.toString());
        }
        done();
    });
});