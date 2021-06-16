import { watch } from 'gulp'
import path from 'path'

import browserSync from 'browser-sync'
const bs = browserSync.create();

import paths from '../paths'

import views from './views'
import styles from './styles'
import scripts from './scripts'
import images from './images'
import video from './video'
import remember from 'gulp-remember';

const serve = () => {
  bs.init({
    server: {
      baseDir: './dist'
    },
    notify: false,
    open: false
  });
  
  watch(paths.watch.html, views).on('change', bs.reload)
  watch(paths.watch.scss, styles).on('change', bs.reload).on('unlink', function(filepath) {
    remember.forget('styles', path.resolve(filepath))
  });
  watch(paths.watch.js, scripts).on('change', bs.reload)
  watch(paths.watch.img, images).on('change', bs.reload)
  watch(paths.watch.video, video).on('change', bs.reload)

}

module.exports = serve;