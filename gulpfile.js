"use strict";
// Gulp and plugins
const gulp = require("gulp"),
  gap = require("gulp-append-prepend"),
  product_name = "Muse Vue Ant Design",
  product_version = "1.0.0",
  year = "2021",
  product_link = "https://www.creative-tim.com/product/muse-vue-ant-design",
  product_copyright_template =
    `/*!
  ​
  =========================================================
  * ` +
    product_name +
    ` - v` +
    product_version +
    `
  =========================================================

  * Product Page: ` +
    product_link +
    `
  * Copyright ` +
    year +
    ` Creative Tim (https://www.creative-tim.com)
  * MIT License

  * Coded by Creative Tim

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    ​
  */`;

gulp.task("licenses", async function() {
  // this is to add Creative Tim licenses in the production & dev mode for the minified js
  gulp
    .src(["dist/js/chunk-vendors*.js", "dist/js/app*.js"], { base: "./" })
    .pipe(gap.prependText(product_copyright_template))
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production & dev mode for the minified html
  gulp
    .src("dist/index.html", { base: "./" })
    .pipe(gap.prependText(product_copyright_template))
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production & dev mode for the minified css
  gulp
    .src(["dist/css/chunk-vendors*.css", "dist/app*.css"], { base: "./" })
    .pipe(gap.prependText(product_copyright_template))
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
