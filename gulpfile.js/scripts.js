const { src, dest } = require('gulp');
const pkg = require('../package.json');

function scripts(cb) {
  src(pkg.paths.scripts.src).pipe(dest('build/js'));
  cb();
}

exports.scripts = scripts;
