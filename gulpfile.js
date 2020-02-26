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

//Javascript task
gulp.task("js", function(done) {
    gulp.src([
        "./node_modules/jquery/dist/jquery.min.js",
        "./src/js/user.js",
        "./src/js/admin.js"
    ])
    //.pipe(plugins.babel({
    //    presets: ["es2015"]
    //}))
    .pipe(plugins.concat("scripts.js"))
    .pipe(plugins.uglify())
    .pipe(gulp.dest("./dist/js"));
    done();
});

gulp.task("watch", function() {
    gulp.watch('./src/scss/*.scss',gulp.series('css'));
    gulp.watch('./src/js/*.js',gulp.series('js'));
});

gulp.task("default", gulp.series('css','js','watch'));