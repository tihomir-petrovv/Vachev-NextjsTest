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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(string, phrases) {\n    var result = string;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 34\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    style: {\n      gap: \"2rem\",\n      justifyContent: \"center\",\n      flexDirection: \"row\",\n      marginTop: \"2rem\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      style: {\n        width: \"15rem\",\n        height: \"100%\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      style: {\n        maxHeight: \"fit-content\",\n        gap: \"1rem\"\n      },\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          style: {\n            maxWidth: \"25rem\",\n            flexDirection: \"row\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            width: \"100%\",\n            height: \"fit-content\",\n            padding: \"0.3rem\",\n            backgroundColor: \"#f5f5f1\",\n            borderRadius: \"15px\",\n            cursor: \"pointer\",\n            border: selectedBoxIndex === index ? \"2px solid #0388fc\" : \"none\"\n          },\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n            style: {\n              width: \"4rem\",\n              height: \"fit-content\"\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n            style: {\n              maxWidth: \"25rem\",\n              flexDirection: \"column\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              width: \"100%\",\n              height: \"fit-content\",\n              backgroundColor: \"#f5f5f1\",\n              cursor: \"pointer\"\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n              style: selectedBoxIndex === index ? {\n                color: \"#0388fc\",\n                textDecoration: \"underline\"\n              } : {},\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsYUFOSDtBQU9MUyxjQUFBQSxlQUFlLEVBQUUsU0FQWjtBQVFMRSxjQUFBQSxNQUFNLEVBQUU7QUFSSCxhQURUO0FBQUEsb0NBWUUsOERBQUMsc0RBQUQ7QUFDRSxtQkFBSyxFQUNIL0IsZ0JBQWdCLEtBQUtZLEtBQXJCLEdBQ0k7QUFBRXFCLGdCQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkMsZ0JBQUFBLGNBQWMsRUFBRTtBQUFwQyxlQURKLEdBRUksRUFKUjtBQUFBLHdCQU9HVixLQUFLLENBQUNXO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixlQXFCRSw4REFBQyw0REFBRDtBQUFBLHlCQUNHLEdBREgsRUFFR2pDLFdBQVcsQ0FBQ3NCLEtBQUssQ0FBQ1ksSUFBUCxFQUFhLENBQ3ZCLGtDQUR1QixFQUV2QixtQkFGdUIsRUFHdkIsa0JBSHVCLENBQWIsQ0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5QkY7QUFBQSxXQWVPeEIsS0FmUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBK0RELE9BakVBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdHRCxDQWhJTTs7R0FBTWxCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4PzUwM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkQ2FyZERlc2NyaXB0aW9uLFxyXG4gIFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lcixcclxuICBTdHlsZWRDYXJkVGl0bGUsXHJcbiAgU3R5bGVkQ2FyZE9wdGlvbkJveCxcclxuICBTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9ICh7XHJcbiAgaW1hZ2UsXHJcbiAgcXVvdGVzLFxyXG4gIGJyaWVmSW1hZ2UsXHJcbiAgc2VhcmNoSW1hZ2UsXHJcbiAgcGl0Y2hJbWFnZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEJveEluZGV4LCBzZXRTZWxlY3RlZEJveEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBib2xkUGhyYXNlcyA9IChzdHJpbmcsIHBocmFzZXMpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBzdHJpbmc7XHJcbiAgICBwaHJhc2VzLmZvckVhY2goKHBocmFzZSkgPT4ge1xyXG4gICAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQocGhyYXNlKS5qb2luKGB8JHtwaHJhc2V9fGApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgIC5zcGxpdChcInxcIilcclxuICAgICAgLm1hcCgocGFydCwgaW5kZXgpID0+XHJcbiAgICAgICAgcGhyYXNlcy5pbmNsdWRlcyhwYXJ0KSA/IDxzdHJvbmcga2V5PXtpbmRleH0+e3BhcnR9PC9zdHJvbmc+IDogcGFydFxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEltYWdlRm9ySW5kZXggPSAoaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYnJpZWZJbWFnZTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHNlYXJjaEltYWdlO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICByZXR1cm4gcGl0Y2hJbWFnZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ2FyZENvbnRhaW5lckNvbHVtblxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGdhcDogXCIycmVtXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMnJlbVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjE1cmVtXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cclxuICAgICAgICAgIHdpZHRoPXtpbWFnZS53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17aW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveCBzdHlsZT17e1xyXG4gICAgICAgIG1heEhlaWdodDpcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgZ2FwOlwiMXJlbVwiLFxyXG4gICAgICB9fT5cclxuICAgICAgICB7cXVvdGVzLm1hcCgocXVvdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gZ2V0SW1hZ2VGb3JJbmRleChpbmRleCk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZE9wdGlvbkJveFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjNyZW1cIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjVmNWYxXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjpcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCb3hJbmRleCA9PT0gaW5kZXggPyBcIjJweCBzb2xpZCAjMDM4OGZjXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRCb3hJbmRleChpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI0cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkSW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3NlbGVjdGVkSW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17c2VsZWN0ZWRJbWFnZS53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtzZWxlY3RlZEltYWdlLmhlaWdodH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3hcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjI1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmMVwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJveEluZGV4ID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiBcIiMwMzg4ZmNcIiwgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtxdW90ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7Ym9sZFBocmFzZXMocXVvdGUuZGVzYywgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYnJpZWYgd3JpdGluZyBvciBzaW1wbGUgZ3VpZGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNyaXRlcmlhIG1hdGNoaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwaXRjaCBtYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1N0eWxlZENhcmRPcHRpb25Cb3g+XHJcbiAgICA8L1N0eWxlZENhcmRDb250YWluZXJDb2x1bW4+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3R5bGVkQ2FyZERlc2NyaXB0aW9uIiwiU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZE9wdGlvbkJveCIsIlN0eWxlZENhcmRDb250YWluZXJDb2x1bW4iLCJ1c2VTdGF0ZSIsIkNhcmQiLCJpbWFnZSIsInF1b3RlcyIsImJyaWVmSW1hZ2UiLCJzZWFyY2hJbWFnZSIsInBpdGNoSW1hZ2UiLCJzZWxlY3RlZEJveEluZGV4Iiwic2V0U2VsZWN0ZWRCb3hJbmRleCIsImJvbGRQaHJhc2VzIiwic3RyaW5nIiwicGhyYXNlcyIsInJlc3VsdCIsImZvckVhY2giLCJwaHJhc2UiLCJzcGxpdCIsImpvaW4iLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJpbmNsdWRlcyIsImdldEltYWdlRm9ySW5kZXgiLCJnYXAiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsIm1heEhlaWdodCIsInF1b3RlIiwic2VsZWN0ZWRJbWFnZSIsIm1heFdpZHRoIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJib3JkZXIiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwidGl0bGUiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});