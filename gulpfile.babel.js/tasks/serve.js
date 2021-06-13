import { watch } from 'gulp'

import browserSync from 'browser-sync';
const bs = browserSync.create();

import paths from '../paths'

import views from './views'
import styles from './styles'
import scripts from './scripts'
import images from './images'

const serve = () => {
  bs.init({
    server: {
      baseDir: './dist'
    },
    notify: false,
    open: false
  });
  
  watch(paths.watch.html, views).on('change', bs.reload)
  watch(paths.watch.scss, styles).on('change', bs.reload)
  watch(paths.watch.js, scripts).on('change', bs.reload)
  watch(paths.watch.img, images).on('change', bs.reload)

}

module.exports = serve;