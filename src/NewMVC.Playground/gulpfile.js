﻿/// <binding AfterBuild='default' />
"use strict";

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var del = require('del');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',

    paths: {
        html: './src/*.html',
        js: './src/**/*.js*',
        images: './src/images/*',
        dist: './dist',
        fonts: './node_modules/bootstrap/fonts/**',
        css: [
			'./node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'./node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        mainJs: './src/main.jsx'
    }
};

gulp.task('html', function () {
    gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(config.paths.mainJs, { debug: true, extensions: ['.js', '.jsx'] })
		.transform(babelify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});



gulp.task('css', function () {
    gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
}); 

gulp.task('images', function () {
    gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());

    gulp.src('.src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('fonts', function () {
    gulp.src(config.paths.fonts)
		.pipe(gulp.dest(config.paths.dist + '/fonts'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
})

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
		.pipe(lint({ config: 'eslint.config.json' }))
		.pipe(lint.format());
});

gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('_clean', function () {
    return del(['./dist/*']);
});

gulp.task('_default', ['html', 'js', 'css', 'images', 'fonts', 'lint', 'open', 'watch']);