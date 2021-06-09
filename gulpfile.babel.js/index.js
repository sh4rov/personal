import { series, parallel } from 'gulp'

import styles from './tasks/styles'
import views from './tasks/views'
import clean from './tasks/clean'
import serve from './tasks/serve'
import scripts from './tasks/scripts'
import deploy from './tasks/deploy'

export { styles, views, scripts, clean, serve, deploy }

export const dev = series(clean, views, styles, scripts, serve)

export default dev