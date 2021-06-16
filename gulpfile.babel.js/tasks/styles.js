import { src, dest, lastRun } from 'gulp'
import sass from 'gulp-dart-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import changed from 'gulp-changed'
import groupMedia from 'gulp-group-css-media-queries'
import rename from 'gulp-rename'
import remember from 'gulp-remember'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'

import paths from '../paths'

const styles = () => {

  const plugins = [
    autoprefixer(),
    cssnano()
  ];

  return src(paths.styles.main, { 
    sourcemaps: true,
    since: lastRun(styles)
  })
    .pipe(plumber())
    .pipe(debug())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(groupMedia())
    .pipe(remember('styles'))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest(paths.styles.dist, { sourcemaps: '.' }))
}

module.exports = styles;