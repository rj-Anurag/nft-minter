"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/setprototypeof@1.2.0";
exports.ids = ["vendor-chunks/setprototypeof@1.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/setprototypeof@1.2.0/node_modules/setprototypeof/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/setprototypeof@1.2.0/node_modules/setprototypeof/index.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("\n/* eslint no-proto: 0 */ module.exports = Object.setPrototypeOf || (({\n    __proto__: []\n}) instanceof Array ? setProtoOf : mixinProperties);\nfunction setProtoOf(obj, proto) {\n    obj.__proto__ = proto;\n    return obj;\n}\nfunction mixinProperties(obj, proto) {\n    for(var prop in proto){\n        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {\n            obj[prop] = proto[prop];\n        }\n    }\n    return obj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc2V0cHJvdG90eXBlb2ZAMS4yLjAvbm9kZV9tb2R1bGVzL3NldHByb3RvdHlwZW9mL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esc0JBQXNCLEdBQ3RCQSxPQUFPQyxPQUFPLEdBQUdDLE9BQU9DLGNBQWMsSUFBSztJQUFFQyxXQUFXLEVBQUU7QUFBQyxjQUFhQyxRQUFRQyxhQUFhQyxlQUFjO0FBRTNHLFNBQVNELFdBQVlFLEdBQUcsRUFBRUMsS0FBSztJQUM3QkQsSUFBSUosU0FBUyxHQUFHSztJQUNoQixPQUFPRDtBQUNUO0FBRUEsU0FBU0QsZ0JBQWlCQyxHQUFHLEVBQUVDLEtBQUs7SUFDbEMsSUFBSyxJQUFJQyxRQUFRRCxNQUFPO1FBQ3RCLElBQUksQ0FBQ1AsT0FBT1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0wsS0FBS0UsT0FBTztZQUNwREYsR0FBRyxDQUFDRSxLQUFLLEdBQUdELEtBQUssQ0FBQ0MsS0FBSztRQUN6QjtJQUNGO0lBQ0EsT0FBT0Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvLnBucG0vc2V0cHJvdG90eXBlb2ZAMS4yLjAvbm9kZV9tb2R1bGVzL3NldHByb3RvdHlwZW9mL2luZGV4LmpzPzFiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4vKiBlc2xpbnQgbm8tcHJvdG86IDAgKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ID8gc2V0UHJvdG9PZiA6IG1peGluUHJvcGVydGllcylcblxuZnVuY3Rpb24gc2V0UHJvdG9PZiAob2JqLCBwcm90bykge1xuICBvYmouX19wcm90b19fID0gcHJvdG9cbiAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBtaXhpblByb3BlcnRpZXMgKG9iaiwgcHJvdG8pIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBwcm90bykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgIG9ialtwcm9wXSA9IHByb3RvW3Byb3BdXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInNldFByb3RvT2YiLCJtaXhpblByb3BlcnRpZXMiLCJvYmoiLCJwcm90byIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/setprototypeof@1.2.0/node_modules/setprototypeof/index.js\n");

/***/ })

};
;