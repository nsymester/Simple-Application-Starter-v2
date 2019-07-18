const { src, dest, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const isWin = process.platform === "win32";

/**
 * @desc browserSync, start the server
 * @param {function} cb Callback function
 */
function fBrowserSync(cb) {
  // check for operating system
  //  - for WINDOWS 10 use "Chrome"
  //  - for MAC OS X use "Google Chrome"
  const browser = isWin ? "Chrome" : "Google Chrome";
  browserSync.init({
    server: {
      baseDir: "build/",
      directory: false
    },
    browser: browser,
    open: true
  });

  // cb();
}

function reload(cb) {
  browserSync.reload();
  cb();
}

exports.server = fBrowserSync;
exports.reload = reload;
