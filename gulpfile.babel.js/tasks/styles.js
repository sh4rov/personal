import { src, dest } from 'gulp'
import sass from 'gulp-dart-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import changed from 'gulp-changed'
import groupMedia from 'gulp-group-css-media-queries'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'

import paths from '../paths'

const styles = () => {

  let plugins = [
    autoprefixer(),
    cssnano()
  ];

  return src(paths.styles.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(debug())
    .pipe(
      changed(paths.dist + '/**/*.css', {
        extention: '.css',
      })
    )
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(groupMedia())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest(paths.styles.dist, { sourcemaps: '.' }))
}

module.exports = styles;