const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

//file for src
function gulpSassForSRC() {
    return gulp
        .src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
}
gulp.task(gulpSassForSRC);

//sass compiler
function gulpSass() {
    return gulp
        .src('./src/sass/style.scss')            //get file
        .pipe(sass({                     //compile sass
            outputStyle: 'compressed'          //output style compressed
        }).on('error', sass.logError))        //sass log error
        .pipe(gulp.dest('dist/css'))         //send file or output file
}
gulp.task(gulpSass)                        //task create

//html for production
function gulphtml() {
    return gulp
        .src('./src/*.html')
        .pipe(gulp.dest('./dist'));
}
gulp.task(gulphtml);

gulp.task('start', gulp.series(gulpSass, gulphtml, gulpSassForSRC))//task execute