var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoPrefixer = require("gulp-autoprefixer"),
    cssMin = require("gulp-cssmin"),
    sourceMaps = require("gulp-sourcemaps");

gulp.task("css", function(done) {
    //Compile sass
    //Output file to a dist folder
    gulp.src(["./src/scss/main.scss"])
    .pipe(sourceMaps.init())
    .pipe(sass().on("error",sass.logError))
    .pipe(cssMin())
    .pipe(autoPrefixer())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("./dist/css"));
    done();
});

gulp.task("default", async function() {
    console.log("Look at the gulp console");
});