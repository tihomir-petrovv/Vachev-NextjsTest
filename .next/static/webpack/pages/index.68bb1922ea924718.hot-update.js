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

/***/ "./collections/Card/Card.tsx":
/*!***********************************!*\
  !*** ./collections/Card/Card.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Card = function Card(image, quotes, briefImage, searchImage, pitchImage) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(sentence, phrases) {\n    var result = sentence;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 42\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledMainCardContainerColumn, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledMainCardOptionBox, {\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardContainerColumn, {\n          index: index,\n          selectedBoxIndex: selectedBoxIndex,\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardBoxesImageContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardOptionBox, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardTitle, {\n              selectedBoxIndex: selectedBoxIndex,\n              index: index,\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_2__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 29\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUMsc0RBQUQ7QUFDSSw4QkFBZ0IsRUFBRWxCLGdCQUR0QjtBQUVJLG1CQUFLLEVBQUVZLEtBRlg7QUFBQSx3QkFJS08sS0FBSyxDQUFDRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFPSSw4REFBQyw0REFBRDtBQUFBLHlCQUNLLEdBREwsRUFFS25CLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQ0csSUFBUCxFQUFhLENBQ3JCLGtDQURxQixFQUVyQixtQkFGcUIsRUFHckIsa0JBSHFCLENBQWIsQ0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSjtBQUFBLFdBR1NWLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQWtDSCxPQXBDQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9ESCxDQWxGTTs7R0FBTWxCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQudHN4PzMxMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICAgIFN0eWxlZENhcmREZXNjcmlwdGlvbixcclxuICAgIFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcixcclxuICAgIFN0eWxlZENhcmRUaXRsZSxcclxuICAgIFN0eWxlZENhcmRPcHRpb25Cb3gsXHJcbiAgICBTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uLFxyXG4gICAgU3R5bGVkTWFpbkNhcmRDb250YWluZXJDb2x1bW4sXHJcbiAgICBTdHlsZWRNYWluQ2FyZE9wdGlvbkJveCxcclxuICAgIFN0eWxlZENhcmRCb3hlc0ltYWdlQ29udGFpbmVyLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9ICggaW1hZ2U6IHsgc3JjOiBzdHJpbmc7IGFsdDogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9LFxyXG4gICAgcXVvdGVzOiB7IHRpdGxlOiBzdHJpbmc7IGRlc2M6IHN0cmluZyB9LFxyXG4gICAgYnJpZWZJbWFnZTogeyBzcmM6IHN0cmluZzsgYWx0OiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0sXHJcbiAgICBzZWFyY2hJbWFnZTogeyBzcmM6IHN0cmluZzsgYWx0OiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0sXHJcbiAgICBwaXRjaEltYWdlOiB7IHNyYzogc3RyaW5nOyBhbHQ6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSwpID0+IHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEJveEluZGV4LCBzZXRTZWxlY3RlZEJveEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGJvbGRQaHJhc2VzID0gKHNlbnRlbmNlOiBzdHJpbmcsIHBocmFzZXM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNlbnRlbmNlO1xyXG4gICAgICAgIHBocmFzZXMuZm9yRWFjaCgocGhyYXNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdChwaHJhc2UpLmpvaW4oYHwke3BocmFzZX18YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICAuc3BsaXQoXCJ8XCIpXHJcbiAgICAgICAgICAgIC5tYXAoKHBhcnQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgcGhyYXNlcy5pbmNsdWRlcyhwYXJ0KSA/IDxzdHJvbmcga2V5PXtpbmRleH0+e3BhcnR9PC9zdHJvbmc+IDogcGFydFxyXG4gICAgICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRJbWFnZUZvckluZGV4ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJyaWVmSW1hZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoSW1hZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGl0Y2hJbWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZE1haW5DYXJkQ29udGFpbmVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRNYWluQ2FyZE9wdGlvbkJveD5cclxuICAgICAgICAgICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gZ2V0SW1hZ2VGb3JJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmRDb250YWluZXJDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQm94SW5kZXg9e3NlbGVjdGVkQm94SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRCb3hJbmRleChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkQm94ZXNJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtzZWxlY3RlZEltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3NlbGVjdGVkSW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmRCb3hlc0ltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmRUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJveEluZGV4PXtzZWxlY3RlZEJveEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9sZFBocmFzZXMocXVvdGUuZGVzYywgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJicmllZiB3cml0aW5nIG9yIHNpbXBsZSBndWlkYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcml0ZXJpYSBtYXRjaGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaXRjaCBtYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1N0eWxlZE1haW5DYXJkT3B0aW9uQm94PlxyXG4gICAgICAgIDwvU3R5bGVkTWFpbkNhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3R5bGVkQ2FyZERlc2NyaXB0aW9uIiwiU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZE9wdGlvbkJveCIsIlN0eWxlZENhcmRDb250YWluZXJDb2x1bW4iLCJTdHlsZWRNYWluQ2FyZENvbnRhaW5lckNvbHVtbiIsIlN0eWxlZE1haW5DYXJkT3B0aW9uQm94IiwiU3R5bGVkQ2FyZEJveGVzSW1hZ2VDb250YWluZXIiLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJicmllZkltYWdlIiwic2VhcmNoSW1hZ2UiLCJwaXRjaEltYWdlIiwic2VsZWN0ZWRCb3hJbmRleCIsInNldFNlbGVjdGVkQm94SW5kZXgiLCJib2xkUGhyYXNlcyIsInNlbnRlbmNlIiwicGhyYXNlcyIsInJlc3VsdCIsImZvckVhY2giLCJwaHJhc2UiLCJzcGxpdCIsImpvaW4iLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJpbmNsdWRlcyIsImdldEltYWdlRm9ySW5kZXgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1b3RlIiwic2VsZWN0ZWRJbWFnZSIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./collections/Card/Card.tsx\n");

/***/ })

});