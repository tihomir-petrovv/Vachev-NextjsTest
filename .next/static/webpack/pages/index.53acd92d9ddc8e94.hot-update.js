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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sections_Hero_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sections/Hero/elements */ \"./sections/Hero/elements.jsx\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var _sections_Main_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/Main/elements */ \"./sections/Main/elements.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var image = _ref.image,\n      quotes = _ref.quotes;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_sections_Hero_elements__WEBPACK_IMPORTED_MODULE_1__.StyledContainer, {\n    style: {\n      flexDirection: \"row\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      gap: \"50px\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledOptionBox, {\n      style: {\n        maxHeight: \"fit-content\"\n      },\n      children: quotes.map(function (quote, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledOptionBox, {\n          style: {\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            gap: \"1rem\",\n            width: \"100%\",\n            maxWidth: \"25rem\",\n            height: \"fit-content\",\n            padding: \"1rem\",\n            backgroundColor: \"#f5f5f1\",\n            borderRadius: \"15px\"\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_sections_Main_elements__WEBPACK_IMPORTED_MODULE_3__.StyledCardTitle, {\n            children: quote.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardDescription, {\n            children: quote.desc\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, _this);\n};\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN2QyxzQkFDSSw4REFBQyxvRUFBRDtBQUFpQixTQUFLLEVBQUU7QUFDcEJDLE1BQUFBLGFBQWEsRUFBRSxLQURLO0FBRXBCQyxNQUFBQSxjQUFjLEVBQUUsUUFGSTtBQUdwQkMsTUFBQUEsVUFBVSxFQUFFLFFBSFE7QUFJcEJDLE1BQUFBLEdBQUcsRUFBRTtBQUplLEtBQXhCO0FBQUEsNEJBTUksOERBQUMsK0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGNBQU0sRUFBQyxZQURUO0FBRUUsV0FBRyxFQUFFTCxLQUFLLENBQUNNLEdBRmI7QUFHRSxXQUFHLEVBQUVOLEtBQUssQ0FBQ08sR0FIYjtBQUlFLGFBQUssRUFBRVAsS0FBSyxDQUFDUSxLQUpmO0FBS0UsY0FBTSxFQUFFUixLQUFLLENBQUNTO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFlSSw4REFBQyxzREFBRDtBQUFpQixXQUFLLEVBQUU7QUFDdEJDLFFBQUFBLFNBQVMsRUFBRTtBQURXLE9BQXhCO0FBQUEsZ0JBR0tULE1BQU0sQ0FBQ1UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNSLDhEQUFDLHNEQUFEO0FBQWlCLGVBQUssRUFBRTtBQUNwQlgsWUFBQUEsYUFBYSxFQUFFLFFBREs7QUFFcEJDLFlBQUFBLGNBQWMsRUFBRSxRQUZJO0FBR3BCQyxZQUFBQSxVQUFVLEVBQUUsUUFIUTtBQUlwQkMsWUFBQUEsR0FBRyxFQUFFLE1BSmU7QUFLcEJHLFlBQUFBLEtBQUssRUFBRSxNQUxhO0FBTXBCTSxZQUFBQSxRQUFRLEVBQUUsT0FOVTtBQU9wQkwsWUFBQUEsTUFBTSxFQUFFLGFBUFk7QUFRcEJNLFlBQUFBLE9BQU8sRUFBRSxNQVJXO0FBU3BCQyxZQUFBQSxlQUFlLEVBQUUsU0FURztBQVVwQkMsWUFBQUEsWUFBWSxFQUFFO0FBVk0sV0FBeEI7QUFBQSxrQ0FhSSw4REFBQyxvRUFBRDtBQUFBLHNCQUFrQkwsS0FBSyxDQUFDTTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKLGVBY0ksOERBQUMsNERBQUQ7QUFBQSxzQkFBd0JOLEtBQUssQ0FBQ087QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkSjtBQUFBLFdBV1FOLEtBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVg7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0F6Q007S0FBTWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29sbGVjdGlvbnMvQ2FyZC9DYXJkLmpzeD81MDNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBTdHlsZWRDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vc2VjdGlvbnMvSGVyby9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBTdHlsZWRDYXJkRGVzY3JpcHRpb24sIFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lciwgU3R5bGVkT3B0aW9uQm94IH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgU3R5bGVkQ2FyZFRpdGxlIH0gZnJvbSBcIi4uLy4uL3NlY3Rpb25zL01haW4vZWxlbWVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHsgaW1hZ2UsIHF1b3RlcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRDb250YWluZXIgc3R5bGU9e3tcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGdhcDogXCI1MHB4XCIsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZS53aWR0aH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U3R5bGVkT3B0aW9uQm94IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge3F1b3Rlcy5tYXAoKHF1b3RlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRPcHRpb25Cb3ggc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZFRpdGxlPntxdW90ZS50aXRsZX08L1N0eWxlZENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmREZXNjcmlwdGlvbj57cXVvdGUuZGVzY308L1N0eWxlZENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZE9wdGlvbkJveD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZE9wdGlvbkJveD5cclxuICAgICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxyXG4gICAgKVxyXG59O1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTdHlsZWRDb250YWluZXIiLCJTdHlsZWRDYXJkRGVzY3JpcHRpb24iLCJTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIiLCJTdHlsZWRPcHRpb25Cb3giLCJTdHlsZWRDYXJkVGl0bGUiLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXAiLCJxdW90ZSIsImluZGV4IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGl0bGUiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});