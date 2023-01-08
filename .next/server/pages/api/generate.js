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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconfiguration;\nconst basePromptPrefix = `\nList 20 bands from around the world in numeric order that contain the qualities prompted. Add their country of origin related to each band. Referencing music theory in the style of music journalism, explain the musical commonalities of this list starting with \"Analysis:\". If there's a promt that makes no sense, print only the prompt that makes no sense along with \"There may be an error with your prompt\": \n`;\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}\\n`,\n        temperature: 1,\n        max_tokens: 1000\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFDN0JBO0FBQ0EsTUFBTU0sbUJBQW1CLENBQUM7O0FBRTFCLENBQUM7QUFDRCxNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN6QyxtQkFBbUI7SUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRUwsaUJBQWlCLEVBQUVFLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFFM0QsTUFBTUMsaUJBQWlCLE1BQU1ULE9BQU9VLGdCQUFnQixDQUFDO1FBQ25EQyxPQUFPO1FBQ1BDLFFBQVEsQ0FBQyxFQUFFWCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3BESyxhQUFhO1FBQ2JDLFlBQVk7SUFDZDtJQUVBLE1BQU1DLG1CQUFtQk4sZUFBZU8sSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUc7SUFFeERkLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUU47SUFBaUI7QUFDbEQ7QUFFQSxpRUFBZWIsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjcmF0Y2hwYWQvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcbmNvbmZpZ3VyYXRpb247XG5jb25zdCBiYXNlUHJvbXB0UHJlZml4ID0gYFxuTGlzdCAyMCBiYW5kcyBmcm9tIGFyb3VuZCB0aGUgd29ybGQgaW4gbnVtZXJpYyBvcmRlciB0aGF0IGNvbnRhaW4gdGhlIHF1YWxpdGllcyBwcm9tcHRlZC4gQWRkIHRoZWlyIGNvdW50cnkgb2Ygb3JpZ2luIHJlbGF0ZWQgdG8gZWFjaCBiYW5kLiBSZWZlcmVuY2luZyBtdXNpYyB0aGVvcnkgaW4gdGhlIHN0eWxlIG9mIG11c2ljIGpvdXJuYWxpc20sIGV4cGxhaW4gdGhlIG11c2ljYWwgY29tbW9uYWxpdGllcyBvZiB0aGlzIGxpc3Qgc3RhcnRpbmcgd2l0aCBcIkFuYWx5c2lzOlwiLiBJZiB0aGVyZSdzIGEgcHJvbXQgdGhhdCBtYWtlcyBubyBzZW5zZSwgcHJpbnQgb25seSB0aGUgcHJvbXB0IHRoYXQgbWFrZXMgbm8gc2Vuc2UgYWxvbmcgd2l0aCBcIlRoZXJlIG1heSBiZSBhbiBlcnJvciB3aXRoIHlvdXIgcHJvbXB0XCI6IFxuYDtcbmNvbnN0IGdlbmVyYXRlQWN0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIFJ1biBmaXJzdCBwcm9tcHRcbiAgY29uc29sZS5sb2coYEFQSTogJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWApO1xuXG4gIGNvbnN0IGJhc2VDb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IGAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9XFxuYCxcbiAgICB0ZW1wZXJhdHVyZTogMSxcbiAgICBtYXhfdG9rZW5zOiAxMDAwLFxuICB9KTtcblxuICBjb25zdCBiYXNlUHJvbXB0T3V0cHV0ID0gYmFzZUNvbXBsZXRpb24uZGF0YS5jaG9pY2VzLnBvcCgpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb3V0cHV0OiBiYXNlUHJvbXB0T3V0cHV0IH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVBY3Rpb247XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJiYXNlUHJvbXB0UHJlZml4IiwiZ2VuZXJhdGVBY3Rpb24iLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInVzZXJJbnB1dCIsImJhc2VDb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiYmFzZVByb21wdE91dHB1dCIsImRhdGEiLCJjaG9pY2VzIiwicG9wIiwic3RhdHVzIiwianNvbiIsIm91dHB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();