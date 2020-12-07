// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();
//
// //Static server + watchng scss/html files
// gulp.task ('serve', ['sass'], function () {
//     browserSync.init({
//         injectChanges: true,
//         server: {
//             baseDir: './dist'
//         }
//     });
//
//     gulp.watch('./src/sass/style.scss', ['sass']);
//     gulp.watch('./dist/*.html').on('change', browserSync.reload);
// });
//
// // Compile sass into CSS & auto-inject into browsers
//
// gulp.task('sass', function () {
//     return gulp.src('./src/sass/style.scss')
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(gulp.dest('./dist/sass'))
//         .pipe(browserSync.stream({match: '**/*.css'}));
// })
//
// gulp.task('default', ['serve']);