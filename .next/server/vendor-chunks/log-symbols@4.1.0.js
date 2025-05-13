"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/log-symbols@4.1.0";
exports.ids = ["vendor-chunks/log-symbols@4.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/log-symbols@4.1.0/node_modules/log-symbols/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/log-symbols@4.1.0/node_modules/log-symbols/index.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst chalk = __webpack_require__(/*! chalk */ \"(ssr)/./node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js\");\nconst isUnicodeSupported = __webpack_require__(/*! is-unicode-supported */ \"(ssr)/./node_modules/.pnpm/is-unicode-supported@0.1.0/node_modules/is-unicode-supported/index.js\");\nconst main = {\n    info: chalk.blue(\"ℹ\"),\n    success: chalk.green(\"✔\"),\n    warning: chalk.yellow(\"⚠\"),\n    error: chalk.red(\"✖\")\n};\nconst fallback = {\n    info: chalk.blue(\"i\"),\n    success: chalk.green(\"√\"),\n    warning: chalk.yellow(\"‼\"),\n    error: chalk.red(\"\\xd7\")\n};\nmodule.exports = isUnicodeSupported() ? main : fallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbG9nLXN5bWJvbHNANC4xLjAvbm9kZV9tb2R1bGVzL2xvZy1zeW1ib2xzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsUUFBUUMsbUJBQU9BLENBQUM7QUFDdEIsTUFBTUMscUJBQXFCRCxtQkFBT0EsQ0FBQztBQUVuQyxNQUFNRSxPQUFPO0lBQ1pDLE1BQU1KLE1BQU1LLElBQUksQ0FBQztJQUNqQkMsU0FBU04sTUFBTU8sS0FBSyxDQUFDO0lBQ3JCQyxTQUFTUixNQUFNUyxNQUFNLENBQUM7SUFDdEJDLE9BQU9WLE1BQU1XLEdBQUcsQ0FBQztBQUNsQjtBQUVBLE1BQU1DLFdBQVc7SUFDaEJSLE1BQU1KLE1BQU1LLElBQUksQ0FBQztJQUNqQkMsU0FBU04sTUFBTU8sS0FBSyxDQUFDO0lBQ3JCQyxTQUFTUixNQUFNUyxNQUFNLENBQUM7SUFDdEJDLE9BQU9WLE1BQU1XLEdBQUcsQ0FBQztBQUNsQjtBQUVBRSxPQUFPQyxPQUFPLEdBQUdaLHVCQUF1QkMsT0FBT1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZy1zeW1ib2xzQDQuMS4wL25vZGVfbW9kdWxlcy9sb2ctc3ltYm9scy9pbmRleC5qcz9kODgyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGlzVW5pY29kZVN1cHBvcnRlZCA9IHJlcXVpcmUoJ2lzLXVuaWNvZGUtc3VwcG9ydGVkJyk7XG5cbmNvbnN0IG1haW4gPSB7XG5cdGluZm86IGNoYWxrLmJsdWUoJ+KEuScpLFxuXHRzdWNjZXNzOiBjaGFsay5ncmVlbign4pyUJyksXG5cdHdhcm5pbmc6IGNoYWxrLnllbGxvdygn4pqgJyksXG5cdGVycm9yOiBjaGFsay5yZWQoJ+KclicpXG59O1xuXG5jb25zdCBmYWxsYmFjayA9IHtcblx0aW5mbzogY2hhbGsuYmx1ZSgnaScpLFxuXHRzdWNjZXNzOiBjaGFsay5ncmVlbign4oiaJyksXG5cdHdhcm5pbmc6IGNoYWxrLnllbGxvdygn4oC8JyksXG5cdGVycm9yOiBjaGFsay5yZWQoJ8OXJylcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmljb2RlU3VwcG9ydGVkKCkgPyBtYWluIDogZmFsbGJhY2s7XG4iXSwibmFtZXMiOlsiY2hhbGsiLCJyZXF1aXJlIiwiaXNVbmljb2RlU3VwcG9ydGVkIiwibWFpbiIsImluZm8iLCJibHVlIiwic3VjY2VzcyIsImdyZWVuIiwid2FybmluZyIsInllbGxvdyIsImVycm9yIiwicmVkIiwiZmFsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/log-symbols@4.1.0/node_modules/log-symbols/index.js\n");

/***/ })

};
;