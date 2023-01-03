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

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst Navbar = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.navVariants,\n        initial: \"hidden\",\n        whileInView: \"show\",\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].xPaddings, \" py-8 relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[50%] inset-0 gradient-01\"\n            }, void 0, false, {\n                fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/Navbar.jsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex justify-between gap-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/search.svg\",\n                        alt: \"search\",\n                        className: \"w-[24px] h-[24px] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/Navbar.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-extrabold text-[24px] leading-[30px] text-white\",\n                        children: \"METAVERSUS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/Navbar.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/Navbar.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vladislavdisackij/Documents/GitHub/react-framemotion-site/components/Navbar.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUV1QztBQUNSO0FBQ2U7QUFFOUMsTUFBTUcsU0FBUyxrQkFDYiw4REFBQ0gscURBQVU7UUFDVEssVUFBVUgsc0RBQVdBO1FBQ3JCSSxTQUFRO1FBQ1JDLGFBQVk7UUFDWkMsV0FBVyxHQUFvQixPQUFqQlAseURBQWdCLEVBQUM7OzBCQUMvQiw4REFBQ1M7Z0JBQUlGLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0U7Z0JBQUlGLFdBQVcsR0FBcUIsT0FBbEJQLDBEQUFpQixFQUFDOztrQ0FDbkMsOERBQUNXO3dCQUNDQyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKTixXQUFVOzs7Ozs7a0NBRVosOERBQUNPO3dCQUFHUCxXQUFVO2tDQUF1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBYnJFTDtBQW9CTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgbmF2VmFyaWFudHMgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxtb3Rpb24ubmF2XG4gICAgdmFyaWFudHM9e25hdlZhcmlhbnRzfVxuICAgIGluaXRpYWw9J2hpZGRlbidcbiAgICB3aGlsZUluVmlldz0nc2hvdydcbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy54UGFkZGluZ3N9IHB5LTggcmVsYXRpdmVgfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1bNTAlXSBpbnNldC0wIGdyYWRpZW50LTAxJyAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5uZXJXaWR0aH0gbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtOGB9PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9Jy9zZWFyY2guc3ZnJ1xuICAgICAgICBhbHQ9J3NlYXJjaCdcbiAgICAgICAgY2xhc3NOYW1lPSd3LVsyNHB4XSBoLVsyNHB4XSBvYmplY3QtY29udGFpbidcbiAgICAgIC8+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWV4dHJhYm9sZCB0ZXh0LVsyNHB4XSBsZWFkaW5nLVszMHB4XSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgTUVUQVZFUlNVU1xuICAgICAgPC9oMj5cbiAgICA8L2Rpdj5cbiAgPC9tb3Rpb24ubmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsIm5hdlZhcmlhbnRzIiwiTmF2YmFyIiwibmF2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJjbGFzc05hbWUiLCJ4UGFkZGluZ3MiLCJkaXYiLCJpbm5lcldpZHRoIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});