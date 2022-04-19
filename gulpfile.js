var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

//Compila scss em css
function style() {
  //Local do scss
  return gulp.src('./sass/app.scss')
  //Compilar Sass
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass,))
  //Destino
  .pipe(gulp.dest('./css'))
}


function defaultTask(cb) {
  gulp.watch('./sass/*.scss', style);
  cb();
}

exports.default = defaultTask