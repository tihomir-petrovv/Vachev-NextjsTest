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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./collections/Card/elements.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Tihomir\\\\Desktop\\\\vachev\\\\Vachev-NextjsTest\\\\collections\\\\Card\\\\Card.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Card = function Card(_ref) {\n  _s();\n\n  var image = _ref.image,\n      quotes = _ref.quotes,\n      briefImage = _ref.briefImage,\n      searchImage = _ref.searchImage,\n      pitchImage = _ref.pitchImage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      selectedBoxIndex = _useState[0],\n      setSelectedBoxIndex = _useState[1];\n\n  var boldPhrases = function boldPhrases(string, phrases) {\n    var result = string;\n    phrases.forEach(function (phrase) {\n      result = result.split(phrase).join(\"|\".concat(phrase, \"|\"));\n    });\n    return result.split(\"|\").map(function (part, index) {\n      return phrases.includes(part) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"strong\", {\n        children: part\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 34\n      }, _this) : part;\n    });\n  };\n\n  var getImageForIndex = function getImageForIndex(index) {\n    if (index === 0) {\n      return briefImage;\n    } else if (index === 1) {\n      return searchImage;\n    } else if (index === 2) {\n      return pitchImage;\n    }\n\n    return null;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardContainerColumn, {\n    style: {\n      gap: \"2rem\",\n      justifyContent: \"center\",\n      flexDirection: \"row\",\n      marginTop: \"2rem\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n      style: {\n        width: \"15rem\",\n        height: \"100%\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"responsive\",\n        src: image.src,\n        alt: image.alt,\n        width: image.width,\n        height: image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n      maxHeight: \"fit-content\",\n      children: quotes.map(function (quote, index) {\n        var selectedImage = getImageForIndex(index);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n          style: {\n            maxWidth: \"25rem\",\n            flexDirection: \"row\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            gap: \"1rem\",\n            width: \"100%\",\n            height: \"fit-content\",\n            padding: \"1rem\",\n            backgroundColor: \"#f5f5f1\",\n            borderRadius: \"15px\",\n            cursor: \"pointer\",\n            border: selectedBoxIndex === index ? \"2px solid #0388fc\" : \"none\"\n          },\n          onClick: function onClick() {\n            return setSelectedBoxIndex(index);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardImageContainer, {\n            style: {\n              width: \"4rem\",\n              height: \"fit-content\"\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              layout: \"responsive\",\n              src: selectedImage.src,\n              alt: selectedImage.alt,\n              width: selectedImage.width,\n              height: selectedImage.height\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardOptionBox, {\n            style: {\n              maxWidth: \"25rem\",\n              flexDirection: \"column\",\n              justifyContent: \"center\",\n              alignItems: \"center\",\n              width: \"100%\",\n              height: \"fit-content\",\n              backgroundColor: \"#f5f5f1\",\n              cursor: \"pointer\"\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardTitle, {\n              style: selectedBoxIndex === index ? {\n                color: \"#0388fc\",\n                textDecoration: \"underline\"\n              } : {},\n              children: quote.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_elements__WEBPACK_IMPORTED_MODULE_1__.StyledCardDescription, {\n              children: [\" \", boldPhrases(quote.desc, [\"brief writing or simple guidance\", \"criteria matching\", \"pitch management\"])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Card, \"cEfiYH2RIBS7Asz0kNROOv0psns=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb2xsZWN0aW9ucy9DYXJkL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7O0FBRU8sSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FNZDtBQUFBOztBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTs7QUFDSixrQkFBZ0ROLCtDQUFRLENBQUMsSUFBRCxDQUF4RDtBQUFBLE1BQU9PLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsRUFBcUI7QUFDdkMsUUFBSUMsTUFBTSxHQUFHRixNQUFiO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDMUJGLE1BQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDRyxLQUFQLENBQWFELE1BQWIsRUFBcUJFLElBQXJCLFlBQThCRixNQUE5QixPQUFUO0FBQ0QsS0FGRDtBQUdBLFdBQU9GLE1BQU0sQ0FDVkcsS0FESSxDQUNFLEdBREYsRUFFSkUsR0FGSSxDQUVBLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGFBQ0hSLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQkYsSUFBakIsaUJBQXlCO0FBQUEsa0JBQXFCQTtBQUFyQixTQUFhQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBekIsR0FBK0RELElBRDVEO0FBQUEsS0FGQSxDQUFQO0FBS0QsR0FWRDs7QUFZQSxNQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNGLEtBQUQsRUFBVztBQUNsQyxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQU9mLFVBQVA7QUFDRCxLQUZELE1BRU8sSUFBSWUsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDdEIsYUFBT2QsV0FBUDtBQUNELEtBRk0sTUFFQSxJQUFJYyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUN0QixhQUFPYixVQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0FURDs7QUFXQSxzQkFDRSw4REFBQyxnRUFBRDtBQUNFLFNBQUssRUFBRTtBQUNMZ0IsTUFBQUEsR0FBRyxFQUFFLE1BREE7QUFFTEMsTUFBQUEsY0FBYyxFQUFFLFFBRlg7QUFHTEMsTUFBQUEsYUFBYSxFQUFFLEtBSFY7QUFJTEMsTUFBQUEsU0FBUyxFQUFFO0FBSk4sS0FEVDtBQUFBLDRCQVFFLDhEQUFDLCtEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLFFBQUFBLEtBQUssRUFBRSxPQURGO0FBRUxDLFFBQUFBLE1BQU0sRUFBRTtBQUZILE9BRFQ7QUFBQSw2QkFNRSw4REFBQyxtREFBRDtBQUNFLGNBQU0sRUFBQyxZQURUO0FBRUUsV0FBRyxFQUFFekIsS0FBSyxDQUFDMEIsR0FGYjtBQUdFLFdBQUcsRUFBRTFCLEtBQUssQ0FBQzJCLEdBSGI7QUFJRSxhQUFLLEVBQUUzQixLQUFLLENBQUN3QixLQUpmO0FBS0UsY0FBTSxFQUFFeEIsS0FBSyxDQUFDeUI7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQXNCRSw4REFBQywwREFBRDtBQUFxQixlQUFTLEVBQUUsYUFBaEM7QUFBQSxnQkFDR3hCLE1BQU0sQ0FBQ2MsR0FBUCxDQUFXLFVBQUNhLEtBQUQsRUFBUVgsS0FBUixFQUFrQjtBQUM1QixZQUFNWSxhQUFhLEdBQUdWLGdCQUFnQixDQUFDRixLQUFELENBQXRDO0FBQ0EsNEJBQ0UsOERBQUMsMERBQUQ7QUFDRSxlQUFLLEVBQUU7QUFDTGEsWUFBQUEsUUFBUSxFQUFFLE9BREw7QUFFTFIsWUFBQUEsYUFBYSxFQUFFLEtBRlY7QUFHTEQsWUFBQUEsY0FBYyxFQUFFLFFBSFg7QUFJTFUsWUFBQUEsVUFBVSxFQUFFLFFBSlA7QUFLTFgsWUFBQUEsR0FBRyxFQUFFLE1BTEE7QUFNTEksWUFBQUEsS0FBSyxFQUFFLE1BTkY7QUFPTEMsWUFBQUEsTUFBTSxFQUFFLGFBUEg7QUFRTE8sWUFBQUEsT0FBTyxFQUFFLE1BUko7QUFTTEMsWUFBQUEsZUFBZSxFQUFFLFNBVFo7QUFVTEMsWUFBQUEsWUFBWSxFQUFFLE1BVlQ7QUFXTEMsWUFBQUEsTUFBTSxFQUFFLFNBWEg7QUFZTEMsWUFBQUEsTUFBTSxFQUNKL0IsZ0JBQWdCLEtBQUtZLEtBQXJCLEdBQTZCLG1CQUE3QixHQUFtRDtBQWJoRCxXQURUO0FBaUJFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVgsbUJBQW1CLENBQUNXLEtBQUQsQ0FBekI7QUFBQSxXQWpCWDtBQUFBLGtDQW1CRSw4REFBQywrREFBRDtBQUEwQixpQkFBSyxFQUFFO0FBQy9CTyxjQUFBQSxLQUFLLEVBQUUsTUFEd0I7QUFFL0JDLGNBQUFBLE1BQU0sRUFBRTtBQUZ1QixhQUFqQztBQUFBLG1DQUlFLDhEQUFDLG1EQUFEO0FBQ0Usb0JBQU0sRUFBQyxZQURUO0FBRUUsaUJBQUcsRUFBRUksYUFBYSxDQUFDSCxHQUZyQjtBQUdFLGlCQUFHLEVBQUVHLGFBQWEsQ0FBQ0YsR0FIckI7QUFJRSxtQkFBSyxFQUFFRSxhQUFhLENBQUNMLEtBSnZCO0FBS0Usb0JBQU0sRUFBRUssYUFBYSxDQUFDSjtBQUx4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkYsZUErQkUsOERBQUMsMERBQUQ7QUFDRSxpQkFBSyxFQUFFO0FBQ0xLLGNBQUFBLFFBQVEsRUFBRSxPQURMO0FBRUxSLGNBQUFBLGFBQWEsRUFBRSxRQUZWO0FBR0xELGNBQUFBLGNBQWMsRUFBRSxRQUhYO0FBSUxVLGNBQUFBLFVBQVUsRUFBRSxRQUpQO0FBS0xQLGNBQUFBLEtBQUssRUFBRSxNQUxGO0FBTUxDLGNBQUFBLE1BQU0sRUFBRSxhQU5IO0FBT0xRLGNBQUFBLGVBQWUsRUFBRSxTQVBaO0FBUUxFLGNBQUFBLE1BQU0sRUFBRTtBQVJILGFBRFQ7QUFBQSxvQ0FZRSw4REFBQyxzREFBRDtBQUNFLG1CQUFLLEVBQ0g5QixnQkFBZ0IsS0FBS1ksS0FBckIsR0FDSTtBQUFFb0IsZ0JBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxnQkFBQUEsY0FBYyxFQUFFO0FBQXBDLGVBREosR0FFSSxFQUpSO0FBQUEsd0JBT0dWLEtBQUssQ0FBQ1c7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGLGVBcUJFLDhEQUFDLDREQUFEO0FBQUEseUJBQ0csR0FESCxFQUVHaEMsV0FBVyxDQUFDcUIsS0FBSyxDQUFDWSxJQUFQLEVBQWEsQ0FDdkIsa0NBRHVCLEVBRXZCLG1CQUZ1QixFQUd2QixrQkFIdUIsQ0FBYixDQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9CRjtBQUFBLFdBZ0JPdkIsS0FoQlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWdFRCxPQWxFQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4RkQsQ0E5SE07O0dBQU1sQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29sbGVjdGlvbnMvQ2FyZC9DYXJkLmpzeD81MDNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIFN0eWxlZENhcmREZXNjcmlwdGlvbixcclxuICBTdHlsZWRDYXJkSW1hZ2VDb250YWluZXIsXHJcbiAgU3R5bGVkQ2FyZFRpdGxlLFxyXG4gIFN0eWxlZENhcmRPcHRpb25Cb3gsXHJcbiAgU3R5bGVkQ2FyZENvbnRhaW5lckNvbHVtbixcclxufSBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSAoe1xyXG4gIGltYWdlLFxyXG4gIHF1b3RlcyxcclxuICBicmllZkltYWdlLFxyXG4gIHNlYXJjaEltYWdlLFxyXG4gIHBpdGNoSW1hZ2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRCb3hJbmRleCwgc2V0U2VsZWN0ZWRCb3hJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgYm9sZFBocmFzZXMgPSAoc3RyaW5nLCBwaHJhc2VzKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc3RyaW5nO1xyXG4gICAgcGhyYXNlcy5mb3JFYWNoKChwaHJhc2UpID0+IHtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KHBocmFzZSkuam9pbihgfCR7cGhyYXNlfXxgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAuc3BsaXQoXCJ8XCIpXHJcbiAgICAgIC5tYXAoKHBhcnQsIGluZGV4KSA9PlxyXG4gICAgICAgIHBocmFzZXMuaW5jbHVkZXMocGFydCkgPyA8c3Ryb25nIGtleT17aW5kZXh9PntwYXJ0fTwvc3Ryb25nPiA6IHBhcnRcclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRJbWFnZUZvckluZGV4ID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGJyaWVmSW1hZ2U7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBzZWFyY2hJbWFnZTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDIpIHtcclxuICAgICAgcmV0dXJuIHBpdGNoSW1hZ2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENhcmRDb250YWluZXJDb2x1bW5cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBnYXA6IFwiMnJlbVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lclxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogXCIxNXJlbVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICB3aWR0aD17aW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2ltYWdlLmhlaWdodH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0eWxlZENhcmRJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPFN0eWxlZENhcmRPcHRpb25Cb3ggbWF4SGVpZ2h0PXtcImZpdC1jb250ZW50XCJ9PlxyXG4gICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSBnZXRJbWFnZUZvckluZGV4KGluZGV4KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjI1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZ2FwOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQm94SW5kZXggPT09IGluZGV4ID8gXCIycHggc29saWQgIzAzODhmY1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQm94SW5kZXgoaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcmRJbWFnZUNvbnRhaW5lciBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZEltYWdlLnNyY31cclxuICAgICAgICAgICAgICAgICAgYWx0PXtzZWxlY3RlZEltYWdlLmFsdH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3NlbGVjdGVkSW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17c2VsZWN0ZWRJbWFnZS5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRDYXJkT3B0aW9uQm94XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNWY1ZjFcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZENhcmRUaXRsZVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCb3hJbmRleCA9PT0gaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgID8geyBjb2xvcjogXCIjMDM4OGZjXCIsIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cXVvdGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge2JvbGRQaHJhc2VzKHF1b3RlLmRlc2MsIFtcclxuICAgICAgICAgICAgICAgICAgICBcImJyaWVmIHdyaXRpbmcgb3Igc2ltcGxlIGd1aWRhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjcml0ZXJpYSBtYXRjaGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGl0Y2ggbWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZE9wdGlvbkJveD5cclxuICAgICAgICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9TdHlsZWRDYXJkT3B0aW9uQm94PlxyXG4gICAgPC9TdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlN0eWxlZENhcmREZXNjcmlwdGlvbiIsIlN0eWxlZENhcmRJbWFnZUNvbnRhaW5lciIsIlN0eWxlZENhcmRUaXRsZSIsIlN0eWxlZENhcmRPcHRpb25Cb3giLCJTdHlsZWRDYXJkQ29udGFpbmVyQ29sdW1uIiwidXNlU3RhdGUiLCJDYXJkIiwiaW1hZ2UiLCJxdW90ZXMiLCJicmllZkltYWdlIiwic2VhcmNoSW1hZ2UiLCJwaXRjaEltYWdlIiwic2VsZWN0ZWRCb3hJbmRleCIsInNldFNlbGVjdGVkQm94SW5kZXgiLCJib2xkUGhyYXNlcyIsInN0cmluZyIsInBocmFzZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwicGhyYXNlIiwic3BsaXQiLCJqb2luIiwibWFwIiwicGFydCIsImluZGV4IiwiaW5jbHVkZXMiLCJnZXRJbWFnZUZvckluZGV4IiwiZ2FwIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJxdW90ZSIsInNlbGVjdGVkSW1hZ2UiLCJtYXhXaWR0aCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiYm9yZGVyIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./collections/Card/Card.jsx\n");

/***/ })

});