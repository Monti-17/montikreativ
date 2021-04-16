
const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');


const paths = {
    'styles': {
        'base': 'app/scss/',
        'src': 'app/scss/style.sass',
        'dest': 'app/css/',
        'watch': 'app/scss/**/*.+(sass|scss)',
    },
    'scripts': {
        'base': 'app/js/',
        'src': 'app/js/**/*.js',
        'dest': 'app/js/',
        'watch': 'app/js/**/*.js',
    },
};

const styles = function () {
    const plugins = [
        autoprefixer(),
    ];

    return gulp.src(
        paths.styles.src,
        {
            'base': paths.styles.base,
        }
    ).
        pipe(sass().on(
            'error',
            sass.logError
        )).
        pipe(rename({
            'basename': 'styles',
            'suffix': '.min',
        })).
        pipe(gulp.dest(paths.styles.dest));
};

const scripts = function () {
    return gulp.src(
        paths.scripts.src,
        {
            'base': paths.scripts.base,
        }
    ).
        pipe(rename({
            'suffix': '.min',
        })).
        pipe(gulp.dest(paths.scripts.dest));
};

const watch = function () {
    gulp.watch(
        paths.scripts.watch,
        scripts
    );
    gulp.watch(
        paths.styles.watch,
        styles
    );
};

const build = gulp.parallel(
    styles,
    scripts,
    gulp.series(watch)
);

exports.default = build;
