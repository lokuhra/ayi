webpackHotUpdate(1,{

/***/ "./src/components/Layout/AppBar.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/AppBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/withWidth */ "./node_modules/@material-ui/core/esm/withWidth/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Layout/AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var styles = function styles(_ref) {
  var spacing = _ref.spacing,
      transitions = _ref.transitions,
      breakpoints = _ref.breakpoints,
      palette = _ref.palette,
      shape = _ref.shape;
  return {
    header: {
      fontWeight: 900,
      minWidth: 0,
      fontSize: 18
    },
    grow: {
      flexGrow: 1
    },
    search: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      marginRight: 8,
      borderRadius: shape.borderRadius,
      background: palette.grey[200],
      '&:hover': {
        background: palette.grey[300]
      },
      marginLeft: 0,
      width: '100%'
    }, breakpoints.up('sm'), {
      marginLeft: spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderRadius: 4,
      paddingTop: spacing(1),
      paddingRight: spacing(1),
      paddingBottom: spacing(1),
      paddingLeft: spacing(10),
      transition: transitions.create('width'),
      width: '100%'
    }, breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
};

var HeaderEx = function HeaderEx(_ref2) {
  var classes = _ref2.classes,
      screen = _ref2.screen;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: "/static/img/Farmapago.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Back Office Intranet"), __jsx("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), screen === 'xs' && __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "more_vert")), screen === 'sm' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "favorite")), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "more_vert"))), Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])('md', screen) && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "favorite")), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "phone")), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "camera"))));
};

HeaderEx.defaultProps = {
  screen: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(HeaderEx));

/***/ })

})
//# sourceMappingURL=1.15d56b0f8d9114093b1d.hot-update.js.map