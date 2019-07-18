const { src, dest, series, parallel } = require('gulp');

const htmlclean = require('gulp-htmlclean');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const gulpif = require('gulp-if');

const devBuild = process.env.NODE_ENV !== 'production';
const pkg = require('../package.json');
const { arg } = require('./utils');

// Nunjucks/HTML processing
function nunjucks (cb) {
  src('./src/pages/**/*.+(html|njk)')
    .pipe(
      gulpif(
        !devBuild,
        htmlclean()
      )
    )
    // .pipe($.newer('./build'));
    .pipe(plumber())
    // Renders template with nunjucks
    .pipe(
      nunjucksRender({
        ext: '.html',
        path: 'src/templates'
      })
    )
    .pipe(dest('build/'));

  cb();
}

// Nunjucks/HTML processing
// function njk (cb) {
//   var page = src('./src/pages/about.njk');
//   // .pipe($.newer('./build'));

//   // Gets .html and .nunjucks files in pages
//   // page.pipe($.plumber())
//   // Renders template with nunjucks
//   page.pipe(
//     $.nunjucks_gulp.compile(
//       {},
//       {
//         env: new nunjucks_lib.Environment(
//           new nunjucks_lib.FileSystemLoader('templates'),
//           { autoescape: false }
//         )
//       }
//     )
//   );

//   // output files in app folder
//   page.pipe(dest('build/'));

//   cb();
// }

exports.build = nunjucks;
