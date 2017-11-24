// VARIABLES
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

// FILES
// This is only called once throught the 'npm install' to get
// all the new files and replace the old
gulp.task('files', function() {
    gulp.src('node_modules/bootstrap/scss/**/*')
        .pipe(gulp.dest('scss/bootstrap'));
    gulp.src('node_modules/font-awesome/scss/**/*')
        .pipe(gulp.dest('scss/font-awesome'));
    gulp.src('node_modules/font-awesome/fonts/**/*')
        .pipe(gulp.dest('fonts'));
});

// HTML
gulp.task('html', function() {
    return gulp.src(['index.html'])
        .pipe(gulp.dest('dist'));
});

// CSS
gulp.task('css', function() {
    return gulp.src(['scss/style.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist'));
});

// JS
gulp.task('js', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.slim.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'js/script.js'
        ])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist'));
});

// SERVE
gulp.task('serve', ['css'], function() {
    gulp.watch(['index.html'], ['html']);
    gulp.watch(['scss/**/*.scss'], ['css']);
    gulp.watch(['js/**/*.js'], ['js']);
});

gulp.task('default', ['files','html','css','js','serve']);

