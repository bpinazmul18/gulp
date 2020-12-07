const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
//Get file and compressed than compile sass
function gulpSass() {
    return gulp
        .src('./src/sass/style.scss')            //get file
        .pipe(sass({                     //compile sass
            outputStyle: 'compressed'          //output style compressed
        }).on('error', sass.logError))        //sass log error
        .pipe(gulp.dest('dist/css'))         //send file or output file
}
gulp.task(gulpSass)                        //task create

gulp.task('start', gulp.series(gulpSass))//task execute