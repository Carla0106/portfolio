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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ParticlesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ParticlesContainer */ \"./components/ParticlesContainer.js\");\n/* harmony import */ var _components_ProjectsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectsBtn */ \"./components/ProjectsBtn.js\");\n/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../variants */ \"./variants.js\");\n// next image\n\nvar _s = $RefreshSig$();\n\n\n// components\n\n\n\n// framer motion\n\n// variants\n\nconst Home = ()=>{\n    _s();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Initial width on component mount\n        setWindowWidth(window.innerWidth);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const isMobile = windowWidth <= 600;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-primary/30 h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full bg-gradient-to-r from-primary/10 via-black/90 to-black/50 flex items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center flex flex-col justify-center \".concat(isMobile ? \"px-4\" : \"px-0\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h1, {\n                            variants: (0,_variants__WEBPACK_IMPORTED_MODULE_6__.fadeIn)(\"down\", 0.2),\n                            initial: \"hidden\",\n                            animate: \"show\",\n                            exit: \"hidden\",\n                            className: \"hi\",\n                            style: {\n                                fontSize: isMobile ? \"6vw\" : \"4vw\",\n                                marginBottom: \"1rem\"\n                            },\n                            children: [\n                                \"Transforming ideas \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 32\n                                }, undefined),\n                                \" Into \",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-accent\",\n                                    children: \"Digital Reality\"\n                                }, void 0, false, {\n                                    fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p, {\n                            variants: (0,_variants__WEBPACK_IMPORTED_MODULE_6__.fadeIn)(\"down\", 0.3),\n                            initial: \"hidden\",\n                            animate: \"show\",\n                            exit: \"hidden\",\n                            className: \"max-w-sm xl:max-w-63\",\n                            style: {\n                                fontSize: isMobile ? \"2vw\" : \"1.5vw\",\n                                marginBottom: \"1.5rem\"\n                            },\n                            children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                            variants: (0,_variants__WEBPACK_IMPORTED_MODULE_6__.fadeIn)(\"down\", 0.4),\n                            initial: \"hidden\",\n                            animate: \"show\",\n                            exit: \"hidden\",\n                            className: \"flex justify-center\",\n                            style: {\n                                margin: isMobile ? \"1rem 0\" : \"1vw 2.5vw\",\n                                fontSize: isMobile ? \"3vw\" : \"1.5vw\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectsBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full absolute right-0 bottom-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParticlesContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                variants: (0,_variants__WEBPACK_IMPORTED_MODULE_6__.fadeIn)(\"up\", 0.5),\n                                initial: \"hidden\",\n                                animate: \"show\",\n                                exit: \"hidden\",\n                                transition: {\n                                    duration: 1,\n                                    ease: \"easeInOut\"\n                                },\n                                className: \"w-full h-full max-w-[497px] max-h-[439px] absolute \".concat(isMobile ? \"-bottom-20\" : \"-bottom-32\", \" lg:bottom-0 lg:right-[13%]\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/Paulina/Desktop/Duoc UC/portafolio/ethan-portfolio-starter-main/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"pbbkZhtjlGc4tSJD9AQY+caR7fc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxhQUFhOzs7QUFDa0I7QUFDYTtBQUU1QyxhQUFhO0FBQ3FEO0FBQ2Q7QUFDVjtBQUUxQyxnQkFBZ0I7QUFDdUI7QUFFdkMsV0FBVztBQUMwQjtBQUVyQyxNQUFNUSxPQUFPLElBQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1TLGVBQWUsSUFBTTtZQUN6QkQsZUFBZUUsT0FBT0MsVUFBVTtRQUNsQztRQUVBRCxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxtQ0FBbUM7UUFDbkNELGVBQWVFLE9BQU9DLFVBQVU7UUFFaEMsT0FBTyxJQUFNO1lBQ1hELE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssV0FBV1AsZUFBZTtJQUVoQyxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFXLDRDQUF1RSxPQUEzQkYsV0FBVyxTQUFTLE1BQU07O3NDQUVwRiw4REFBQ1Ysb0RBQVM7NEJBQ1JjLFVBQVViLGlEQUFNQSxDQUFDLFFBQVE7NEJBQ3pCYyxTQUFROzRCQUNSQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMTCxXQUFVOzRCQUNWTSxPQUFPO2dDQUFFQyxVQUFVVCxXQUFXLFFBQVEsS0FBSztnQ0FBRVUsY0FBYzs0QkFBTzs7Z0NBQ25FOzhDQUNvQiw4REFBQ0M7Ozs7O2dDQUFLO2dDQUFPOzhDQUNoQyw4REFBQ0M7b0NBQUtWLFdBQVU7OENBQWM7Ozs7Ozs7Ozs7OztzQ0FHaEMsOERBQUNaLG1EQUFROzRCQUNQYyxVQUFVYixpREFBTUEsQ0FBQyxRQUFROzRCQUN6QmMsU0FBUTs0QkFDUkMsU0FBUTs0QkFDUkMsTUFBSzs0QkFDTEwsV0FBVTs0QkFDVk0sT0FBTztnQ0FBRUMsVUFBVVQsV0FBVyxRQUFRLE9BQU87Z0NBQUVVLGNBQWM7NEJBQVM7c0NBQ3ZFOzs7Ozs7c0NBS0QsOERBQUNwQixxREFBVTs0QkFDVGMsVUFBVWIsaURBQU1BLENBQUMsUUFBUTs0QkFDekJjLFNBQVE7NEJBQ1JDLFNBQVE7NEJBQ1JDLE1BQUs7NEJBQ0xMLFdBQVU7NEJBQ1ZNLE9BQU87Z0NBQUVNLFFBQVFkLFdBQVcsV0FBVyxXQUFXO2dDQUFFUyxVQUFVVCxXQUFXLFFBQVEsT0FBTzs0QkFBQzs7OENBRXpGLDhEQUFDWiwrREFBV0E7Ozs7O2dDQUFHOzs7Ozs7Ozs7Ozs7OzhCQUluQiw4REFBQ2E7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7O3NDQUVmLDhEQUFDZixzRUFBa0JBOzs7OztzQ0FFbkIsOERBQUNjOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDWixxREFBVTtnQ0FDVGMsVUFBVWIsaURBQU1BLENBQUMsTUFBTTtnQ0FDdkJjLFNBQVE7Z0NBQ1JDLFNBQVE7Z0NBQ1JDLE1BQUs7Z0NBQ0xRLFlBQVk7b0NBQUNDLFVBQVU7b0NBQUdDLE1BQU07Z0NBQVc7Z0NBQzNDZixXQUFXLHNEQUE2RixPQUF2Q0YsV0FBVyxlQUFlLFlBQVksRUFBQzswQ0FFeEcsNEVBQUNYLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0FwRk1HO0tBQUFBO0FBc0ZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dCBpbWFnZVxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBQYXJ0aWNsZXNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0aWNsZXNDb250YWluZXInO1xuaW1wb3J0IFByb2plY3RzQnRuIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHNCdG4nO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL0F2YXRhcic7XG5cbi8vIGZyYW1lciBtb3Rpb25cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8vIHZhcmlhbnRzXG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tICcuLi92YXJpYW50cyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICAvLyBJbml0aWFsIHdpZHRoIG9uIGNvbXBvbmVudCBtb3VudFxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDYwMDtcblxuICByZXR1cm4gKCBcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctcHJpbWFyeS8zMCBoLWZ1bGwnPlxuICAgICAgey8qIHRleHQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeS8xMCB2aWEtYmxhY2svOTAgdG8tYmxhY2svNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgJHtpc01vYmlsZSA/ICdweC00JyA6ICdweC0wJ31gfT5cbiAgICAgICAgICB7LyogdGl0bGUgKi99XG4gICAgICAgICAgPG1vdGlvbi5oMSBcbiAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oJ2Rvd24nLCAwLjIpfVxuICAgICAgICAgICAgaW5pdGlhbD0naGlkZGVuJ1xuICAgICAgICAgICAgYW5pbWF0ZT0nc2hvdydcbiAgICAgICAgICAgIGV4aXQ9J2hpZGRlbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naGknXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogaXNNb2JpbGUgPyAnNnZ3JyA6ICc0dncnLCBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fSAvLyBUYW1hw7FvIGRlbCB0w610dWxvIHkgbWFyZ2VuIGluZmVyaW9yXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHJhbnNmb3JtaW5nIGlkZWFzIDxiciAvPiBJbnRvIHsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYWNjZW50Jz5EaWdpdGFsIFJlYWxpdHk8L3NwYW4+XG4gICAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgICAgey8qIHN1YnRpdGxlICovfVxuICAgICAgICAgIDxtb3Rpb24ucCBcbiAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oJ2Rvd24nLCAwLjMpfVxuICAgICAgICAgICAgaW5pdGlhbD0naGlkZGVuJ1xuICAgICAgICAgICAgYW5pbWF0ZT0nc2hvdydcbiAgICAgICAgICAgIGV4aXQ9J2hpZGRlbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWF4LXctc20geGw6bWF4LXctNjMnXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogaXNNb2JpbGUgPyAnMnZ3JyA6ICcxLjV2dycsIG1hcmdpbkJvdHRvbTogJzEuNXJlbScgfX0gLy8gVGFtYcOxbyBkZWwgc3VidMOtdHVsbyB5IG1hcmdlbiBpbmZlcmlvclxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgIHsvKiBidG4gKi99XG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKCdkb3duJywgMC40KX1cbiAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcbiAgICAgICAgICAgIGFuaW1hdGU9J3Nob3cnXG4gICAgICAgICAgICBleGl0PSdoaWRkZW4nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IGlzTW9iaWxlID8gJzFyZW0gMCcgOiAnMXZ3IDIuNXZ3JywgZm9udFNpemU6IGlzTW9iaWxlID8gJzN2dycgOiAnMS41dncnIH19IC8vIEVzcGFjaWFkbyB5IHRhbWHDsW8gZGVsIGJvdMOzblxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQcm9qZWN0c0J0biAvPiB7LyogVGFtYcOxbyBkZWwgYm90w7NuICovfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgICB7LyogaW1hZ2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHJpZ2h0LTAgYm90dG9tLTAnPlxuICAgICAgICAgIHsvKiBiZyBpbWcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLW5vbmUgeGw6YmctZXhwbG9zaW9uIHhsOmJnLWNvdmVyIHhsOmJnLXJpZ2h0IHhsOmJnLW5vLXJlcGVhdCB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIG1peC1ibGVuZC1jb2xvci1kb2RnZSB0cmFuc2xhdGUtei0wJz48L2Rpdj5cbiAgICAgICAgICB7LyogcGFydGljbGVzICovfVxuICAgICAgICAgIDxQYXJ0aWNsZXNDb250YWluZXIgLz5cbiAgICAgICAgICB7LyogYXZhdGFyIGltZyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKCd1cCcsIDAuNSl9XG4gICAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcbiAgICAgICAgICAgICAgYW5pbWF0ZT0nc2hvdydcbiAgICAgICAgICAgICAgZXhpdD0naGlkZGVuJ1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDEsIGVhc2U6ICdlYXNlSW5PdXQnfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCBtYXgtdy1bNDk3cHhdIG1heC1oLVs0MzlweF0gYWJzb2x1dGUgJHtpc01vYmlsZSA/ICctYm90dG9tLTIwJyA6ICctYm90dG9tLTMyJ30gbGc6Ym90dG9tLTAgbGc6cmlnaHQtWzEzJV1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYXJ0aWNsZXNDb250YWluZXIiLCJQcm9qZWN0c0J0biIsIkF2YXRhciIsIm1vdGlvbiIsImZhZGVJbiIsIkhvbWUiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNNb2JpbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0Iiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImJyIiwic3BhbiIsInAiLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});