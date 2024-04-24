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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(string, phrases) {\n    var result = string;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 34\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    gap: \"2rem\",\n    justifyContent: \"center\",\n    flexDirection: \"row\",\n    marginTop: \"2rem\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      width: \"15rem\",\n      height: \"100%\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          maxWidth: \"25rem\",\n          flexDirection: \"row\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          gap: \"1rem\",\n          width: \"100%\",\n          height: \"fit-content\",\n          padding: \"1rem\",\n          backgroundColor: \"#f5f5f1\",\n          borderRadius: \"15px\",\n          cursor: \"pointer\",\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          style: {\n            border: selectedBoxIndex === index ? \"2px solid #0388fc\" : \"none\"\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n            width: \"4rem\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n            maxWidth: \"25rem\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            gap: \"1rem\",\n            width: \"100%\",\n            height: \"fit-content\",\n            padding: \"1rem\",\n            backgroundColor: \"#f5f5f1\",\n            borderRadius: \"15px\",\n            cursor: \"pointer\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n              style: selectedBoxIndex === index ? {\n                color: \"#0388fc\",\n                textDecoration: \"underline\"\n              } : {},\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkYsZUFzQkUsOERBQUMsNERBQUQ7QUFBQSx5QkFDRyxHQURILEVBRUd0QixXQUFXLENBQUNpQixLQUFLLENBQUNNLElBQVAsRUFBYSxDQUN2QixrQ0FEdUIsRUFFdkIsbUJBRnVCLEVBR3ZCLGtCQUh1QixDQUFiLENBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJGO0FBQUEsV0FZT2IsS0FaUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBOERELE9BaEVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUZELENBckhNOztHQUFNbEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbGxlY3Rpb25zL0NhcmQvQ2FyZC5qc3g/NTAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBTdHlsZWRDYXJkRGVzY3JpcHRpb24sXHJcbiAgU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyLFxyXG4gIFN0eWxlZENhcmRUaXRsZSxcclxuICBTdHlsZWRDYXJkT3B0aW9uQm94LFxyXG4gIFN0eWxlZENhcmRDb250YWluZXJDb2x1bW4sXHJcbn0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHtcclxuICBpbWFnZSxcclxuICBxdW90ZXMsXHJcbiAgYnJpZWZJbWFnZSxcclxuICBzZWFyY2hJbWFnZSxcclxuICBwaXRjaEltYWdlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkQm94SW5kZXgsIHNldFNlbGVjdGVkQm94SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGJvbGRQaHJhc2VzID0gKHN0cmluZywgcGhyYXNlcykgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHN0cmluZztcclxuICAgIHBocmFzZXMuZm9yRWFjaCgocGhyYXNlKSA9PiB7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdChwaHJhc2UpLmpvaW4oYHwke3BocmFzZX18YCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRcclxuICAgICAgLnNwbGl0KFwifFwiKVxyXG4gICAgICAubWFwKChwYXJ0LCBpbmRleCkgPT5cclxuICAgICAgICBwaHJhc2VzLmluY2x1ZGVzKHBhcnQpID8gPHN0cm9uZyBrZXk9e2luZGV4fT57cGFydH08L3N0cm9uZz4gOiBwYXJ0XHJcbiAgICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2VGb3JJbmRleCA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBicmllZkltYWdlO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gc2VhcmNoSW1hZ2U7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XHJcbiAgICAgIHJldHVybiBwaXRjaEltYWdlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uXHJcbiAgICAgIGdhcD17XCIycmVtXCJ9XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtcInJvd1wifVxyXG4gICAgICBtYXJnaW5Ub3A9e1wiMnJlbVwifVxyXG4gICAgPlxyXG4gICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIHdpZHRoPXtcIjE1cmVtXCJ9IGhlaWdodD17XCIxMDAlXCJ9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgd2lkdGg9e2ltYWdlLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94IG1heEhlaWdodD17XCJmaXQtY29udGVudFwifT5cclxuICAgICAgICB7cXVvdGVzLm1hcCgocXVvdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gZ2V0SW1hZ2VGb3JJbmRleChpbmRleCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoPXtcIjI1cmVtXCJ9XHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17XCJyb3dcIn1cclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgIGdhcD17XCIxcmVtXCJ9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgIGhlaWdodD17XCJmaXQtY29udGVudFwifVxyXG4gICAgICAgICAgICAgIHBhZGRpbmc9e1wiMXJlbVwifVxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCIjZjVmNWYxXCJ9XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjE1cHhcIn1cclxuICAgICAgICAgICAgICBjdXJzb3I9e1wicG9pbnRlclwifVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRCb3hJbmRleChpbmRleCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCb3hJbmRleCA9PT0gaW5kZXggPyBcIjJweCBzb2xpZCAjMDM4OGZjXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lciB3aWR0aD17XCI0cmVtXCJ9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkSW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3NlbGVjdGVkSW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17c2VsZWN0ZWRJbWFnZS53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtzZWxlY3RlZEltYWdlLmhlaWdodH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3hcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPXtcIjI1cmVtXCJ9XHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgICAgZ2FwPXtcIjFyZW1cIn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17XCJmaXQtY29udGVudFwifVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZz17XCIxcmVtXCJ9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiI2Y1ZjVmMVwifVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjE1cHhcIn1cclxuICAgICAgICAgICAgICAgIGN1cnNvcj17XCJwb2ludGVyXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZENhcmRUaXRsZVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCb3hJbmRleCA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgID8geyBjb2xvcjogXCIjMDM4OGZjXCIsIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cXVvdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge2JvbGRQaHJhc2VzKHF1b3RlLmRlc2MsIFtcclxuICAgICAgICAgICAgICAgICAgICBcImJyaWVmIHdyaXRpbmcgb3Igc2ltcGxlIGd1aWRhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjcml0ZXJpYSBtYXRjaGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGl0Y2ggbWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZE9wdGlvbkJveD5cclxuICAgICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgPC9TdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlN0eWxlZENhcmREZXNjcmlwdGlvbiIsIlN0eWxlZENhcmRJbWFnZUNvbnRhaW5lciIsIlN0eWxlZENhcmRUaXRsZSIsIlN0eWxlZENhcmRPcHRpb25Cb3giLCJTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uIiwidXNlU3RhdGUiLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJicmllZkltYWdlIiwic2VhcmNoSW1hZ2UiLCJwaXRjaEltYWdlIiwic2VsZWN0ZWRCb3hJbmRleCIsInNldFNlbGVjdGVkQm94SW5kZXgiLCJib2xkUGhyYXNlcyIsInN0cmluZyIsInBocmFzZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwicGhyYXNlIiwic3BsaXQiLCJqb2luIiwibWFwIiwicGFydCIsImluZGV4IiwiaW5jbHVkZXMiLCJnZXRJbWFnZUZvckluZGV4Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJxdW90ZSIsInNlbGVjdGVkSW1hZ2UiLCJib3JkZXIiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidGl0bGUiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});