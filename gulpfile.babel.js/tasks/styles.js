import { src, dest } from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'

import paths from '../paths'

const styles = () => {
  return src(paths.styles.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(debug())
    .pipe(sass())
    .pipe(dest(paths.styles.dist, { sourcemaps: '.' }))
}

module.exports = styles;