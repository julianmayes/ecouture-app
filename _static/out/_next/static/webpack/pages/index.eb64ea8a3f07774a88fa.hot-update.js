webpackHotUpdate_N_E("pages/index",{

/***/ "./comps/Button.js":
/*!*************************!*\
  !*** ./comps/Button.js ***!
  \*************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_julian_Documents_school_ecouture_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/color */ \"./public/color.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/julian/Documents/school/ecouture-app/comps/Button.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_julian_Documents_school_ecouture_app_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\nwidth: 300px;\\nheight: 50px;\\nfont-weight: 700;\\ncolor: white;\\nbackground: blue;\\nborder: 1px solid \", \";\\ntransition: 0.5s cubic-bezier(0,.1,.1,2);\\ncursor: pointer;\\n\\n&:hover{\\n  background: white;\\n  color: blue;\\n  filter: drop-shadow(1px 1px 10px white);\\n  transform:scale(1.1)\\n}\\n\\n&:focus{\\n  outline: none;\\n}\\n\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar ButtonUI = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject(), _public_color__WEBPACK_IMPORTED_MODULE_4__[\"color\"].ble);\n_c = ButtonUI;\nvar Button = function Button(_ref) {\n  _s();\n\n  var _ref$label = _ref.label,\n      label = _ref$label === void 0 ? \"hey\" : _ref$label;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      click = _useState[0],\n      setClick = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hover = _useState2[0],\n      setHover = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ButtonUI, {\n      onMouseEnter: function onMouseEnter() {\n        setHover(true);\n      },\n      onMouseLeave: function onMouseLeave() {\n        setHover(false);\n        setClick(false);\n      },\n      onClick: function onClick() {\n        setClick(true);\n      },\n      style: {\n        transform: click ? 'scale(0.9)' : hover ? 'scale(1.1)' : 'scale(1.0)',\n        border: click ? '1px solid white' : hover ? '1px solid white' : '1px solid white',\n        background: click ? 'white' : hover ? 'white' : 'blue'\n      },\n      type: \"button\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Button, \"8rKC294SHkNhUCboCIWUD3Q0Wxg=\");\n\n_c2 = Button;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ButtonUI\");\n$RefreshReg$(_c2, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvQnV0dG9uLmpzPzQ3M2IiXSwibmFtZXMiOlsiQnV0dG9uVUkiLCJzdHlsZWQiLCJidXR0b24iLCJjb2xvciIsImJsZSIsIkJ1dHRvbiIsImxhYmVsIiwidXNlU3RhdGUiLCJjbGljayIsInNldENsaWNrIiwiaG92ZXIiLCJzZXRIb3ZlciIsInRyYW5zZm9ybSIsImJvcmRlciIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixvQkFPTUMsbURBQUssQ0FBQ0MsR0FQWixDQUFkO0tBQU1KLFE7QUF5QkMsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBcUI7QUFBQTs7QUFBQSx3QkFBbEJDLEtBQWtCO0FBQUEsTUFBbEJBLEtBQWtCLDJCQUFaLEtBQVk7O0FBQUEsa0JBRWpCQyxzREFBUSxDQUFDLEtBQUQsQ0FGUztBQUFBLE1BRXBDQyxLQUZvQztBQUFBLE1BRTdCQyxRQUY2Qjs7QUFBQSxtQkFHakJGLHNEQUFRLENBQUMsS0FBRCxDQUhTO0FBQUEsTUFHcENHLEtBSG9DO0FBQUEsTUFHN0JDLFFBSDZCOztBQUt6QyxzQkFFRTtBQUFBLDJCQUVFLHFFQUFDLFFBQUQ7QUFDQSxrQkFBWSxFQUFFLHdCQUFNO0FBQ2xCQSxnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELE9BSEQ7QUFJQSxrQkFBWSxFQUFFLHdCQUFNO0FBQ2xCQSxnQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBRixnQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELE9BUEQ7QUFRQSxhQUFPLEVBQUUsbUJBQU07QUFDYkEsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxPQVZEO0FBV0EsV0FBSyxFQUFFO0FBQ0xHLGlCQUFTLEVBQUdKLEtBQUssR0FBRyxZQUFILEdBQWtCRSxLQUFLLEdBQUcsWUFBSCxHQUFrQixZQURyRDtBQUVMRyxjQUFNLEVBQUdMLEtBQUssR0FBRyxpQkFBSCxHQUF1QkUsS0FBSyxHQUFHLGlCQUFILEdBQXVCLGlCQUY1RDtBQUdMSSxrQkFBVSxFQUFHTixLQUFLLEdBQUcsT0FBSCxHQUFhRSxLQUFLLEdBQUcsT0FBSCxHQUFhO0FBSDVDLE9BWFA7QUFlRyxVQUFJLEVBQUMsUUFmUjtBQUFBLGdCQWdCR0o7QUFoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQUZGO0FBeUJELENBOUJNOztHQUFNRCxNOztNQUFBQSxNIiwiZmlsZSI6Ii4vY29tcHMvQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9jb2xvcidcblxuY29uc3QgQnV0dG9uVUkgPSBzdHlsZWQuYnV0dG9uYFxuXG53aWR0aDogMzAwcHg7XG5oZWlnaHQ6IDUwcHg7XG5mb250LXdlaWdodDogNzAwO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZDogYmx1ZTtcbmJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuYmxlfTtcbnRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAsLjEsLjEsMik7XG5jdXJzb3I6IHBvaW50ZXI7XG5cbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmx1ZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDEwcHggd2hpdGUpO1xuICB0cmFuc2Zvcm06c2NhbGUoMS4xKVxufVxuXG4mOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IGxhYmVsPVwiaGV5XCIgfSkgPT4ge1xuXG5jb25zdCBbY2xpY2ssIHNldENsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKVxuY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuXG4gICAgPD5cblxuICAgICAgPEJ1dHRvblVJXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgc2V0SG92ZXIodHJ1ZSlcbiAgICAgIH19XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgc2V0SG92ZXIoZmFsc2UpXG4gICAgICAgIHNldENsaWNrKGZhbHNlKVxuICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2V0Q2xpY2sodHJ1ZSlcbiAgICAgIH19XG4gICAgICBzdHlsZT17e1xuICAgICAgICB0cmFuc2Zvcm0gOiBjbGljayA/ICdzY2FsZSgwLjkpJyA6IGhvdmVyID8gJ3NjYWxlKDEuMSknIDogJ3NjYWxlKDEuMCknLFxuICAgICAgICBib3JkZXIgOiBjbGljayA/ICcxcHggc29saWQgd2hpdGUnIDogaG92ZXIgPyAnMXB4IHNvbGlkIHdoaXRlJyA6ICcxcHggc29saWQgd2hpdGUnLFxuICAgICAgICBiYWNrZ3JvdW5kIDogY2xpY2sgPyAnd2hpdGUnIDogaG92ZXIgPyAnd2hpdGUnIDogJ2JsdWUnLFxuICAgICAgfX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0J1dHRvblVJPlxuXG4gICAgPC8+XG4gICk7XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Button.js\n");

/***/ })

})