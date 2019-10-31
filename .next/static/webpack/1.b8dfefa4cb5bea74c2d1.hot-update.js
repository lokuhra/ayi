webpackHotUpdate(1,{

/***/ "./src/components/Layout/Drawer.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Drawer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Layout/Drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var list = [{
  primaryText: 'Inicio',
  icon: 'home'
}, {
  primaryText: 'Transferencias en Farmacoins',
  icon: 'redo'
}, {
  primaryText: 'Cargar Saldo en Pesos',
  icon: 'reply'
}, {
  primaryText: 'Liquidaciones',
  icon: 'web'
}, {
  primaryText: 'Solicitudes de Transferencia',
  icon: 'mobile_screen_share'
}, {
  primaryText: 'Últimos movimientos',
  icon: 'check_circle_outline'
}];

var Drawer = function Drawer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      selectSection = _useState[0],
      setSelectSection = _useState[1];

  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
    return {
      overflowX: {
        overflowX: 'hidden',
        backgroundColor: "#2b42a4",
        height: "100%",
        padding: "10px"
      },
      backgroundColorDrawer: {
        backgroundColor: "#2b42a4"
      }
    };
  });
  var classes = useStyles();

  var Item = function Item(_ref) {
    var primaryText = _ref.primaryText,
        icon = _ref.icon,
        index = _ref.index;
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selected: index === selectSection,
      button: true,
      onClick: function onClick() {
        return setSelectSection(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, icon)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      primary: primaryText,
      primaryTypographyProps: {
        noWrap: true
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  };

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.overflowX,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, list.map(function (_ref2, index) {
    var primaryText = _ref2.primaryText,
        icon = _ref2.icon;
    return __jsx(Item, {
      key: primaryText,
      index: index,
      primaryText: primaryText,
      icon: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    });
  }));
};

Drawer.propTypes = {};
Drawer.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=1.b8dfefa4cb5bea74c2d1.hot-update.js.map