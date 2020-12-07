const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile SASS
function style() {
    return gulp
        .src('./src/sass/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
}
// Watch SASS & Serve
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch(['./src/sass/*.scss'], style);
    gulp.watch("src/*.html").on('change', browserSync.reload);
}
exports.watch = watch;
exports.style = style;