var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    browserSync = require("browser-sync").create();

gulp.task("css", done => {
    //Compile sass
    //Output file to a dist folder
    gulp.src(["./src/scss/main.scss"])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on("error",plugins.sass.logError))
    .pipe(plugins.cssmin())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
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
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
    done();
});

gulp.task("watch", function(done) {
    gulp.watch('./src/scss/*.scss',gulp.series('css'));
    gulp.watch('./src/js/*.js',gulp.series('js'));
    done();
});

gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", browserSync.reload);
})

gulp.task("default", gulp.series('css','js','watch','serve'));