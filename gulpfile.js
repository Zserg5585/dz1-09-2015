var gulp = require("gulp"),
    browserSync = require('browser-sync');

//Сервер
gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

//Слушатель изменений в файлах
gulp.task('watch', function() {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);