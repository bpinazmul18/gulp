const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//file for src
//sass compiler
function gulpSassForSRC() {
    return gulp
        .src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
}
gulp.task(gulpSassForSRC);

//file for dist
//sass compiler
// function gulpSass() {
//     return gulp
//         .src('./src/sass/style.scss')            //get file
//         .pipe(sass({                     //compile sass
//             outputStyle: 'compressed'          //output style compressed
//         }).on('error', sass.logError))        //sass log error
//         .pipe(gulp.dest('dist/css'))         //send file or output file
//         .pipe(browserSync.stream());
// }
// gulp.task(gulpSass)                        //task create
// //html
// function gulphtml() {
//     return gulp
//         .src('./src/*.html')
//         .pipe(gulp.dest('./dist'))
//         .pipe(browserSync.stream());
// }
// gulp.task(gulphtml);

//browser stream
function browserStream() {
    return browserSync.init({
            server: {
                baseDir: './src'
            }
    })
    gulp.watch('./src/**/*.scss');
    gulp.watch('./src/*.html').on('change', browserSync.reload);
}
gulp.task(browserStream);
gulp.task('start', gulp.series(gulpSass, gulphtml, gulpSassForSRC, browserStream))//task execute