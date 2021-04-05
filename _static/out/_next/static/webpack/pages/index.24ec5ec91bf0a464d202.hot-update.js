webpackHotUpdate_N_E("pages/index",{

/***/ "./comps/Button.js":
/*!*************************!*\
  !*** ./comps/Button.js ***!
  \*************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_julian_Documents_school_ecouture_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/color */ \"./public/color.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/julian/Documents/school/ecouture-app/comps/Button.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_julian_Documents_school_ecouture_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\nwidth: 300px;\\nheight: 50px;\\nfont-weight: 700;\\ncolor: white;\\nbackground: blue;\\nborder: 1px solid blue;\\ntransition: 0.5s cubic-bezier(0,.1,.1,2);\\ncursor: pointer;\\n\\n&:hover{\\n  background: white;\\n  color: blue;\\n  filter: drop-shadow(1px 1px 10px white);\\n  transform:scale(1.1)\\n}\\n\\n&:focus{\\n  outline: none;\\n}\\n\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar ButtonUI = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject());\n_c = ButtonUI;\nvar Button = function Button(_ref) {\n  _s();\n\n  var _ref$label = _ref.label,\n      label = _ref$label === void 0 ? \"hey\" : _ref$label;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      click = _useState[0],\n      setClick = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hover = _useState2[0],\n      setHover = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ButtonUI, {\n      onMouseEnter: function onMouseEnter() {\n        setHover(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        setHover(false);\n        setClick(false);\n      },\n      onClick: function onClick() {\n        setClick(true);\n      },\n      style: {\n        transform: click ? 'scale(0.9)' : hover ? 'scale(1.1)' : 'scale(1.0)',\n        border: click ? '1px solid white' : hover ? '1px solid white' : '1px solid white',\n        background: click ? 'white' : hover ? 'white' : 'blue'\n      },\n      type: \"button\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Button, \"8rKC294SHkNhUCboCIWUD3Q0Wxg=\");\n\n_c2 = Button;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ButtonUI\");\n$RefreshReg$(_c2, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvQnV0dG9uLmpzPzQ3M2IiXSwibmFtZXMiOlsiQnV0dG9uVUkiLCJzdHlsZWQiLCJidXR0b24iLCJCdXR0b24iLCJsYWJlbCIsInVzZVN0YXRlIiwiY2xpY2siLCJzZXRDbGljayIsImhvdmVyIiwic2V0SG92ZXIiLCJ0cmFuc2Zvcm0iLCJib3JkZXIiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsbUJBQWQ7S0FBTUYsUTtBQXlCQyxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQjtBQUFBOztBQUFBLHdCQUFsQkMsS0FBa0I7QUFBQSxNQUFsQkEsS0FBa0IsMkJBQVosS0FBWTs7QUFBQSxrQkFFakJDLHNEQUFRLENBQUMsS0FBRCxDQUZTO0FBQUEsTUFFcENDLEtBRm9DO0FBQUEsTUFFN0JDLFFBRjZCOztBQUFBLG1CQUdqQkYsc0RBQVEsQ0FBQyxLQUFELENBSFM7QUFBQSxNQUdwQ0csS0FIb0M7QUFBQSxNQUc3QkMsUUFINkI7O0FBS3pDLHNCQUVFO0FBQUEsMkJBRUUscUVBQUMsUUFBRDtBQUNBLGtCQUFZLEVBQUUsd0JBQU07QUFDbEJBLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsT0FIRDtBQUlBLGtCQUFZLEVBQUUsd0JBQU07QUFDbEJBLGdCQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0FGLGdCQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsT0FQRDtBQVFBLGFBQU8sRUFBRSxtQkFBTTtBQUNiQSxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELE9BVkQ7QUFXQSxXQUFLLEVBQUU7QUFDTEcsaUJBQVMsRUFBR0osS0FBSyxHQUFHLFlBQUgsR0FBa0JFLEtBQUssR0FBRyxZQUFILEdBQWtCLFlBRHJEO0FBRUxHLGNBQU0sRUFBR0wsS0FBSyxHQUFHLGlCQUFILEdBQXVCRSxLQUFLLEdBQUcsaUJBQUgsR0FBdUIsaUJBRjVEO0FBR0xJLGtCQUFVLEVBQUdOLEtBQUssR0FBRyxPQUFILEdBQWFFLEtBQUssR0FBRyxPQUFILEdBQWE7QUFINUMsT0FYUDtBQWVHLFVBQUksRUFBQyxRQWZSO0FBQUEsZ0JBZ0JHSjtBQWhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsbUJBRkY7QUF5QkQsQ0E5Qk07O0dBQU1ELE07O01BQUFBLE0iLCJmaWxlIjoiLi9jb21wcy9CdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y29sb3J9IGZyb20gJy4uL3B1YmxpYy9jb2xvcidcblxuY29uc3QgQnV0dG9uVUkgPSBzdHlsZWQuYnV0dG9uYFxuXG53aWR0aDogMzAwcHg7XG5oZWlnaHQ6IDUwcHg7XG5mb250LXdlaWdodDogNzAwO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZDogYmx1ZTtcbmJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG50cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLC4xLC4xLDIpO1xuY3Vyc29yOiBwb2ludGVyO1xuXG4mOmhvdmVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsdWU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxMHB4IHdoaXRlKTtcbiAgdHJhbnNmb3JtOnNjYWxlKDEuMSlcbn1cblxuJjpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuXG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBsYWJlbD1cImhleVwiIH0pID0+IHtcblxuY29uc3QgW2NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZShmYWxzZSlcbmNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcblxuICAgIDw+XG5cbiAgICAgIDxCdXR0b25VSVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgIHNldEhvdmVyKHRydWUpXG4gICAgICB9fVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgIHNldEhvdmVyKGZhbHNlKVxuICAgICAgICBzZXRDbGljayhmYWxzZSlcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHNldENsaWNrKHRydWUpXG4gICAgICB9fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtIDogY2xpY2sgPyAnc2NhbGUoMC45KScgOiBob3ZlciA/ICdzY2FsZSgxLjEpJyA6ICdzY2FsZSgxLjApJyxcbiAgICAgICAgYm9yZGVyIDogY2xpY2sgPyAnMXB4IHNvbGlkIHdoaXRlJyA6IGhvdmVyID8gJzFweCBzb2xpZCB3aGl0ZScgOiAnMXB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZCA6IGNsaWNrID8gJ3doaXRlJyA6IGhvdmVyID8gJ3doaXRlJyA6ICdibHVlJyxcbiAgICAgIH19IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9CdXR0b25VST5cblxuICAgIDwvPlxuICApO1xufTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Button.js\n");

/***/ }),

/***/ "./public/color.js":
/*!*************************!*\
  !*** ./public/color.js ***!
  \*************************/
/*! exports provided: color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\nvar color = {\n  'blue': '#3884FF'\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2NvbG9yLmpzPzFhMjIiXSwibmFtZXMiOlsiY29sb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxLQUFLLEdBQUc7QUFDakIsVUFBUztBQURRLENBQWQiLCJmaWxlIjoiLi9wdWJsaWMvY29sb3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29sb3IgPSB7XG4gICAgJ2JsdWUnIDogJyMzODg0RkYnXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/color.js\n");

/***/ })

})