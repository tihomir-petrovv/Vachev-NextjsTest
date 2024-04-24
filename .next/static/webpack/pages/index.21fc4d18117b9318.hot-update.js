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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(string, phrases) {\n    var result = string;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 34\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    style: {\n      gap: \"2rem\",\n      justifyContent: \"center\",\n      flexDirection: \"row\",\n      marginTop: \"2rem\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      style: {\n        width: \"15rem\",\n        height: \"100%\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          style: {\n            maxWidth: \"25rem\",\n            flexDirection: \"row\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            gap: \"1rem\",\n            width: \"100%\",\n            height: \"fit-content\",\n            padding: \"1rem\",\n            backgroundColor: \"#f5f5f1\",\n            borderRadius: \"15px\",\n            cursor: \"pointer\",\n            border: selectedBoxIndex === index ? \"2px solid #0388fc\" : \"none\"\n          },\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n            width: \"4rem\",\n            height: \"fit-content\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n            style: {\n              maxWidth: \"25rem\",\n              flexDirection: \"column\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              width: \"100%\",\n              height: \"fit-content\",\n              backgroundColor: \"#f5f5f1\",\n              cursor: \"pointer\"\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n              style: selectedBoxIndex === index ? {\n                color: \"#0388fc\",\n                textDecoration: \"underline\"\n              } : {},\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURUO0FBQUEsb0NBWUUsOERBQUMsc0RBQUQ7QUFDRSxtQkFBSyxFQUNIOUIsZ0JBQWdCLEtBQUtZLEtBQXJCLEdBQ0k7QUFBRW9CLGdCQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsZ0JBQUFBLGNBQWMsRUFBRTtBQUFwQyxlQURKLEdBRUksRUFKUjtBQUFBLHdCQU9HVixLQUFLLENBQUNXO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixlQXFCRSw4REFBQyw0REFBRDtBQUFBLHlCQUNHLEdBREgsRUFFR2hDLFdBQVcsQ0FBQ3FCLEtBQUssQ0FBQ1ksSUFBUCxFQUFhLENBQ3ZCLGtDQUR1QixFQUV2QixtQkFGdUIsRUFHdkIsa0JBSHVCLENBQWIsQ0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkY7QUFBQSxXQWdCT3ZCLEtBaEJQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUE2REQsT0EvREE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkZELENBM0hNOztHQUFNbEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbGxlY3Rpb25zL0NhcmQvQ2FyZC5qc3g/NTAzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBTdHlsZWRDYXJkRGVzY3JpcHRpb24sXHJcbiAgU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyLFxyXG4gIFN0eWxlZENhcmRUaXRsZSxcclxuICBTdHlsZWRDYXJkT3B0aW9uQm94LFxyXG4gIFN0eWxlZENhcmRDb250YWluZXJDb2x1bW4sXHJcbn0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gKHtcclxuICBpbWFnZSxcclxuICBxdW90ZXMsXHJcbiAgYnJpZWZJbWFnZSxcclxuICBzZWFyY2hJbWFnZSxcclxuICBwaXRjaEltYWdlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkQm94SW5kZXgsIHNldFNlbGVjdGVkQm94SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGJvbGRQaHJhc2VzID0gKHN0cmluZywgcGhyYXNlcykgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHN0cmluZztcclxuICAgIHBocmFzZXMuZm9yRWFjaCgocGhyYXNlKSA9PiB7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdChwaHJhc2UpLmpvaW4oYHwke3BocmFzZX18YCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRcclxuICAgICAgLnNwbGl0KFwifFwiKVxyXG4gICAgICAubWFwKChwYXJ0LCBpbmRleCkgPT5cclxuICAgICAgICBwaHJhc2VzLmluY2x1ZGVzKHBhcnQpID8gPHN0cm9uZyBrZXk9e2luZGV4fT57cGFydH08L3N0cm9uZz4gOiBwYXJ0XHJcbiAgICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2VGb3JJbmRleCA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBicmllZkltYWdlO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gc2VhcmNoSW1hZ2U7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAyKSB7XHJcbiAgICAgIHJldHVybiBwaXRjaEltYWdlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZ2FwOiBcIjJyZW1cIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRDYXJkSW1hZ2VDb250YWluZXJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiMTVyZW1cIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgd2lkdGg9e2ltYWdlLndpZHRofVxyXG4gICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94IG1heEhlaWdodD17XCJmaXQtY29udGVudFwifT5cclxuICAgICAgICB7cXVvdGVzLm1hcCgocXVvdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gZ2V0SW1hZ2VGb3JJbmRleChpbmRleCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGdhcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNWY1ZjFcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEJveEluZGV4ID09PSBpbmRleCA/IFwiMnB4IHNvbGlkICMwMzg4ZmNcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEJveEluZGV4KGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIgd2lkdGg9e1wiNHJlbVwifSBoZWlnaHQ9e1wiZml0LWNvbnRlbnRcIn0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtzZWxlY3RlZEltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3NlbGVjdGVkSW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNWY1ZjFcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkVGl0bGVcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQm94SW5kZXggPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHsgY29sb3I6IFwiIzAzODhmY1wiLCB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3F1b3RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHtib2xkUGhyYXNlcyhxdW90ZS5kZXNjLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJicmllZiB3cml0aW5nIG9yIHNpbXBsZSBndWlkYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY3JpdGVyaWEgbWF0Y2hpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBpdGNoIG1hbmFnZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZE9wdGlvbkJveD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU3R5bGVkQ2FyZE9wdGlvbkJveD5cclxuICAgIDwvU3R5bGVkQ2FyZENvbnRhaW5lckNvbHVtbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTdHlsZWRDYXJkRGVzY3JpcHRpb24iLCJTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIiLCJTdHlsZWRDYXJkVGl0bGUiLCJTdHlsZWRDYXJkT3B0aW9uQm94IiwiU3R5bGVkQ2FyZENvbnRhaW5lckNvbHVtbiIsInVzZVN0YXRlIiwiQ2FyZCIsImltYWdlIiwicXVvdGVzIiwiYnJpZWZJbWFnZSIsInNlYXJjaEltYWdlIiwicGl0Y2hJbWFnZSIsInNlbGVjdGVkQm94SW5kZXgiLCJzZXRTZWxlY3RlZEJveEluZGV4IiwiYm9sZFBocmFzZXMiLCJzdHJpbmciLCJwaHJhc2VzIiwicmVzdWx0IiwiZm9yRWFjaCIsInBocmFzZSIsInNwbGl0Iiwiam9pbiIsIm1hcCIsInBhcnQiLCJpbmRleCIsImluY2x1ZGVzIiwiZ2V0SW1hZ2VGb3JJbmRleCIsImdhcCIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwicXVvdGUiLCJzZWxlY3RlZEltYWdlIiwibWF4V2lkdGgiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsImJvcmRlciIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ0aXRsZSIsImRlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});