var gulp = require('gulp')
var sass = require('gulp-sass')
var reveasy = require('gulp-rev-easy')
var htmlmin = require('gulp-htmlmin')
var path = require('path')

gulp.task('greetings-sass', function(){

  return gulp.src('../src/public/greetings/style/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('../build/public/greetings/app'))

})

gulp.task("greetings-html", ()=>{

  return gulp.src('../src/public/greetings/**/*.html')
    .pipe(gulp.dest('../build/public/greetings'))

})
gulp.task("greetings-images", ()=>{

  return gulp.src('../src/public/greetings/images/**/*')
    .pipe(gulp.dest('../build/public/greetings/images'))

})






gulp.task('family-tree-copyhtml', function(){
  return gulp.src('../src/public/family-tree/index.html')
    .pipe(gulp.dest('../build/public/icarehtml/family-tree'))
})

gulp.task('family-tree-rev', ['family-tree-copyhtml'], function(){
  return gulp.src('../build/public/icarehtml/family-tree/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(reveasy({base: path.join(process.cwd(), '../build/public')}))
    .pipe(gulp.dest('../build/public/icarehtml/family-tree'))
})





gulp.task('album-copyhtml', function(){
  return gulp.src('src/public/album/index.html')
    .pipe(gulp.dest('build/public/icarehtml/album'))
})

gulp.task('album-rev', ['album-copyhtml'], function(){
  return gulp.src('build/public/icarehtml/album/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(reveasy({base: path.join(process.cwd(), '../build/public')}))
    .pipe(gulp.dest('build/public/icarehtml/album'))
})

gulp.task('greetings', ['greetings-html', 'greetings-images', 'greetings-sass'])
gulp.task('family-tree', ['family-tree-rev'])