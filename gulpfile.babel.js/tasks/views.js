import { src, dest, lastRun } from 'gulp'
import fileinclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'

import paths from '../paths'
import remember from 'gulp-remember'

const views = () => {
  return src(paths.views.src, {
    sience: lastRun(views)
  })
    .pipe(plumber())
    .pipe(remember('views'))
    .pipe(debug(src))
    .pipe(fileinclude({
      prefix: '@@',
    }))
    .pipe(dest(paths.views.dist))
}

module.exports = views;