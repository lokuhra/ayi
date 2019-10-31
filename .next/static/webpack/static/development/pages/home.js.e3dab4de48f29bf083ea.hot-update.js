webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Filters_Table_LastMovements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Filters/Table/LastMovements */ "./src/components/Filters/Table/LastMovements/index.js");
/* harmony import */ var _src_components_Filters_Table_Settlements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Filters/Table/Settlements */ "./src/components/Filters/Table/Settlements/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../src/components/Layout */ "./src/components/Layout/index.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../src/components/Layout */ "./src/components/Layout/index.js")];
    },
    modules: ['../src/components/Layout']
  }
});

var Index = function Index() {
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
    return {
      padding: {
        paddingTop: "51px",
        paddingLeft: "15px",
        paddingRight: "15px"
      }
    };
  });
  var classes = useStyles();
  return __jsx(DynamicComponentWithNoSSR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_src_components_Filters_Table_Settlements__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_src_components_Filters_Table_LastMovements__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/index.js":
/*!*************************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table */ "./src/components/Filters/Table/LastMovements/Table.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Menu */ "./src/components/Filters/Menu/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var TableIndex = function TableIndex() {
  var _useToggle = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useToggle"])(false),
      _useToggle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useToggle, 2),
      isCardView = _useToggle2[0],
      toggleIsCardView = _useToggle2[1];

  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
    return {
      margin: {
        marginTop: "51px"
      }
    };
  });
  var classes = useStyles();
  return __jsx("div", {
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onCLickViewCard: toggleIsCardView,
    typeMenu: "Últimos Movimientos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableIndex);

/***/ })

})
//# sourceMappingURL=home.js.e3dab4de48f29bf083ea.hot-update.js.map