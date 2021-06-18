export const src = './src'
export const dist = './dist'

module.exports = {
  styles: {
    main: src + '/styles/**/main.scss',
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
    css: dist + '/styles/**/*.css',
    scss: src + '/styles/**/*.scss',
    html: src + '/**/*.html',
    js: src + '/js/**/*.js',
    img: src + '/img/**/*.{jpg,png,gif,webp,svg}',
    video: src + '/video/**/*.mp4',
  },

  fonts: {
    src: src + '/fonts/**/*.{ttf,woff,woff2}',
    dist: dist + '/fonts',
  },

  images: {
    src: src + '/img/**/*.{jpg,png,webp,gif,mp4}',
    favicons: src + '/img/faicons/*.png',
    dist: dist + '/img'
  },

  video: {
    src: src + '/video/**/*.mp4',
    dist: dist + '/video/'
  }
}