"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-unicode-supported@0.1.0";
exports.ids = ["vendor-chunks/is-unicode-supported@0.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/is-unicode-supported@0.1.0/node_modules/is-unicode-supported/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/is-unicode-supported@0.1.0/node_modules/is-unicode-supported/index.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = ()=>{\n    if (process.platform !== \"win32\") {\n        return true;\n    }\n    return Boolean(process.env.CI) || Boolean(process.env.WT_SESSION) || // Windows Terminal\n    process.env.TERM_PROGRAM === \"vscode\" || process.env.TERM === \"xterm-256color\" || process.env.TERM === \"alacritty\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtdW5pY29kZS1zdXBwb3J0ZWRAMC4xLjAvbm9kZV9tb2R1bGVzL2lzLXVuaWNvZGUtc3VwcG9ydGVkL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBRztJQUNoQixJQUFJQyxRQUFRQyxRQUFRLEtBQUssU0FBUztRQUNqQyxPQUFPO0lBQ1I7SUFFQSxPQUFPQyxRQUFRRixRQUFRRyxHQUFHLENBQUNDLEVBQUUsS0FDNUJGLFFBQVFGLFFBQVFHLEdBQUcsQ0FBQ0UsVUFBVSxLQUFLLG1CQUFtQjtJQUN0REwsUUFBUUcsR0FBRyxDQUFDRyxZQUFZLEtBQUssWUFDN0JOLFFBQVFHLEdBQUcsQ0FBQ0ksSUFBSSxLQUFLLG9CQUNyQlAsUUFBUUcsR0FBRyxDQUFDSSxJQUFJLEtBQUs7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2lzLXVuaWNvZGUtc3VwcG9ydGVkQDAuMS4wL25vZGVfbW9kdWxlcy9pcy11bmljb2RlLXN1cHBvcnRlZC9pbmRleC5qcz80N2NkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gQm9vbGVhbihwcm9jZXNzLmVudi5DSSkgfHxcblx0XHRCb29sZWFuKHByb2Nlc3MuZW52LldUX1NFU1NJT04pIHx8IC8vIFdpbmRvd3MgVGVybWluYWxcblx0XHRwcm9jZXNzLmVudi5URVJNX1BST0dSQU0gPT09ICd2c2NvZGUnIHx8XG5cdFx0cHJvY2Vzcy5lbnYuVEVSTSA9PT0gJ3h0ZXJtLTI1NmNvbG9yJyB8fFxuXHRcdHByb2Nlc3MuZW52LlRFUk0gPT09ICdhbGFjcml0dHknO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicHJvY2VzcyIsInBsYXRmb3JtIiwiQm9vbGVhbiIsImVudiIsIkNJIiwiV1RfU0VTU0lPTiIsIlRFUk1fUFJPR1JBTSIsIlRFUk0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/is-unicode-supported@0.1.0/node_modules/is-unicode-supported/index.js\n");

/***/ })

};
;