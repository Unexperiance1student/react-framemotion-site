"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        onClick: ()=>handleClick(id),\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/ExploreCard.jsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/ExploreCard.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/headset.svg\",\n                        alt: \"headset\",\n                        className: \"w-1/2 h-1/2 object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/ExploreCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/ExploreCard.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/ExploreCard.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/ExploreCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3VDO0FBQ1I7QUFDVTtBQUV6QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFO1dBQ3BFLDhEQUFDVCxxREFBVTtRQUNUVyxTQUFTLElBQU1GLFlBQVlMO1FBQzNCUSxVQUFVVixxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUNqRE0sV0FBVyxZQUVWLE9BRENMLFdBQVdKLEtBQUssNEJBQTRCLHdCQUF3QixFQUNyRTs7MEJBQ0QsOERBQUNVO2dCQUNDQyxLQUFLVjtnQkFDTFcsS0FBS1Y7Z0JBQ0xPLFdBQVU7Ozs7OztZQUVYTCxXQUFXSixtQkFDViw4REFBQ2E7Z0JBQUdKLFdBQVU7MEJBQ1hQOzs7OzswQ0FHSCw4REFBQ0k7MEJBQ0MsNEVBQUNBOzhCQUNDLDRFQUFDSTt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7O3lCQUlqQjs7Ozs7OztBQUNTO0tBM0JSVjtBQThCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeD8yM2NjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgRXhwbG9yZUNhcmQgPSAoeyBpZCwgaW1nVXJsLCB0aXRsZSwgaW5kZXgsIGFjdGl2ZSwgaGFuZGxlQ2xpY2sgfSkgPT4gKFxuICA8bW90aW9uLmRpdlxuICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGlkKX1cbiAgICB2YXJpYW50cz17ZmFkZUluKCdyaWdodCcsICdzcHJpbmcnLCBpbmRleCAqIDAuNSwgMC43NSl9XG4gICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtcbiAgICAgIGFjdGl2ZSA9PT0gaWQgPyAnbGc6ZmxleC1bMy41XSBmbGV4LVsxMF0nIDogJ2xnOmZsZXgtWzAuNV0gZmxleC1bMl0nXG4gICAgfSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1bMTcwcHhdIGgtWzcwMHB4XSB0cmFuc2l0aW9uLVtmbGV4XSBkdXJhdGlvbi1bMC43c10gZWFzZS1vdXQtZmxleCBjdXJzb3ItcG9pbnRlcmB9PlxuICAgIDxpbWdcbiAgICAgIHNyYz17aW1nVXJsfVxuICAgICAgYWx0PXt0aXRsZX1cbiAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1bMjRweF0nXG4gICAgLz5cbiAgICB7YWN0aXZlICE9PSBpZCA/IChcbiAgICAgIDxoMyBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgc206dGV4dC1bMjZweF0gdGV4dC1bMThweF0gdGV4dC13aGl0ZSBhYnNvbHV0ZSB6LTAgbGc6Ym90dG9tLTIwIGxnOnJvdGF0ZS1bLTkwZGVnXSBsZzpvcmlnaW4tWzAsMF0nPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gzPlxuICAgICkgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz0nL2hlYWRzZXQuc3ZnJ1xuICAgICAgICAgICAgYWx0PSdoZWFkc2V0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEvMiBoLTEvMiBvYmplY3QtY29udGFpbidcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVDYXJkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsIkV4cGxvcmVDYXJkIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsImluZGV4IiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});