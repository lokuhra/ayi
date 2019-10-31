webpackHotUpdate(1,{

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mui-layout */ "./node_modules/mui-layout/dist/index.js");
/* harmony import */ var mui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ "./src/components/Layout/Drawer.js");
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppBar */ "./src/components/Layout/AppBar.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var App = function App(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('createStandardLayout'),
      preset = _useState[0],
      setPreset = _useState[1];

  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
    return {
      backgroundColor: {
        backgroundColor: "#2b42a4"
      },
      marginRightListItem: {
        marginRight: "10px"
      }
    };
  });
  var classes = useStyles();
  return __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    config: mui_layout__WEBPACK_IMPORTED_MODULE_1__["presets"][preset]({
      headerPosition: 'relative'
    }),
    style: {
      minHeight: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    renderMenuIcon: function renderMenuIcon(open) {
      return open ? __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }) : __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    },
    className: classes.backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, function (_ref2) {
    var screen = _ref2.screen,
        collapsed = _ref2.collapsed;
    return __jsx(_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      screen: screen,
      collapsed: collapsed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }), __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    renderIcon: function renderIcon(open) {
      return open ? __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }) : __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
    },
    className: classes.backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=1.5dcf49bf50e427f7ebe2.hot-update.js.map