"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nglobalThis[\"__sentryRewritesTunnelPath__\"] = undefined;\nglobalThis[\"SENTRY_RELEASE\"] = undefined;\nglobalThis[\"__sentryBasePath\"] = undefined;\nglobalThis[\"__rewriteFramesDistDir__\"] = \".next\";\nasync function register() {\n    if (true) {\n        await __webpack_require__.e(/*! import() */ \"sentry_server_config_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./sentry.server.config */ \"./sentry.server.config.ts\"));\n    }\n    if (false) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnN0cnVtZW50YXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBQSxVQUFVLENBQUMsK0JBQStCLEdBQUdDO0FBQzdDRCxVQUFVLENBQUMsaUJBQWlCLEdBQUdDO0FBQy9CRCxVQUFVLENBQUMsbUJBQW1CLEdBQUdDO0FBQ2pDRCxVQUFVLENBQUMsMkJBQTJCLEdBQUc7QUFDbEMsZUFBZUU7SUFDcEIsSUFBSUMsSUFBNkIsRUFBVTtRQUN6QyxNQUFNLCtLQUFPO0lBQ2Y7SUFFQSxJQUFJQSxLQUE2QixFQUFRLEVBRXhDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9pbnN0cnVtZW50YXRpb24udHM/ZDdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJnbG9iYWxUaGlzW1wiX19zZW50cnlSZXdyaXRlc1R1bm5lbFBhdGhfX1wiXSA9IHVuZGVmaW5lZDtcbmdsb2JhbFRoaXNbXCJTRU5UUllfUkVMRUFTRVwiXSA9IHVuZGVmaW5lZDtcbmdsb2JhbFRoaXNbXCJfX3NlbnRyeUJhc2VQYXRoXCJdID0gdW5kZWZpbmVkO1xuZ2xvYmFsVGhpc1tcIl9fcmV3cml0ZUZyYW1lc0Rpc3REaXJfX1wiXSA9IFwiLm5leHRcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ25vZGVqcycpIHtcbiAgICBhd2FpdCBpbXBvcnQoJy4vc2VudHJ5LnNlcnZlci5jb25maWcnKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09ICdlZGdlJykge1xuICAgIGF3YWl0IGltcG9ydCgnLi9zZW50cnkuZWRnZS5jb25maWcnKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1JVTlRJTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./instrumentation.ts\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./instrumentation.ts"));
module.exports = __webpack_exports__;

})();