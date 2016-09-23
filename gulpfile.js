var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber');

gulp.task('dist-app-html', function () {
    gulp.src('app/**/*.html')
        .pipe(plumber())
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
    gulp.src('bower_components/**')
        .pipe(plumber())
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('default', ['dist-app-html', 'dist-app-js', 'dist-bower'], function () {
});

gulp.task('watch', ['default'], function () {
        gulp.watch('app/**/*.html', ['dist-app-html']);
        gulp.watch('app/**/*.js', ['dist-app-js']);
    }
);