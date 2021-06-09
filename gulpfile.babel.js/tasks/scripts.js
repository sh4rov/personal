import { src, dest } from 'gulp'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import eslint from 'gulp-eslint'
import terser from 'gulp-terser'

import paths from '../paths'

const scripts = () => {
  return src(paths.scripts.src, { sourcemaps: 'true' })
    .pipe(plumber())
    .pipe(debug())
    .pipe(babel({
       presets: ['@babel/env']
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(dest(paths.scripts.dist))
    .pipe(terser())
    .pipe(concat('main.min.js'))
    .pipe(dest(paths.scripts.dist), {
      sourcemaps: '.'
    })
}

module.exports = scripts;