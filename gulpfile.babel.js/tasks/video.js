import { src, dest } from 'gulp'
import newer from 'gulp-newer'

import paths from '../paths'

const video = () => {
  return src(paths.video.src)
    .pipe(newer(paths.video.dist))
    .pipe(dest(paths.video.dist))
}

module.exports = video