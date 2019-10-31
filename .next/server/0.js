exports.ids = [0];
exports.modules = {

/***/ "./src/components/Layout/AppBar.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/AppBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/withWidth */ "@material-ui/core/withWidth");
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/NotificationsNone */ "@material-ui/icons/NotificationsNone");
/* harmony import */ var _material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Layout/AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const styles = ({
  spacing,
  transitions,
  breakpoints,
  palette,
  shape
}) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300]
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto'
    }
  },
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
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  subtitleMargin: {
    marginLeft: '15px'
  },
  SvgIconTitle: {
    marginLeft: '38px'
  },
  SvgIconTitle2: {
    marginRight: '10px'
  },
  FabMarginRight: {
    marginLeft: '15px',
    marginRight: '38px'
  }
});

const HeaderEx = ({
  classes,
  screen
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx(react_svg__WEBPACK_IMPORTED_MODULE_6___default.a, {
  className: classes.SvgIconTitle,
  src: "/static/img/Farmapago.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
  className: classes.subtitleMargin,
  variant: "subtitle2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "Back Office Intranet"), __jsx("div", {
  className: classes.grow,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}), screen === 'xs' && __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "more_vert")), Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2__["isWidthUp"])('md', screen) && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx(_material_ui_icons_NotificationsNone__WEBPACK_IMPORTED_MODULE_7___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8___default.a, {
  variant: "extended",
  size: "medium",
  color: "primary",
  "aria-label": "add",
  className: classes.FabMarginRight,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx(react_svg__WEBPACK_IMPORTED_MODULE_6___default.a, {
  className: classes.SvgIconTitle2,
  src: "/static/img/avatar_farmalink.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}), "Farmalink")));

HeaderEx.defaultProps = {
  screen: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(HeaderEx));

/***/ }),

/***/ "./src/components/Layout/Drawer.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Drawer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Layout/Drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const list = [{
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

const Drawer = () => {
  const {
    0: selectSection,
    1: setSelectSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    overflowX: {
      overflowX: 'hidden',
      backgroundColor: "#2b42a4",
      height: "100%",
      paddingTop: "51px"
    },
    marginRightListItem: {
      marginRight: "10px"
    },
    colorWhite: {
      color: "#f5f5f5"
    }
  }));
  const classes = useStyles();

  const Item = ({
    primaryText,
    icon,
    index
  }) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    selected: index === selectSection,
    button: true,
    onClick: () => setSelectSection(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.colorWhite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, icon)), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.colorWhite,
    primary: primaryText,
    primaryTypographyProps: {
      noWrap: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }));

  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.overflowX,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, list.map(({
    primaryText,
    icon
  }, index) => __jsx(Item, {
    key: primaryText,
    index: index,
    primaryText: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      component: "span",
      variant: "body2",
      className: classes.colorWhite,
      color: "textPrimary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, primaryText),
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })));
};

Drawer.propTypes = {};
Drawer.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mui-layout */ "mui-layout");
/* harmony import */ var mui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ "./src/components/Layout/Drawer.js");
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppBar */ "./src/components/Layout/AppBar.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const App = ({
  children
}) => {
  const {
    0: preset,
    1: setPreset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('createStandardLayout');
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
    backgroundColor: {
      backgroundColor: "#2b42a4"
    },
    marginRightListItem: {
      marginRight: "10px"
    }
  }));
  const classes = useStyles();
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
    __self: undefined
  }, __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    renderMenuIcon: open => open ? __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, ({
    screen,
    collapsed
  }) => __jsx(_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    screen: screen,
    collapsed: collapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    renderIcon: open => open ? __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }),
    className: classes.backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx(mui_layout__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

};;
//# sourceMappingURL=0.js.map