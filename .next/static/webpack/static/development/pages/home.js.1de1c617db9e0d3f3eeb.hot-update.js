webpackHotUpdate("static/development/pages/home.js",{

/***/ "./src/components/Filters/Menu/index.js":
/*!**********************************************!*\
  !*** ./src/components/Filters/Menu/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ViewModule */ "./node_modules/@material-ui/icons/ViewModule.js");
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/SearchOutlined */ "./node_modules/@material-ui/icons/SearchOutlined.js");
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CloudDownloadOutlined */ "./node_modules/@material-ui/icons/CloudDownloadOutlined.js");
/* harmony import */ var _material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SubMenu */ "./src/components/Filters/Menu/SubMenu.js");

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





















var MyFab = function MyFab(_ref) {
  var children = _ref.children;
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
    return {
      fab: {
        margin: theme.spacing(1)
      },
      buttons: {
        background: '#fafafa',
        border: 0,
        borderRadius: 'none',
        boxShadow: 'none',
        color: 'black'
      }
    };
  });
  var classes = useStyles();
  return __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "extended",
    "aria-label": "delete",
    className: classes.buttons,
    size: 'small',
    color: 'inherit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, children);
};

var SelectCOmp = function SelectCOmp() {
  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "age-required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Fechas"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_17__["default"], {
    displayEmpty: true,
    value: 'Último Mes',
    inputProps: {
      id: 'age-required'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Último Mes',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\xDAltimo Mes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Periodo Actual',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Periodo Actual"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Hoy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Hoy"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Ayer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Ayer"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Última Semana',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\xDAltima Semana"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Últimos 15 días',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\xDAltimos 15 d\xEDas"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Otro Periodo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Otro Periodo"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: 'Últimos años',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\xDAltimos a\xF1os")));
};

function Download() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
    return {
      root: {
        position: 'relative'
      },
      paper: {
        position: 'absolute',
        top: 36,
        right: 0,
        left: 0,
        zIndex: 1500
      }
    };
  });
  var classes = useStyles();

  var handleClick = function handleClick() {
    setOpen(function (prev) {
      return !prev;
    });
  };

  var handleClickAway = function handleClickAway() {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClickAway: handleClickAway,
    className: classes.zIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), "Descargar")), open ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaFilePdf"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), ".pdf"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaFileExcel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), ".xls"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaFileWord"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), ".doc")) : null)));
}

var Menu = function Menu(_ref2) {
  var onCLickViewCard = _ref2.onCLickViewCard,
      typeMenu = _ref2.typeMenu;

  var _useToggle = Object(react_use__WEBPACK_IMPORTED_MODULE_19__["useToggle"])(false),
      _useToggle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useToggle, 2),
      isOpenSub = _useToggle2[0],
      toggleIsOpenSub = _useToggle2[1];

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 2,
    alignItems: 'center',
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, typeMenu)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 10,
    container: true,
    justify: "space-between",
    direction: "row",
    alignItems: 'stretch',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    xs: 2,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_14__["default"], {
    endAdornment: __jsx(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    xs: 2,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(SelectCOmp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    xs: 2,
    alignItems: 'center',
    direction: "row",
    onClick: toggleIsOpenSub,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(MyFab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), "Filtrar")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    xs: 2,
    alignItems: 'center',
    onClick: onCLickViewCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(MyFab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), "Vista Card")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    xs: 2,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(Download, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }))), isOpenSub && __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    alignItems: 'center',
    justify: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_20__["default"], {
    type: 'Periodo',
    filterType: 'period',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_20__["default"], {
    type: 'Detalle',
    filterType: 'client',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_20__["default"], {
    type: 'Monto',
    filterType: 'amount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=home.js.1de1c617db9e0d3f3eeb.hot-update.js.map