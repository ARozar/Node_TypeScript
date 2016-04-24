var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    del = require('del');





var project = typescript.createProject('./server/tsconfig.json');

var typescriptSourceFiles =
    [
        'server/**/*.ts',
        "!server/typings/browser.d.ts",
        "!server/typings/browser/**/*.ts"
    ];

gulp.task('compile', function () {
    gulp.src(typescriptSourceFiles)
        .pipe(typescript(project))
        .pipe(gulp.dest('./dist'))
});

gulp.task('clean', function(){
    return  del(['./dist']);
});

gulp.task('watch', function(){
    gulp.watch(typescriptSourceFiles,['compile']);
});