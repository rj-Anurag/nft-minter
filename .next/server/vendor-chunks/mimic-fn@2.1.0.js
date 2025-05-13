"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mimic-fn@2.1.0";
exports.ids = ["vendor-chunks/mimic-fn@2.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\nconst mimicFn = (to, from)=>{\n    for (const prop of Reflect.ownKeys(from)){\n        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));\n    }\n    return to;\n};\nmodule.exports = mimicFn;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = mimicFn;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbWltaWMtZm5AMi4xLjAvbm9kZV9tb2R1bGVzL21pbWljLWZuL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsVUFBVSxDQUFDQyxJQUFJQztJQUNwQixLQUFLLE1BQU1DLFFBQVFDLFFBQVFDLE9BQU8sQ0FBQ0gsTUFBTztRQUN6Q0ksT0FBT0MsY0FBYyxDQUFDTixJQUFJRSxNQUFNRyxPQUFPRSx3QkFBd0IsQ0FBQ04sTUFBTUM7SUFDdkU7SUFFQSxPQUFPRjtBQUNSO0FBRUFRLE9BQU9DLE9BQU8sR0FBR1Y7QUFDakIsK0NBQStDO0FBQy9DUyx5QkFBc0IsR0FBR1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL21pbWljLWZuQDIuMS4wL25vZGVfbW9kdWxlcy9taW1pYy1mbi9pbmRleC5qcz8yMzI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWltaWNGbiA9ICh0bywgZnJvbSkgPT4ge1xuXHRmb3IgKGNvbnN0IHByb3Agb2YgUmVmbGVjdC5vd25LZXlzKGZyb20pKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZyb20sIHByb3ApKTtcblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWltaWNGbjtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbWltaWNGbjtcbiJdLCJuYW1lcyI6WyJtaW1pY0ZuIiwidG8iLCJmcm9tIiwicHJvcCIsIlJlZmxlY3QiLCJvd25LZXlzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/mimic-fn@2.1.0/node_modules/mimic-fn/index.js\n");

/***/ })

};
;