"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cross-fetch@3.2.0";
exports.ids = ["vendor-chunks/cross-fetch@3.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/cross-fetch@3.2.0/node_modules/cross-fetch/dist/node-ponyfill.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/cross-fetch@3.2.0/node_modules/cross-fetch/dist/node-ponyfill.js ***!
  \*********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nconst nodeFetch = __webpack_require__(/*! node-fetch */ \"(ssr)/./node_modules/.pnpm/node-fetch@2.7.0/node_modules/node-fetch/lib/index.mjs\");\nconst realFetch = nodeFetch.default || nodeFetch;\nconst fetch = function(url, options) {\n    // Support schemaless URIs on the server for parity with the browser.\n    // Ex: //github.com/ -> https://github.com/\n    if (/^\\/\\//.test(url)) {\n        url = \"https:\" + url;\n    }\n    return realFetch.call(this, url, options);\n};\nfetch.ponyfill = true;\nmodule.exports = exports = fetch;\nexports.fetch = fetch;\nexports.Headers = nodeFetch.Headers;\nexports.Request = nodeFetch.Request;\nexports.Response = nodeFetch.Response;\n// Needed for TypeScript consumers without esModuleInterop.\nexports[\"default\"] = fetch;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY3Jvc3MtZmV0Y2hAMy4yLjAvbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb255ZmlsbC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFBWUMsbUJBQU9BLENBQUM7QUFDMUIsTUFBTUMsWUFBWUYsVUFBVUcsT0FBTyxJQUFJSDtBQUV2QyxNQUFNSSxRQUFRLFNBQVVDLEdBQUcsRUFBRUMsT0FBTztJQUNsQyxxRUFBcUU7SUFDckUsMkNBQTJDO0lBQzNDLElBQUksUUFBUUMsSUFBSSxDQUFDRixNQUFNO1FBQ3JCQSxNQUFNLFdBQVdBO0lBQ25CO0lBQ0EsT0FBT0gsVUFBVU0sSUFBSSxDQUFDLElBQUksRUFBRUgsS0FBS0M7QUFDbkM7QUFFQUYsTUFBTUssUUFBUSxHQUFHO0FBRWpCQyxPQUFPQyxPQUFPLEdBQUdBLFVBQVVQO0FBQzNCTyxhQUFhLEdBQUdQO0FBQ2hCTyxlQUFlLEdBQUdYLFVBQVVZLE9BQU87QUFDbkNELGVBQWUsR0FBR1gsVUFBVWEsT0FBTztBQUNuQ0YsZ0JBQWdCLEdBQUdYLFVBQVVjLFFBQVE7QUFFckMsMkRBQTJEO0FBQzNESCxrQkFBZSxHQUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvLnBucG0vY3Jvc3MtZmV0Y2hAMy4yLjAvbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb255ZmlsbC5qcz8wNDFjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVGZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxuY29uc3QgcmVhbEZldGNoID0gbm9kZUZldGNoLmRlZmF1bHQgfHwgbm9kZUZldGNoXG5cbmNvbnN0IGZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAvLyBTdXBwb3J0IHNjaGVtYWxlc3MgVVJJcyBvbiB0aGUgc2VydmVyIGZvciBwYXJpdHkgd2l0aCB0aGUgYnJvd3Nlci5cbiAgLy8gRXg6IC8vZ2l0aHViLmNvbS8gLT4gaHR0cHM6Ly9naXRodWIuY29tL1xuICBpZiAoL15cXC9cXC8vLnRlc3QodXJsKSkge1xuICAgIHVybCA9ICdodHRwczonICsgdXJsXG4gIH1cbiAgcmV0dXJuIHJlYWxGZXRjaC5jYWxsKHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxuZmV0Y2gucG9ueWZpbGwgPSB0cnVlXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZldGNoXG5leHBvcnRzLmZldGNoID0gZmV0Y2hcbmV4cG9ydHMuSGVhZGVycyA9IG5vZGVGZXRjaC5IZWFkZXJzXG5leHBvcnRzLlJlcXVlc3QgPSBub2RlRmV0Y2guUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IG5vZGVGZXRjaC5SZXNwb25zZVxuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgY29uc3VtZXJzIHdpdGhvdXQgZXNNb2R1bGVJbnRlcm9wLlxuZXhwb3J0cy5kZWZhdWx0ID0gZmV0Y2hcbiJdLCJuYW1lcyI6WyJub2RlRmV0Y2giLCJyZXF1aXJlIiwicmVhbEZldGNoIiwiZGVmYXVsdCIsImZldGNoIiwidXJsIiwib3B0aW9ucyIsInRlc3QiLCJjYWxsIiwicG9ueWZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiSGVhZGVycyIsIlJlcXVlc3QiLCJSZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/cross-fetch@3.2.0/node_modules/cross-fetch/dist/node-ponyfill.js\n");

/***/ })

};
;