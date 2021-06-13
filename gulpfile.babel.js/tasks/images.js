import { src, dest } from 'gulp'
import newer from 'gulp-newer'

import paths from '../paths'

const images = () => {
  return src(paths.images.src)
    .pipe(newer(paths.images.dist))
    .pipe(dest(paths.images.dist))
}

module.exports = images