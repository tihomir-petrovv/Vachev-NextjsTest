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

/***/ "./collections/Card/Card.jsx":
/*!***********************************!*\
  !*** ./collections/Card/Card.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined;\n\n\n\n\nvar Card = function Card(_ref) {\n  var image = _ref.image,\n      quotes = _ref.quotes;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    style: {\n      flexDirection: \"row\",\n      justifyContent: \"center\",\n      alignItems: \"center\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          maxWidth: \"25rem\",\n          flexDirection: \"column\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          gap: \"1rem\",\n          width: \"100%\",\n          height: \"fit-content\",\n          padding: \"1rem\",\n          backgroundColor: \"#f5f5f1\",\n          borderRadius: \"15px\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n            children: quote.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n            children: quote.desc\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFPLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6QyxzQkFDRSw4REFBQyxnRUFBRDtBQUNFLFNBQUssRUFBRTtBQUNMQyxNQUFBQSxhQUFhLEVBQUUsS0FEVjtBQUVMQyxNQUFBQSxjQUFjLEVBQUUsUUFGWDtBQUdMQyxNQUFBQSxVQUFVLEVBQUU7QUFIUCxLQURUO0FBQUEsNEJBUUUsOERBQUMsK0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGNBQU0sRUFBQyxZQURUO0FBRUUsV0FBRyxFQUFFSixLQUFLLENBQUNLLEdBRmI7QUFHRSxXQUFHLEVBQUVMLEtBQUssQ0FBQ00sR0FIYjtBQUlFLGFBQUssRUFBRU4sS0FBSyxDQUFDTyxLQUpmO0FBS0UsY0FBTSxFQUFFUCxLQUFLLENBQUNRO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFpQkUsOERBQUMsMERBQUQ7QUFBcUIsZUFBUyxFQUFFLGFBQWhDO0FBQUEsZ0JBQ0dQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNWLDhEQUFDLDBEQUFEO0FBQ0Usa0JBQVEsRUFBRSxPQURaO0FBRUUsdUJBQWEsRUFBRSxRQUZqQjtBQUdFLHdCQUFjLEVBQUUsUUFIbEI7QUFJRSxvQkFBVSxFQUFFLFFBSmQ7QUFLRSxhQUFHLEVBQUUsTUFMUDtBQU1FLGVBQUssRUFBRSxNQU5UO0FBT0UsZ0JBQU0sRUFBRSxhQVBWO0FBUUUsaUJBQU8sRUFBRSxNQVJYO0FBU0UseUJBQWUsRUFBRSxTQVRuQjtBQVVFLHNCQUFZLEVBQUUsTUFWaEI7QUFBQSxrQ0FhRSw4REFBQyxzREFBRDtBQUFBLHNCQUFrQkQsS0FBSyxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0UsOERBQUMsNERBQUQ7QUFBQSxzQkFBd0JGLEtBQUssQ0FBQ0c7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBLFdBV09GLEtBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBekNNO0tBQU1aIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbGxlY3Rpb25zL0NhcmQvQ2FyZC5qc3g/NTAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBTdHlsZWRDYXJkRGVzY3JpcHRpb24sXHJcbiAgU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyLFxyXG4gIFN0eWxlZENhcmRUaXRsZSxcclxuICBTdHlsZWRDYXJkT3B0aW9uQm94LFxyXG4gIFN0eWxlZENhcmRDb250YWluZXJDb2x1bW4sXHJcbn0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHsgaW1hZ2UsIHF1b3RlcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgd2lkdGg9e2ltYWdlLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94IG1heEhlaWdodD17XCJmaXQtY29udGVudFwifT5cclxuICAgICAgICB7cXVvdGVzLm1hcCgocXVvdGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICBtYXhXaWR0aD17XCIyNXJlbVwifVxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgZ2FwPXtcIjFyZW1cIn1cclxuICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICBoZWlnaHQ9e1wiZml0LWNvbnRlbnRcIn1cclxuICAgICAgICAgICAgcGFkZGluZz17XCIxcmVtXCJ9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCIjZjVmNWYxXCJ9XHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIxNXB4XCJ9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkVGl0bGU+e3F1b3RlLnRpdGxlfTwvU3R5bGVkQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZERlc2NyaXB0aW9uPntxdW90ZS5kZXNjfTwvU3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZENhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3R5bGVkQ2FyZERlc2NyaXB0aW9uIiwiU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZE9wdGlvbkJveCIsIlN0eWxlZENhcmRDb250YWluZXJDb2x1bW4iLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJxdW90ZSIsImluZGV4IiwidGl0bGUiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});