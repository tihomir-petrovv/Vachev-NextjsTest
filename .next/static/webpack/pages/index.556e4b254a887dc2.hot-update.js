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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined;\n\n\n\n\nvar Card = function Card(_ref) {\n  var image = _ref.image,\n      quotes = _ref.quotes;\n\n  var _boldWords = function boldWords(string, words) {\n    return string.split(\" \").map(function (word, index) {\n      if (words.includes(word.toLowerCase())) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"b\", {\n          children: [word, \" \"]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 16\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        children: [word, \" \"]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 14\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    gap: \"2rem\",\n    justifyContent: \"center\",\n    flexDirection: \"row\",\n    marginTop: \"2rem\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          maxWidth: \"25rem\",\n          flexDirection: \"column\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          gap: \"1rem\",\n          width: \"100%\",\n          height: \"fit-content\",\n          padding: \"1rem\",\n          backgroundColor: \"#f5f5f1\",\n          borderRadius: \"15px\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n            children: quote.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n            boldWords: function boldWords() {\n              _boldWords(quote.desc, [\"brief\", \"criteria\", \"management\"]);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFPLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDekMsTUFBTUMsVUFBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ25DLFdBQU9ELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxVQUFJSixLQUFLLENBQUNLLFFBQU4sQ0FBZUYsSUFBSSxDQUFDRyxXQUFMLEVBQWYsQ0FBSixFQUF3QztBQUN0Qyw0QkFBTztBQUFBLHFCQUFnQkgsSUFBaEI7QUFBQSxXQUFRQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFDRCwwQkFBTztBQUFBLG1CQUFtQkQsSUFBbkI7QUFBQSxTQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBTE0sQ0FBUDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0UsOERBQUMsZ0VBQUQ7QUFDRSxPQUFHLEVBQUUsTUFEUDtBQUVFLGtCQUFjLEVBQUUsUUFGbEI7QUFHRSxpQkFBYSxFQUFFLEtBSGpCO0FBSUUsYUFBUyxFQUFFLE1BSmI7QUFBQSw0QkFNRSw4REFBQywrREFBRDtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsY0FBTSxFQUFDLFlBRFQ7QUFFRSxXQUFHLEVBQUVSLEtBQUssQ0FBQ1csR0FGYjtBQUdFLFdBQUcsRUFBRVgsS0FBSyxDQUFDWSxHQUhiO0FBSUUsYUFBSyxFQUFFWixLQUFLLENBQUNhLEtBSmY7QUFLRSxjQUFNLEVBQUViLEtBQUssQ0FBQ2M7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQWVFLDhEQUFDLDBEQUFEO0FBQXFCLGVBQVMsRUFBRSxhQUFoQztBQUFBLGdCQUNHYixNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDUyxLQUFELEVBQVFQLEtBQVI7QUFBQSw0QkFDViw4REFBQywwREFBRDtBQUNFLGtCQUFRLEVBQUUsT0FEWjtBQUVFLHVCQUFhLEVBQUUsUUFGakI7QUFHRSx3QkFBYyxFQUFFLFFBSGxCO0FBSUUsb0JBQVUsRUFBRSxRQUpkO0FBS0UsYUFBRyxFQUFFLE1BTFA7QUFNRSxlQUFLLEVBQUUsTUFOVDtBQU9FLGdCQUFNLEVBQUUsYUFQVjtBQVFFLGlCQUFPLEVBQUUsTUFSWDtBQVNFLHlCQUFlLEVBQUUsU0FUbkI7QUFVRSxzQkFBWSxFQUFFLE1BVmhCO0FBQUEsa0NBYUUsOERBQUMsc0RBQUQ7QUFBQSxzQkFBa0JPLEtBQUssQ0FBQ0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRixlQWNFLDhEQUFDLDREQUFEO0FBQ0UscUJBQVMsRUFBRSxxQkFBTTtBQUNmZCxjQUFBQSxVQUFTLENBQUNhLEtBQUssQ0FBQ0UsSUFBUCxFQUFhLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsWUFBdEIsQ0FBYixDQUFUO0FBQ0Q7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUEsV0FXT1QsS0FYUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQXBETTtLQUFNVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4PzUwM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkQ2FyZERlc2NyaXB0aW9uLFxyXG4gIFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcixcclxuICBTdHlsZWRDYXJkVGl0bGUsXHJcbiAgU3R5bGVkQ2FyZE9wdGlvbkJveCxcclxuICBTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9ICh7IGltYWdlLCBxdW90ZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGJvbGRXb3JkcyA9IChzdHJpbmcsIHdvcmRzKSA9PiB7XHJcbiAgICByZXR1cm4gc3RyaW5nLnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh3b3Jkcy5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxiIGtleT17aW5kZXh9Pnt3b3JkfSA8L2I+O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fT57d29yZH0gPC9zcGFuPjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ2FyZENvbnRhaW5lckNvbHVtblxyXG4gICAgICBnYXA9e1wiMnJlbVwifVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJyb3dcIn1cclxuICAgICAgbWFyZ2luVG9wPXtcIjJyZW1cIn1cclxuICAgID5cclxuICAgICAgPFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cclxuICAgICAgICAgIHdpZHRoPXtpbWFnZS53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17aW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveCBtYXhIZWlnaHQ9e1wiZml0LWNvbnRlbnRcIn0+XHJcbiAgICAgICAge3F1b3Rlcy5tYXAoKHF1b3RlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3hcclxuICAgICAgICAgICAgbWF4V2lkdGg9e1wiMjVyZW1cIn1cclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIGdhcD17XCIxcmVtXCJ9XHJcbiAgICAgICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgaGVpZ2h0PXtcImZpdC1jb250ZW50XCJ9XHJcbiAgICAgICAgICAgIHBhZGRpbmc9e1wiMXJlbVwifVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiI2Y1ZjVmMVwifVxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiMTVweFwifVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZFRpdGxlPntxdW90ZS50aXRsZX08L1N0eWxlZENhcmRUaXRsZT5cclxuICAgICAgICAgICAgPFN0eWxlZENhcmREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGJvbGRXb3Jkcz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9sZFdvcmRzKHF1b3RlLmRlc2MsIFtcImJyaWVmXCIsIFwiY3JpdGVyaWFcIiwgXCJtYW5hZ2VtZW50XCJdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZENhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3R5bGVkQ2FyZERlc2NyaXB0aW9uIiwiU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZE9wdGlvbkJveCIsIlN0eWxlZENhcmRDb250YWluZXJDb2x1bW4iLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJib2xkV29yZHMiLCJzdHJpbmciLCJ3b3JkcyIsInNwbGl0IiwibWFwIiwid29yZCIsImluZGV4IiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicXVvdGUiLCJ0aXRsZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});