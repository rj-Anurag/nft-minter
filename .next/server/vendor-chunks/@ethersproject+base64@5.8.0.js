"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ethersproject+base64@5.8.0";
exports.ids = ["vendor-chunks/@ethersproject+base64@5.8.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.8.0/node_modules/@ethersproject/base64/lib.esm/base64.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ethersproject+base64@5.8.0/node_modules/@ethersproject/base64/lib.esm/base64.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\n/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/bytes */ \"(ssr)/./node_modules/.pnpm/@ethersproject+bytes@5.8.0/node_modules/@ethersproject/bytes/lib.esm/index.js\");\n\n\nfunction decode(textData) {\n    textData = atob(textData);\n    const data = [];\n    for(let i = 0; i < textData.length; i++){\n        data.push(textData.charCodeAt(i));\n    }\n    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(data);\n}\nfunction encode(data) {\n    data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(data);\n    let textData = \"\";\n    for(let i = 0; i < data.length; i++){\n        textData += String.fromCharCode(data[i]);\n    }\n    return btoa(textData);\n} //# sourceMappingURL=base64.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGV0aGVyc3Byb2plY3QrYmFzZTY0QDUuOC4wL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9iYXNlNjQvbGliLmVzbS9iYXNlNjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDbUM7QUFDekMsU0FBU0MsT0FBT0MsUUFBUTtJQUMzQkEsV0FBV0MsS0FBS0Q7SUFDaEIsTUFBTUUsT0FBTyxFQUFFO0lBQ2YsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILFNBQVNJLE1BQU0sRUFBRUQsSUFBSztRQUN0Q0QsS0FBS0csSUFBSSxDQUFDTCxTQUFTTSxVQUFVLENBQUNIO0lBQ2xDO0lBQ0EsT0FBT0wsOERBQVFBLENBQUNJO0FBQ3BCO0FBQ08sU0FBU0ssT0FBT0wsSUFBSTtJQUN2QkEsT0FBT0osOERBQVFBLENBQUNJO0lBQ2hCLElBQUlGLFdBQVc7SUFDZixJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUQsS0FBS0UsTUFBTSxFQUFFRCxJQUFLO1FBQ2xDSCxZQUFZUSxPQUFPQyxZQUFZLENBQUNQLElBQUksQ0FBQ0MsRUFBRTtJQUMzQztJQUNBLE9BQU9PLEtBQUtWO0FBQ2hCLEVBQ0Esa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZXRoZXJzcHJvamVjdCtiYXNlNjRANS44LjAvbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2Jhc2U2NC9saWIuZXNtL2Jhc2U2NC5qcz83ZWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgYXJyYXlpZnkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUodGV4dERhdGEpIHtcbiAgICB0ZXh0RGF0YSA9IGF0b2IodGV4dERhdGEpO1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGEucHVzaCh0ZXh0RGF0YS5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5aWZ5KGRhdGEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGFycmF5aWZ5KGRhdGEpO1xuICAgIGxldCB0ZXh0RGF0YSA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRleHREYXRhICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBidG9hKHRleHREYXRhKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NC5qcy5tYXAiXSwibmFtZXMiOlsiYXJyYXlpZnkiLCJkZWNvZGUiLCJ0ZXh0RGF0YSIsImF0b2IiLCJkYXRhIiwiaSIsImxlbmd0aCIsInB1c2giLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ethersproject+base64@5.8.0/node_modules/@ethersproject/base64/lib.esm/base64.js\n");

/***/ })

};
;