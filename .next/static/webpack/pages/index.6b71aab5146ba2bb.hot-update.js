"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./sections/Main/Main.jsx":
/*!********************************!*\
  !*** ./sections/Main/Main.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./sections/Main/elements.jsx\");\n/* harmony import */ var _Hero_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hero/elements */ \"./sections/Hero/elements.jsx\");\n/* harmony import */ var _collections_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../collections/Card/Card */ \"./collections/Card/Card.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\sections\\\\Main\\\\Main.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar Main = function Main(_ref) {\n  var title = _ref.title,\n      description = _ref.description,\n      image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_0__.StyledContainerColumn, {\n    style: {\n      height: \"fit-content\",\n      minHeight: \"100vh\",\n      marginTop: \"5vh\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_0__.StyledContainerColumn, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Hero_elements__WEBPACK_IMPORTED_MODULE_1__.StyledTitle, {\n        lineHeight: \"1rem\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Hero_elements__WEBPACK_IMPORTED_MODULE_1__.StyledDescription, {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_collections_Card_Card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n      image: image,\n      quotes: quotes,\n      briefImage: briefImage,\n      searchImage: searchImage,\n      pitchImage: pitchImage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9NYWluL01haW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FRZDtBQUFBLE1BUEpDLEtBT0ksUUFQSkEsS0FPSTtBQUFBLE1BTkpDLFdBTUksUUFOSkEsV0FNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTtBQUNKLHNCQUNFLDhEQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRSxhQURIO0FBRUxDLE1BQUFBLFNBQVMsRUFBRSxPQUZOO0FBR0xDLE1BQUFBLFNBQVMsRUFBRTtBQUhOLEtBRFQ7QUFBQSw0QkFPRSw4REFBQyw0REFBRDtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQWEsa0JBQVUsRUFBRSxNQUF6QjtBQUFBLGtCQUFrQ1Q7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQSxrQkFBb0JDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVdFLDhEQUFDLHdEQUFEO0FBQ0UsV0FBSyxFQUFJQyxLQURYO0FBRUUsWUFBTSxFQUFJQyxNQUZaO0FBR0UsZ0JBQVUsRUFBSUMsVUFIaEI7QUFJRSxpQkFBVyxFQUFJQyxXQUpqQjtBQUtFLGdCQUFVLEVBQUlDO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQTlCTTtLQUFNUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9NYWluL01haW4uanN4PzFhNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkQ29udGFpbmVyQ29sdW1uIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgU3R5bGVkRGVzY3JpcHRpb24sIFN0eWxlZFRpdGxlIH0gZnJvbSBcIi4uL0hlcm8vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi8uLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBpbWFnZSxcclxuICBxdW90ZXMsXHJcbiAgYnJpZWZJbWFnZSxcclxuICBzZWFyY2hJbWFnZSxcclxuICBwaXRjaEltYWdlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb250YWluZXJDb2x1bW5cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiNXZoXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRDb250YWluZXJDb2x1bW4+XHJcbiAgICAgICAgPFN0eWxlZFRpdGxlIGxpbmVIZWlnaHQ9e1wiMXJlbVwifT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICA8U3R5bGVkRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvU3R5bGVkRGVzY3JpcHRpb24+XHJcbiAgICAgIDwvU3R5bGVkQ29udGFpbmVyQ29sdW1uPlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGltYWdlID0ge2ltYWdlfVxyXG4gICAgICAgIHF1b3RlcyA9IHtxdW90ZXN9XHJcbiAgICAgICAgYnJpZWZJbWFnZSA9IHticmllZkltYWdlfVxyXG4gICAgICAgIHNlYXJjaEltYWdlID0ge3NlYXJjaEltYWdlfVxyXG4gICAgICAgIHBpdGNoSW1hZ2UgPSB7cGl0Y2hJbWFnZX1cclxuICAgICAgLz5cclxuICAgIDwvU3R5bGVkQ29udGFpbmVyQ29sdW1uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJTdHlsZWRDb250YWluZXJDb2x1bW4iLCJTdHlsZWREZXNjcmlwdGlvbiIsIlN0eWxlZFRpdGxlIiwiQ2FyZCIsIk1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJxdW90ZXMiLCJicmllZkltYWdlIiwic2VhcmNoSW1hZ2UiLCJwaXRjaEltYWdlIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/Main/Main.jsx\n");

/***/ })

});