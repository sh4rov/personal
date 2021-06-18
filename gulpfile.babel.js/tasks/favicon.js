import { src, dest } from 'gulp'
import debug from 'gulp-debug'
import favicons from 'gulp-favicons'

import paths from '../paths'

const favicon = () => {
  return src(paths.images.favicons)
  .pipe(debug({
    title: 'src'
  }))
  .pipe(
    favicons({
      appName: 'My App',
      appShortName: 'App',
      appDescription: 'This is my application',
      developerName: 'Anatoly Sharov',
      developerURL: 'http://trololo.com/',
      background: '#020307',
      path: 'favicons/',
      url: 'http://trololo.com/',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/?homescreen=1',
      version: 1.0,
      logging: false,
      html: 'index.html',
      pipeHTML: true,
      replace: true,
    })
  )
  .pipe(dest('./dist'));
}

module.exports = favicon