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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined;\n\n\n\n\nvar Card = function Card(_ref) {\n  var image = _ref.image,\n      quotes = _ref.quotes;\n  //   const boldWords = (string, words) => {\n  //     return string.split(\" \").map((word, index) => {\n  //       const lowerCaseWord = word.replace(/[^a-zA-Z ]/g, \"\").toLowerCase();\n  //       if (words.includes(lowerCaseWord)) {\n  //         return <strong key={index}>{word} </strong>;\n  //       }\n  //       return word + \" \";\n  //     });\n  //   };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    gap: \"2rem\",\n    justifyContent: \"center\",\n    flexDirection: \"row\",\n    marginTop: \"2rem\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          maxWidth: \"25rem\",\n          flexDirection: \"column\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          gap: \"1rem\",\n          width: \"100%\",\n          height: \"fit-content\",\n          padding: \"1rem\",\n          backgroundColor: \"#f5f5f1\",\n          borderRadius: \"15px\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n            children: quote.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n            children: quote.desc\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFPLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRSxzQkFDRSw4REFBQyxnRUFBRDtBQUNFLE9BQUcsRUFBRSxNQURQO0FBRUUsa0JBQWMsRUFBRSxRQUZsQjtBQUdFLGlCQUFhLEVBQUUsS0FIakI7QUFJRSxhQUFTLEVBQUUsTUFKYjtBQUFBLDRCQU1FLDhEQUFDLCtEQUFEO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxjQUFNLEVBQUMsWUFEVDtBQUVFLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUZiO0FBR0UsV0FBRyxFQUFFRixLQUFLLENBQUNHLEdBSGI7QUFJRSxhQUFLLEVBQUVILEtBQUssQ0FBQ0ksS0FKZjtBQUtFLGNBQU0sRUFBRUosS0FBSyxDQUFDSztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBZUUsOERBQUMsMERBQUQ7QUFBcUIsZUFBUyxFQUFFLGFBQWhDO0FBQUEsZ0JBQ0dKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNWLDhEQUFDLDBEQUFEO0FBQ0Usa0JBQVEsRUFBRSxPQURaO0FBRUUsdUJBQWEsRUFBRSxRQUZqQjtBQUdFLHdCQUFjLEVBQUUsUUFIbEI7QUFJRSxvQkFBVSxFQUFFLFFBSmQ7QUFLRSxhQUFHLEVBQUUsTUFMUDtBQU1FLGVBQUssRUFBRSxNQU5UO0FBT0UsZ0JBQU0sRUFBRSxhQVBWO0FBUUUsaUJBQU8sRUFBRSxNQVJYO0FBU0UseUJBQWUsRUFBRSxTQVRuQjtBQVVFLHNCQUFZLEVBQUUsTUFWaEI7QUFBQSxrQ0FhRSw4REFBQyxzREFBRDtBQUFBLHNCQUFrQkQsS0FBSyxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0UsOERBQUMsNERBQUQ7QUFBQSxzQkFDR0YsS0FBSyxDQUFDRztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQSxXQVdPRixLQVhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBbkRNO0tBQU1UIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbGxlY3Rpb25zL0NhcmQvQ2FyZC5qc3g/NTAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBTdHlsZWRDYXJkRGVzY3JpcHRpb24sXHJcbiAgU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyLFxyXG4gIFN0eWxlZENhcmRUaXRsZSxcclxuICBTdHlsZWRDYXJkT3B0aW9uQm94LFxyXG4gIFN0eWxlZENhcmRDb250YWluZXJDb2x1bW4sXHJcbn0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHsgaW1hZ2UsIHF1b3RlcyB9KSA9PiB7XHJcbi8vICAgY29uc3QgYm9sZFdvcmRzID0gKHN0cmluZywgd29yZHMpID0+IHtcclxuLy8gICAgIHJldHVybiBzdHJpbmcuc3BsaXQoXCIgXCIpLm1hcCgod29yZCwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgY29uc3QgbG93ZXJDYXNlV29yZCA9IHdvcmQucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4vLyAgICAgICBpZiAod29yZHMuaW5jbHVkZXMobG93ZXJDYXNlV29yZCkpIHtcclxuLy8gICAgICAgICByZXR1cm4gPHN0cm9uZyBrZXk9e2luZGV4fT57d29yZH0gPC9zdHJvbmc+O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIHJldHVybiB3b3JkICsgXCIgXCI7XHJcbi8vICAgICB9KTtcclxuLy8gICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENhcmRDb250YWluZXJDb2x1bW5cclxuICAgICAgZ2FwPXtcIjJyZW1cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGZsZXhEaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgIG1hcmdpblRvcD17XCIycmVtXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICB3aWR0aD17aW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2ltYWdlLmhlaWdodH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3ggbWF4SGVpZ2h0PXtcImZpdC1jb250ZW50XCJ9PlxyXG4gICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94XHJcbiAgICAgICAgICAgIG1heFdpZHRoPXtcIjI1cmVtXCJ9XHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICBnYXA9e1wiMXJlbVwifVxyXG4gICAgICAgICAgICB3aWR0aD17XCIxMDAlXCJ9XHJcbiAgICAgICAgICAgIGhlaWdodD17XCJmaXQtY29udGVudFwifVxyXG4gICAgICAgICAgICBwYWRkaW5nPXtcIjFyZW1cIn1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcIiNmNWY1ZjFcIn1cclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjE1cHhcIn1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFN0eWxlZENhcmRUaXRsZT57cXVvdGUudGl0bGV9PC9TdHlsZWRDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAge3F1b3RlLmRlc2N9XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZENhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3R5bGVkQ2FyZERlc2NyaXB0aW9uIiwiU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZE9wdGlvbkJveCIsIlN0eWxlZENhcmRDb250YWluZXJDb2x1bW4iLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsInF1b3RlIiwiaW5kZXgiLCJ0aXRsZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});