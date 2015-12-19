var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber');

gulp.task('dist-app-html', function () {
    gulp.src('app/**/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('dist'))
});

gulp.task('dist-app-less', function () {
    gulp.src('app/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('dist'))
});

gulp.task('dist-app-js', function () {
    gulp.src('app/**/*.js')
        .pipe(plumber())
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('dist-bower', function () {
    gulp.src('bower_components/underscore/*-min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/underscore/1.8.3/'));

    gulp.src('bower_components/backbone/*-min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/backbone/1.2.3/'));

    gulp.src('bower_components/requirejs/require.js').pipe(plumber()).pipe(uglify()).pipe(gulp.dest('dist/lib/requirejs/2.1.22/'));
    gulp.src('bower_components/text/text.js').pipe(plumber()).pipe(uglify()).pipe(gulp.dest('dist/lib/text/2.0.14/'));

    gulp.src('bower_components/jquery/dist/jquery.min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/jquery/2.1.4/'));

    gulp.src('bower_components/bootstrap/dist/css/*.min.css').pipe(plumber()).pipe(gulp.dest('dist/lib/bootstrap/3.3.6/css/'));
    gulp.src('bower_components/bootstrap/dist/js/*.min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/bootstrap/3.3.6/js/'));
    gulp.src('bower_components/bootstrap/dist/fonts/**').pipe(plumber()).pipe(gulp.dest('dist/lib/bootstrap/3.3.6/fonts/'));

    gulp.src('bower_components/html5shiv/dist/*.min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/html5shiv/3.7.3/'));

    gulp.src('bower_components/respond/dest/*.min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/respond/1.4.2/'));

    gulp.src('bower_components/marked/*.min.js').pipe(plumber()).pipe(gulp.dest('dist/lib/marked/0.3.4/'));
});

gulp.task('default', ['dist-app-html', 'dist-app-less', 'dist-app-js', 'dist-bower'], function () {
});

gulp.task('watch', ['default'], function () {
        gulp.watch('app/**/*.html', ['dist-app-html']);
        gulp.watch('app/**/*.less', ['dist-app-less']);
        gulp.watch('app/**/*.js', ['dist-app-js']);
    }
);