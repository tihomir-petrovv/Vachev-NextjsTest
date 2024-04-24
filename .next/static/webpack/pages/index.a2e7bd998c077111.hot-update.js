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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(string, phrases) {\n    var result = string;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 34\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledMainCardContainerColumn, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledMainCardOptionBox, {\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          index: index,\n          selectedBoxIndex: selectedBoxIndex,\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n            style: {\n              width: \"4rem\",\n              height: \"fit-content\"\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n            style: {\n              maxWidth: \"25rem\",\n              flexDirection: \"column\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              width: \"100%\",\n              height: \"fit-content\",\n              backgroundColor: \"#f5f5f1\",\n              cursor: \"pointer\"\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n              style: selectedBoxIndex === index ? {\n                color: \"#0388fc\",\n                textDecoration: \"underline\"\n              } : {},\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4PzUwM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkQ2FyZERlc2NyaXB0aW9uLFxyXG4gIFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcixcclxuICBTdHlsZWRDYXJkVGl0bGUsXHJcbiAgU3R5bGVkQ2FyZE9wdGlvbkJveCxcclxuICBTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uLFxyXG4gIFN0eWxlZE1haW5DYXJkQ29udGFpbmVyQ29sdW1uLFxyXG4gIFN0eWxlZE1haW5DYXJkT3B0aW9uQm94LFxyXG59IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9ICh7XHJcbiAgaW1hZ2UsXHJcbiAgcXVvdGVzLFxyXG4gIGJyaWVmSW1hZ2UsXHJcbiAgc2VhcmNoSW1hZ2UsXHJcbiAgcGl0Y2hJbWFnZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJveEluZGV4LCBzZXRTZWxlY3RlZEJveEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBib2xkUGhyYXNlcyA9IChzdHJpbmcsIHBocmFzZXMpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBzdHJpbmc7XHJcbiAgICBwaHJhc2VzLmZvckVhY2goKHBocmFzZSkgPT4ge1xyXG4gICAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQocGhyYXNlKS5qb2luKGB8JHtwaHJhc2V9fGApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgIC5zcGxpdChcInxcIilcclxuICAgICAgLm1hcCgocGFydCwgaW5kZXgpID0+XHJcbiAgICAgICAgcGhyYXNlcy5pbmNsdWRlcyhwYXJ0KSA/IDxzdHJvbmcga2V5PXtpbmRleH0+e3BhcnR9PC9zdHJvbmc+IDogcGFydFxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEltYWdlRm9ySW5kZXggPSAoaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYnJpZWZJbWFnZTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHNlYXJjaEltYWdlO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICByZXR1cm4gcGl0Y2hJbWFnZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkTWFpbkNhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgICAgIDxTdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICB3aWR0aD17aW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2ltYWdlLmhlaWdodH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPFN0eWxlZE1haW5DYXJkT3B0aW9uQm94PlxyXG4gICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSBnZXRJbWFnZUZvckluZGV4KGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkQm94SW5kZXg9e3NlbGVjdGVkQm94SW5kZXh9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEJveEluZGV4KGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjRyZW1cIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtzZWxlY3RlZEltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3NlbGVjdGVkSW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjVmNWYxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkVGl0bGVcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQm94SW5kZXggPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHsgY29sb3I6IFwiIzAzODhmY1wiLCB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3F1b3RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHtib2xkUGhyYXNlcyhxdW90ZS5kZXNjLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJicmllZiB3cml0aW5nIG9yIHNpbXBsZSBndWlkYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY3JpdGVyaWEgbWF0Y2hpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBpdGNoIG1hbmFnZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZE9wdGlvbkJveD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU3R5bGVkTWFpbkNhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZE1haW5DYXJkQ29udGFpbmVyQ29sdW1uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlN0eWxlZENhcmREZXNjcmlwdGlvbiIsIlN0eWxlZENhcmRJbWFnZUNvbnRhaW5lciIsIlN0eWxlZENhcmRUaXRsZSIsIlN0eWxlZENhcmRPcHRpb25Cb3giLCJTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uIiwiU3R5bGVkTWFpbkNhcmRDb250YWluZXJDb2x1bW4iLCJTdHlsZWRNYWluQ2FyZE9wdGlvbkJveCIsInVzZVN0YXRlIiwiQ2FyZCIsImltYWdlIiwicXVvdGVzIiwiYnJpZWZJbWFnZSIsInNlYXJjaEltYWdlIiwicGl0Y2hJbWFnZSIsInNlbGVjdGVkQm94SW5kZXgiLCJzZXRTZWxlY3RlZEJveEluZGV4IiwiYm9sZFBocmFzZXMiLCJzdHJpbmciLCJwaHJhc2VzIiwicmVzdWx0IiwiZm9yRWFjaCIsInBocmFzZSIsInNwbGl0Iiwiam9pbiIsIm1hcCIsInBhcnQiLCJpbmRleCIsImluY2x1ZGVzIiwiZ2V0SW1hZ2VGb3JJbmRleCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicXVvdGUiLCJzZWxlY3RlZEltYWdlIiwibWF4V2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});