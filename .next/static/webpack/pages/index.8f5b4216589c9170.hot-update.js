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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(string, phrases) {\n    var result = string;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 34\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    gap: \"2rem\",\n    justifyContent: \"center\",\n    flexDirection: \"row\",\n    marginTop: \"2rem\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      width: \"15rem\",\n      height: \"100%\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          maxWidth: \"25rem\",\n          flexDirection: \"row\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          gap: \"1rem\",\n          width: \"100%\",\n          height: \"fit-content\",\n          padding: \"1rem\",\n          backgroundColor: \"#f5f5f1\",\n          borderRadius: \"15px\",\n          cursor: \"pointer\",\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          style: {\n            border: selectedBoxIndex === index ? \"2px solid #0388fc\" : \"none\"\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n            width: \"4rem\",\n            height: \"3rem\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n            maxWidth: \"25rem\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            gap: \"1rem\",\n            width: \"100%\",\n            height: \"fit-content\",\n            padding: \"1rem\",\n            backgroundColor: \"#f5f5f1\",\n            borderRadius: \"15px\",\n            cursor: \"pointer\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n              style: selectedBoxIndex === index ? {\n                color: \"#0388fc\",\n                textDecoration: \"underline\"\n              } : {},\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdCQU9HSixLQUFLLENBQUNLO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQXNCRSw4REFBQyw0REFBRDtBQUFBLHlCQUNHLEdBREgsRUFFR3RCLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQ00sSUFBUCxFQUFhLENBQ3ZCLGtDQUR1QixFQUV2QixtQkFGdUIsRUFHdkIsa0JBSHVCLENBQWIsQ0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkY7QUFBQSxXQVlPYixLQVpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUE4REQsT0FoRUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxRkQsQ0FySE07O0dBQU1sQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29sbGVjdGlvbnMvQ2FyZC9DYXJkLmpzeD81MDNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIFN0eWxlZENhcmREZXNjcmlwdGlvbixcclxuICBTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIsXHJcbiAgU3R5bGVkQ2FyZFRpdGxlLFxyXG4gIFN0eWxlZENhcmRPcHRpb25Cb3gsXHJcbiAgU3R5bGVkQ2FyZENvbnRhaW5lckNvbHVtbixcclxufSBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAoe1xyXG4gIGltYWdlLFxyXG4gIHF1b3RlcyxcclxuICBicmllZkltYWdlLFxyXG4gIHNlYXJjaEltYWdlLFxyXG4gIHBpdGNoSW1hZ2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRCb3hJbmRleCwgc2V0U2VsZWN0ZWRCb3hJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgYm9sZFBocmFzZXMgPSAoc3RyaW5nLCBwaHJhc2VzKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyaW5nO1xyXG4gICAgcGhyYXNlcy5mb3JFYWNoKChwaHJhc2UpID0+IHtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KHBocmFzZSkuam9pbihgfCR7cGhyYXNlfXxgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAuc3BsaXQoXCJ8XCIpXHJcbiAgICAgIC5tYXAoKHBhcnQsIGluZGV4KSA9PlxyXG4gICAgICAgIHBocmFzZXMuaW5jbHVkZXMocGFydCkgPyA8c3Ryb25nIGtleT17aW5kZXh9PntwYXJ0fTwvc3Ryb25nPiA6IHBhcnRcclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRJbWFnZUZvckluZGV4ID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGJyaWVmSW1hZ2U7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBzZWFyY2hJbWFnZTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDIpIHtcclxuICAgICAgcmV0dXJuIHBpdGNoSW1hZ2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENhcmRDb250YWluZXJDb2x1bW5cclxuICAgICAgZ2FwPXtcIjJyZW1cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGZsZXhEaXJlY3Rpb249e1wicm93XCJ9XHJcbiAgICAgIG1hcmdpblRvcD17XCIycmVtXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIgd2lkdGg9e1wiMTVyZW1cIn0gaGVpZ2h0PXtcIjEwMCVcIn0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICB3aWR0aD17aW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2ltYWdlLmhlaWdodH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3ggbWF4SGVpZ2h0PXtcImZpdC1jb250ZW50XCJ9PlxyXG4gICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSBnZXRJbWFnZUZvckluZGV4KGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94XHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg9e1wiMjVyZW1cIn1cclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcInJvd1wifVxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgZ2FwPXtcIjFyZW1cIn1cclxuICAgICAgICAgICAgICB3aWR0aD17XCIxMDAlXCJ9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtcImZpdC1jb250ZW50XCJ9XHJcbiAgICAgICAgICAgICAgcGFkZGluZz17XCIxcmVtXCJ9XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcIiNmNWY1ZjFcIn1cclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiMTVweFwifVxyXG4gICAgICAgICAgICAgIGN1cnNvcj17XCJwb2ludGVyXCJ9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEJveEluZGV4KGluZGV4KX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEJveEluZGV4ID09PSBpbmRleCA/IFwiMnB4IHNvbGlkICMwMzg4ZmNcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIHdpZHRoPXtcIjRyZW1cIn0gaGVpZ2h0PXtcIjNyZW1cIn0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtzZWxlY3RlZEltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3NlbGVjdGVkSW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9e1wiMjVyZW1cIn1cclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBnYXA9e1wiMXJlbVwifVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcImZpdC1jb250ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPXtcIjFyZW1cIn1cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCIjZjVmNWYxXCJ9XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiMTVweFwifVxyXG4gICAgICAgICAgICAgICAgY3Vyc29yPXtcInBvaW50ZXJcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJveEluZGV4ID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcIiMwMzg4ZmNcIiwgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtxdW90ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7Ym9sZFBocmFzZXMocXVvdGUuZGVzYywgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYnJpZWYgd3JpdGluZyBvciBzaW1wbGUgZ3VpZGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNyaXRlcmlhIG1hdGNoaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwaXRjaCBtYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZENhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3R5bGVkQ2FyZERlc2NyaXB0aW9uIiwiU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZE9wdGlvbkJveCIsIlN0eWxlZENhcmRDb250YWluZXJDb2x1bW4iLCJ1c2VTdGF0ZSIsIkNhcmQiLCJpbWFnZSIsInF1b3RlcyIsImJyaWVmSW1hZ2UiLCJzZWFyY2hJbWFnZSIsInBpdGNoSW1hZ2UiLCJzZWxlY3RlZEJveEluZGV4Iiwic2V0U2VsZWN0ZWRCb3hJbmRleCIsImJvbGRQaHJhc2VzIiwic3RyaW5nIiwicGhyYXNlcyIsInJlc3VsdCIsImZvckVhY2giLCJwaHJhc2UiLCJzcGxpdCIsImpvaW4iLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJpbmNsdWRlcyIsImdldEltYWdlRm9ySW5kZXgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1b3RlIiwic2VsZWN0ZWRJbWFnZSIsImJvcmRlciIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ0aXRsZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});