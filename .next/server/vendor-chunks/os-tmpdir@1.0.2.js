"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/os-tmpdir@1.0.2";
exports.ids = ["vendor-chunks/os-tmpdir@1.0.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/os-tmpdir@1.0.2/node_modules/os-tmpdir/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/os-tmpdir@1.0.2/node_modules/os-tmpdir/index.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\nvar isWindows = process.platform === \"win32\";\nvar trailingSlashRe = isWindows ? /[^:]\\\\$/ : /.\\/$/;\n// https://github.com/nodejs/node/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43\nmodule.exports = function() {\n    var path;\n    if (isWindows) {\n        path = process.env.TEMP || process.env.TMP || (process.env.SystemRoot || process.env.windir) + \"\\\\temp\";\n    } else {\n        path = process.env.TMPDIR || process.env.TMP || process.env.TEMP || \"/tmp\";\n    }\n    if (trailingSlashRe.test(path)) {\n        path = path.slice(0, -1);\n    }\n    return path;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vb3MtdG1wZGlyQDEuMC4yL25vZGVfbW9kdWxlcy9vcy10bXBkaXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxZQUFZQyxRQUFRQyxRQUFRLEtBQUs7QUFDckMsSUFBSUMsa0JBQWtCSCxZQUFZLFlBQVk7QUFFOUMsaUdBQWlHO0FBQ2pHSSxPQUFPQyxPQUFPLEdBQUc7SUFDaEIsSUFBSUM7SUFFSixJQUFJTixXQUFXO1FBQ2RNLE9BQU9MLFFBQVFNLEdBQUcsQ0FBQ0MsSUFBSSxJQUN0QlAsUUFBUU0sR0FBRyxDQUFDRSxHQUFHLElBQ2YsQ0FBQ1IsUUFBUU0sR0FBRyxDQUFDRyxVQUFVLElBQUlULFFBQVFNLEdBQUcsQ0FBQ0ksTUFBTSxJQUFJO0lBQ25ELE9BQU87UUFDTkwsT0FBT0wsUUFBUU0sR0FBRyxDQUFDSyxNQUFNLElBQ3hCWCxRQUFRTSxHQUFHLENBQUNFLEdBQUcsSUFDZlIsUUFBUU0sR0FBRyxDQUFDQyxJQUFJLElBQ2hCO0lBQ0Y7SUFFQSxJQUFJTCxnQkFBZ0JVLElBQUksQ0FBQ1AsT0FBTztRQUMvQkEsT0FBT0EsS0FBS1EsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QjtJQUVBLE9BQU9SO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL29zLXRtcGRpckAxLjAuMi9ub2RlX21vZHVsZXMvb3MtdG1wZGlyL2luZGV4LmpzP2JjZTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG52YXIgdHJhaWxpbmdTbGFzaFJlID0gaXNXaW5kb3dzID8gL1teOl1cXFxcJC8gOiAvLlxcLyQvO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi8zZTdhMTQzODE0OTdhM2I3M2RkYTY4ZDA1YjUxMzA1NjNjZGFiNDIwL2xpYi9vcy5qcyNMMjUtTDQzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHBhdGg7XG5cblx0aWYgKGlzV2luZG93cykge1xuXHRcdHBhdGggPSBwcm9jZXNzLmVudi5URU1QIHx8XG5cdFx0XHRwcm9jZXNzLmVudi5UTVAgfHxcblx0XHRcdChwcm9jZXNzLmVudi5TeXN0ZW1Sb290IHx8IHByb2Nlc3MuZW52LndpbmRpcikgKyAnXFxcXHRlbXAnO1xuXHR9IGVsc2Uge1xuXHRcdHBhdGggPSBwcm9jZXNzLmVudi5UTVBESVIgfHxcblx0XHRcdHByb2Nlc3MuZW52LlRNUCB8fFxuXHRcdFx0cHJvY2Vzcy5lbnYuVEVNUCB8fFxuXHRcdFx0Jy90bXAnO1xuXHR9XG5cblx0aWYgKHRyYWlsaW5nU2xhc2hSZS50ZXN0KHBhdGgpKSB7XG5cdFx0cGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuXHR9XG5cblx0cmV0dXJuIHBhdGg7XG59O1xuIl0sIm5hbWVzIjpbImlzV2luZG93cyIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsInRyYWlsaW5nU2xhc2hSZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXRoIiwiZW52IiwiVEVNUCIsIlRNUCIsIlN5c3RlbVJvb3QiLCJ3aW5kaXIiLCJUTVBESVIiLCJ0ZXN0Iiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/os-tmpdir@1.0.2/node_modules/os-tmpdir/index.js\n");

/***/ })

};
;