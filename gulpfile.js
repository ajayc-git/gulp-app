var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")();

gulp.task("css", done => {
    //Compile sass
    //Output file to a dist folder
    gulp.src(["./src/scss/main.scss"])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on("error",plugins.sass.logError))
    .pipe(plugins.cssmin())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest("./dist/css"));
    done();
});

gulp.task("default", async function() {
    console.log("Look at the gulp console");
});