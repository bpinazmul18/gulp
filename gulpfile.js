// const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
// const sass = require('gulp-sass');
//
// // Compile SASS
// function style() {
//     return gulp
//         .src('./src/sass/style.scss')
//         .pipe(sass({
//             outputStyle: 'compressed'
//         }).on('error', sass.logError))
//         .pipe(gulp.dest("./src/css"))
//         .pipe(browserSync.stream());
// }
// gulp.task(style);
// // Watch SASS & Serve
// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./src"
//         }
//     });
//     gulp.watch(['./src/sass/*.scss'], style);
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// }
// gulp.task(watch);
// gulp.task('start', gulp.series(style, watch));
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//FOR DIST FOLDER
/*SASS-COMPILER*/
function sassCompilerForDIST() {
    return gulp
        .src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}
gulp.task(sassCompilerForDIST);

//FOR SRC FOLDER
/*SASS-COMPILER*/
function sassCompilerForSRC() {
    return gulp
        .src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
}
gulp.task(sassCompilerForSRC);

function streamForBrowserSYNC() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    })
    gulp.watch(['./src/sass/*.scss'], sassCompilerForSRC);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
}
gulp.task(streamForBrowserSYNC);

gulp.task('start', gulp.series(sassCompilerForSRC, streamForBrowserSYNC))