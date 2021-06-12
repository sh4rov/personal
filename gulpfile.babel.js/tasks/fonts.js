import { src, dest } from 'gulp'
import debug from 'gulp-debug'
import plumber from 'gulp-plumber'
import newer from 'gulp-newer'

import paths from '../paths'

const fonts = () => {
  return src(paths.fonts.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(newer(paths.fonts.dist))
    .pipe(dest(paths.fonts.dist))
}

module.exports = fonts