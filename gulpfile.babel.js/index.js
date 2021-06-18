import { series, parallel } from 'gulp'

import styles from './tasks/styles'
import views from './tasks/views'
import clean from './tasks/clean'
import serve from './tasks/serve'
import scripts from './tasks/scripts'
import fonts from './tasks/fonts'
import deploy from './tasks/deploy'
import images from './tasks/images'
import video from './tasks/video'
import favicon from './tasks/favicon'

export {
  styles,
  views,
  scripts,
  clean,
  serve,
  deploy,
  fonts,
  images,
  video,
  favicon
}

export const staticFiles = parallel(
  styles,
  views,
  scripts,
  fonts,
  images,
  video
)

export const dev = series(staticFiles, serve)
export const build = series(clean, staticFiles)
export default dev