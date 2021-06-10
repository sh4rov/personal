export const src = './src'
export const dist = './dist'

module.exports = {
  styles: {
    src:  src + '/styles/**/*.scss',
    dist: dist + '/css'
  },

  views: {
    src: src + '/**/[^_]*.html',
    dist: dist
  },

  scripts: {
    src: src + '/js/**/*.js',
    dist: dist + '/js'
  },

  watch: {
    css: src + '/styles/**/*.css',
    scss: src + '/styles/**/*.scss',
    html: src + '/**/*.html',
    js: src + '/js/**/*.js',
    img: src + '/img/**/*.{jpg,png,gif,webp,svg}'
  },

  fonts: {
    src: src + '/fonts/**/*.{ttf,woff,woff2}',
    dist: dist + '/fonts',
  },

  images: {
    src: src + '/img/**/*.{jpg,png,webp,gif}',
    dist: dist + '/img/'
  }
}