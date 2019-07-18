const { src, dest, series, parallel } = require("gulp");

const babelify = require("babelify");
const browserify = require("browserify");
const watchify = require("watchify");
const uglifyify = require("uglifyify");
const buffer = require("vinyl-buffer");
const es = require("event-stream");
const source = require("vinyl-source-stream");
const rename = require("gulp-rename");
const log = require("fancy-log");
const del = require("del");

let isWatching = false;
const devBuild = process.env.NODE_ENV !== "production";
if (devBuild) {
  isWatching = true;
}
/**
 * @desc bundles js into multiple files and watches for changes
 * @param {function} cb Callback function
 */
function js(cb) {
  const files = ["./src/scripts/index.js", "./src/scripts/product.js"];

  // start fresh
  del.sync(["./scripts/product.bundle.js", "./scripts/index.bundle.js"]);

  const tasks = files.map(function(entry) {
    let bundler = null;

    if (devBuild) {
      bundler = browserify({
        entries: entry, // Entry point
        debug: true // Output sourcemaps
      }).transform(babelify, {
        presets: ["@babel/preset-env"]
      });
    } else {
      bundler = browserify({
        entries: entry, // Entry point
        debug: true // Output sourcemaps
      })
        .transform(babelify, {
          presets: ["@babel/preset-env"]
        })
        .transform(uglifyify, { global: true });
    }

    const bundle = function() {
      return (
        bundler
          .bundle() // Start bundle
          .on("error", function(err) {
            // print the error (can replace with gulp-util)
            log.error(err.message);
            // end this stream
            this.emit("end");
          })
          .pipe(source(entry))
          .pipe(buffer())
          // rename them to have "bundle as postfix"
          .pipe(
            rename({
              dirname: "", // don't include full path
              extname: ".bundle.js" // Output file
            })
          )
          .pipe(dest("scripts")) // Output path
      );
    };

    if (isWatching) {
      bundler = watchify(bundler);
      bundler.on("update", bundle);
    }

    return bundle();
  });

  // create a merged stream
  es.merge(tasks).on("end", cb);
}

exports.browserify = js;
