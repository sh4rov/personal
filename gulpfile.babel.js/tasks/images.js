import { src, dest } from 'gulp'

import paths from '../paths'

const images = () => {
  return src(paths.images.src)
    .pipe(dest(paths.images.dist))
}

module.exports = images