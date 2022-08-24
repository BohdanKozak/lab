const {src, dest, watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();

const htmlmin = require("gulp-htmlmin");
function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.css ');
    gulp.watch('./*.html' ).on('change', browserSync.reload);
    gulp.watch('./js/**/*.js ').on('change', browserSync.reload);
}
const {series} = require("gulp");
const test = cb =>{
    console.log("test message");
    cb();
}
exports.default = series(test)
exports.watch = watch;