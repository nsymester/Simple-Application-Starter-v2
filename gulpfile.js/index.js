/**
 * @desc this task runner will concatenate and minifiy the application's scripts and styles
 * @author Neil Symester neil.symester@siteofdreams.co.uk
 * @todo gulp --help
 */

const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const { html } = require('./html');
const { nunjucks } = require('./nunjucks');
const { css, analyse } = require('./styles');
const { scripts } = require('./scripts');
const { browserify } = require('./browserify');
const { metrics } = require('./metrics');
const { server, reload } = require('./server');
const pkg = require('../package.json');

const isWin = process.platform === 'win32';
const browser = isWin ? 'Chrome' : 'Google Chrome';
// const devBuild = process.env.NODE_ENV !== "production";

exports.html = html;
exports.css = css;
exports.cssAnalyse = analyse;
exports.scripts = scripts;
exports.metrics = metrics;

exports.build = parallel(css, scripts, server);
exports.server = server;
exports.nunjucks = nunjucks;

/**
 * @desc watch multiple files
 */
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: 'build/',
      directory: false
    },
    browser: browser,
    open: true
  });
  watch(pkg.paths.stylesheets.src, series(css)).on(
    'change',
    browserSync.reload
  );
  watch(pkg.paths.scripts.src, series(scripts)).on(
    'change',
    browserSync.reload
  );
  watch(pkg.paths.html.src, series(html)).on('change', browserSync.reload);
}

exports.dev = watchFiles;

exports.default = () => {
  watchFiles();
};
