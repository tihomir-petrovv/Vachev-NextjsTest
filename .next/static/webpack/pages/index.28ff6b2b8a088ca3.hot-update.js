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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sections_Hero_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sections/Hero/elements */ \"./sections/Hero/elements.jsx\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var image = _ref.image,\n      quotes = _ref.quotes;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_sections_Hero_elements__WEBPACK_IMPORTED_MODULE_1__.StyledContainer, {\n    style: {\n      flexDirection: \"row\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      gap: \"50px\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardOptionBox, {\n      style: {\n        maxHeight: \"fit-content\"\n      },\n      children: quotes.map(function (quote, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardOptionBox, {\n          maxWidth: \"25rem\",\n          flexDirection: \"column\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          gap: \"1rem\",\n          width: \"100%\",\n          height: \"fit-content\",\n          padding: \"1rem\",\n          backgroundColor: \"#f5f5f1\",\n          borderRadius: \"15px\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardTitle, {\n            children: quote.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardDescription, {\n            children: quote.desc\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9PLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6QyxzQkFDRSw4REFBQyxvRUFBRDtBQUNFLFNBQUssRUFBRTtBQUNMQyxNQUFBQSxhQUFhLEVBQUUsS0FEVjtBQUVMQyxNQUFBQSxjQUFjLEVBQUUsUUFGWDtBQUdMQyxNQUFBQSxVQUFVLEVBQUUsUUFIUDtBQUlMQyxNQUFBQSxHQUFHLEVBQUU7QUFKQSxLQURUO0FBQUEsNEJBUUUsOERBQUMsK0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGNBQU0sRUFBQyxZQURUO0FBRUUsV0FBRyxFQUFFTCxLQUFLLENBQUNNLEdBRmI7QUFHRSxXQUFHLEVBQUVOLEtBQUssQ0FBQ08sR0FIYjtBQUlFLGFBQUssRUFBRVAsS0FBSyxDQUFDUSxLQUpmO0FBS0UsY0FBTSxFQUFFUixLQUFLLENBQUNTO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFpQkUsOERBQUMsMERBQUQ7QUFDRSxXQUFLLEVBQUU7QUFDTEMsUUFBQUEsU0FBUyxFQUFFO0FBRE4sT0FEVDtBQUFBLGdCQUtHVCxNQUFNLENBQUNVLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSw0QkFDViw4REFBQywwREFBRDtBQUNFLGtCQUFRLEVBQUUsT0FEWjtBQUVFLHVCQUFhLEVBQUUsUUFGakI7QUFHRSx3QkFBYyxFQUFFLFFBSGxCO0FBSUUsb0JBQVUsRUFBRSxRQUpkO0FBS0UsYUFBRyxFQUFFLE1BTFA7QUFNRSxlQUFLLEVBQUUsTUFOVDtBQU9FLGdCQUFNLEVBQUUsYUFQVjtBQVFFLGlCQUFPLEVBQUUsTUFSWDtBQVNFLHlCQUFlLEVBQUUsU0FUbkI7QUFVRSxzQkFBWSxFQUFFLE1BVmhCO0FBQUEsa0NBYUUsOERBQUMsc0RBQUQ7QUFBQSxzQkFBa0JELEtBQUssQ0FBQ0U7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRixlQWNFLDhEQUFDLDREQUFEO0FBQUEsc0JBQXdCRixLQUFLLENBQUNHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQSxXQVdPRixLQVhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQTdDTTtLQUFNZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4PzUwM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFN0eWxlZENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9zZWN0aW9ucy9IZXJvL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkQ2FyZERlc2NyaXB0aW9uLFxyXG4gIFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcixcclxuICBTdHlsZWRDYXJkVGl0bGUsXHJcbiAgU3R5bGVkQ2FyZE9wdGlvbkJveCxcclxufSBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAoeyBpbWFnZSwgcXVvdGVzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbnRhaW5lclxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICBnYXA6IFwiNTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgd2lkdGg9e2ltYWdlLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1heEhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7cXVvdGVzLm1hcCgocXVvdGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICBtYXhXaWR0aD17XCIyNXJlbVwifVxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgZ2FwPXtcIjFyZW1cIn1cclxuICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICBoZWlnaHQ9e1wiZml0LWNvbnRlbnRcIn1cclxuICAgICAgICAgICAgcGFkZGluZz17XCIxcmVtXCJ9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCIjZjVmNWYxXCJ9XHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIxNXB4XCJ9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkVGl0bGU+e3F1b3RlLnRpdGxlfTwvU3R5bGVkQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZERlc2NyaXB0aW9uPntxdW90ZS5kZXNjfTwvU3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTdHlsZWRDb250YWluZXIiLCJTdHlsZWRDYXJkRGVzY3JpcHRpb24iLCJTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIiLCJTdHlsZWRDYXJkVGl0bGUiLCJTdHlsZWRDYXJkT3B0aW9uQm94IiwiQ2FyZCIsImltYWdlIiwicXVvdGVzIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwibWFwIiwicXVvdGUiLCJpbmRleCIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});