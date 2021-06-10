import { series, parallel } from 'gulp'

import styles from './tasks/styles'
import views from './tasks/views'
import clean from './tasks/clean'
import serve from './tasks/serve'
import scripts from './tasks/scripts'
import fonts from './tasks/fonts'
import deploy from './tasks/deploy'

export {
  styles,
  views,
  scripts,
  clean,
  serve,
  deploy,
  fonts
}

export const dev = series(
  clean,
  parallel(
    styles,
    views,
    scripts,
    fonts,
  ),
  serve
)

export default dev