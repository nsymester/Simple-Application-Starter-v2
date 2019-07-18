const { src, dest } = require("gulp");
const pkg = require("../package.json");

function html(cb) {
  src(pkg.paths.html.src).pipe(dest("build/"));
  cb();
}

exports.html = html;
