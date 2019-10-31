module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/home.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Filters_Table_LastMovements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Filters/Table/LastMovements */ "./src/components/Filters/Table/LastMovements/index.js");
/* harmony import */ var _src_components_Filters_Table_Settlements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Filters/Table/Settlements */ "./src/components/Filters/Table/Settlements/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../src/components/Layout */ "./src/components/Layout/index.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../src/components/Layout */ "./src/components/Layout/index.js")],
    modules: ['../src/components/Layout']
  }
});

const Index = () => {
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
    padding: {
      paddingTop: "51px",
      paddingLeft: "15px",
      paddingRight: "15px"
    }
  }));
  const classes = useStyles();
  return __jsx(DynamicComponentWithNoSSR, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_src_components_Filters_Table_Settlements__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_src_components_Filters_Table_LastMovements__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/Filters/Chip/index.js":
/*!**********************************************!*\
  !*** ./src/components/Filters/Chip/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Cached */ "@material-ui/icons/Cached");
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Chip/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MyChip = ({
  paid
}) => {
  const paid_label = paid ? 'Finalizado' : 'Pendiente';
  const icon = paid ? __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }) : __jsx(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  });
  const color = paid ? "primary" : "secondary";
  return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: color,
    icon: icon,
    label: paid_label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyChip);

/***/ }),

/***/ "./src/components/Filters/Menu/SubMenu.js":
/*!************************************************!*\
  !*** ./src/components/Filters/Menu/SubMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Provider */ "./src/components/Provider/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Menu/SubMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const SelectCOmp = ({
  type,
  filterType
}) => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_5__["Context"]);
  const filterData = Object(ramda__WEBPACK_IMPORTED_MODULE_6__["compose"])(ramda__WEBPACK_IMPORTED_MODULE_6__["uniq"], Object(ramda__WEBPACK_IMPORTED_MODULE_6__["pluck"])(filterType), Object(ramda__WEBPACK_IMPORTED_MODULE_6__["sortBy"])(Object(ramda__WEBPACK_IMPORTED_MODULE_6__["prop"])(filterType)))(state.last_movements);
  const handleChangeSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((value, prop) => {
    dispatch({
      type: 'FILTER_BY_SELECT',
      payload: [value, prop]
    });
  }, [dispatch]);
  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    htmlFor: `${filterType}-required`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, type), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    displayEmpty: true,
    value: filterData[0],
    inputProps: {
      id: `${filterType}-required`
    },
    onChange: ({
      target: {
        value
      }
    }) => handleChangeSelect(value, filterType),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, filterData.map((i, y) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: y,
    value: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, i))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectCOmp);

/***/ }),

/***/ "./src/components/Filters/Menu/index.js":
/*!**********************************************!*\
  !*** ./src/components/Filters/Menu/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Tune */ "@material-ui/icons/Tune");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ViewModule */ "@material-ui/icons/ViewModule");
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/SearchOutlined */ "@material-ui/icons/SearchOutlined");
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CloudDownloadOutlined */ "@material-ui/icons/CloudDownloadOutlined");
/* harmony import */ var _material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SubMenu */ "./src/components/Filters/Menu/SubMenu.js");
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















const MyFab = ({
  children
}) => {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
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
  }));
  const classes = useStyles();
  return __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "extended",
    "aria-label": "delete",
    className: classes.buttons,
    size: 'small',
    color: 'inherit',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, children);
};

const SelectCOmp = () => __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {
  htmlFor: "age-required",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Fechas"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default.a, {
  displayEmpty: true,
  value: 'Último Mes',
  inputProps: {
    id: 'age-required'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Último Mes',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "\xDAltimo Mes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Periodo Actual',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Periodo Actual"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Hoy',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Hoy"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Ayer',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, "Ayer"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Última Semana',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "\xDAltima Semana"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Últimos 15 días',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "\xDAltimos 15 d\xEDas"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Otro Periodo',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Otro Periodo"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
  value: 'Últimos años',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "\xDAltimos a\xF1os")));

function Download() {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
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
  }));
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClickAway: handleClickAway,
    className: classes.zIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), "Descargar")), open ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaFilePdf"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), ".pdf"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaFileExcel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), ".xls"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaFileWord"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), ".doc")) : null)));
}

const Menu = ({
  onCLickViewCard,
  typeMenu
}) => {
  const [isOpenSub, toggleIsOpenSub] = Object(react_use__WEBPACK_IMPORTED_MODULE_18__["useToggle"])(false);
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 2,
    alignItems: 'center',
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, typeMenu)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    xs: 2,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13___default.a, {
    endAdornment: __jsx(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    xs: 2,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx(SelectCOmp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    xs: 2,
    alignItems: 'center',
    direction: "row",
    onClick: toggleIsOpenSub,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx(MyFab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }), "Filtrar")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    xs: 2,
    alignItems: 'center',
    onClick: onCLickViewCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx(MyFab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }), "Vista Card")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    xs: 2,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, __jsx(Download, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }))), isOpenSub && __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    alignItems: 'center',
    justify: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_19__["default"], {
    type: 'Periodo',
    filterType: 'period',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }), __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_19__["default"], {
    type: 'Detalle',
    filterType: 'client',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }), __jsx(_SubMenu__WEBPACK_IMPORTED_MODULE_19__["default"], {
    type: 'Monto',
    filterType: 'amount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/Head.js":
/*!************************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/Head.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./src/components/Filters/Table/LastMovements/Row.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Provider */ "./src/components/Provider/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const HeadTable = ({
  isCardView
}) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_5__["Context"]);
  const [checked, setChecked] = Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useToggle"])(false);
  const handleChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    dispatch({
      type: 'ALL_CHECKS',
      payload: id
    });
  }, [dispatch]);

  const handleOnClick = () => {
    setChecked();
    handleChangeValue(!checked);
  };

  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    displayNone: {
      display: 'none'
    }
  }));
  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    justify: "space-between",
    className: isCardView ? classes.displayNone : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: 'primary',
    checked: checked,
    onClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })), __jsx(MenuTitle, {
    size: 2,
    title: 'Tipo',
    action: 'ORDER_TYPE',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(MenuTitle, {
    size: 4,
    title: 'Detalle',
    action: 'ORDER_DETAIL',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx(MenuTitle, {
    size: 2,
    title: 'Montos',
    action: 'ORDER_AMOUNT',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(MenuTitle, {
    size: 2,
    title: 'Fecha',
    action: 'ORDER_DATE',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "ACCIONES"));
};

const MenuTitle = ({
  size,
  title,
  action
}) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_5__["Context"]);
  const [bool, toggle] = Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useToggle"])(true);
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    root: {
      justifyContent: 'flex-start',
      padding: 0
    }
  }));
  const handleChangeSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(sort => {
    dispatch({
      type: action + sort,
      payload: sort
    });
  }, [dispatch]);

  const handleOnClickHeadTable = () => {
    toggle();
    const sorType = !bool ? '_ASC' : '_DESC';
    console.log(action + sorType);
    handleChangeSort(sorType);
  };

  const classes = useStyles();
  return __jsx(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleOnClickHeadTable,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadTable);

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/List.js":
/*!************************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/List.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Provider */ "./src/components/Provider/index.js");
/* harmony import */ var _RowTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RowTable */ "./src/components/Filters/Table/LastMovements/RowTable.js");

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const RowMap = ({
  onClickCheck,
  isCardView
}) => {
  const {
    state
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_3__["Context"]);
  const data = Object(_Provider__WEBPACK_IMPORTED_MODULE_3__["filterByPaid"])(true)(state.last_movements);
  const handleChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(id => onClickCheck(id), [onClickCheck]);
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    justify: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, data.map(i => __jsx(_RowTable__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: i.id
  }, i, {
    onClickCheck: handleChangeValue,
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RowMap);

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/Row.js":
/*!***********************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/Row.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/Row.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Row = ({
  children,
  size,
  variant = 'subtitle1'
}) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
  item: true,
  xs: size,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
  variant: variant,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, children));

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/RowTable.js":
/*!****************************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/RowTable.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ "@material-ui/icons/MoreHoriz");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ "./src/components/Filters/Table/LastMovements/Row.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/RowTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    background: '#fafafa',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
    color: 'black'
  },
  gridMobile: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});

const TableRow = ({
  checked,
  type,
  client,
  clientID,
  amount,
  paid_date,
  onClickCheck,
  id,
  isCardView
}) => {
  const viewCardGrid = isCardView ? {
    xs: 5
  } : {
    container: true
  };
  const classes = useStyles();
  console.log('Rendering <RowTable />');
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewCardGrid, {
    justify: "space-between",
    className: isCardView ? classes.gridMobile : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    size: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: 'primary',
    checked: checked,
    onClick: () => onClickCheck(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), __jsx(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: isCardView ? 11 : 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, type), __jsx(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: isCardView ? 12 : 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, `${client} - ${clientID}`), __jsx(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: isCardView ? 6 : 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, amount, " "), __jsx(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: isCardView ? 6 : 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, paid_date), __jsx(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: isCardView ? 12 : 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(Actions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })));
};

function Actions() {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
    root: {
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: -100,
      zIndex: 1500
    }
  }));
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClickAway: handleClickAway,
    className: classes.zIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), open ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), "Ver Detalle"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Descargar")) : null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(TableRow));

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/Table.js":
/*!*************************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/Table.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./src/components/Filters/Table/LastMovements/Head.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List */ "./src/components/Filters/Table/LastMovements/List.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Provider */ "./src/components/Provider/index.js");
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/Table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Table = ({
  isCardView
}) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_4__["Context"]);
  const handleChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    dispatch({
      type: 'ON_CHECK',
      payload: id
    });
  }, [dispatch]);
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClickCheck: handleChangeValue,
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/components/Filters/Table/LastMovements/index.js":
/*!*************************************************************!*\
  !*** ./src/components/Filters/Table/LastMovements/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table */ "./src/components/Filters/Table/LastMovements/Table.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Menu */ "./src/components/Filters/Menu/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/LastMovements/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TableIndex = () => {
  const [isCardView, toggleIsCardView] = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(false);
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
    margin: {
      marginTop: "51px"
    }
  }));
  const classes = useStyles();
  return __jsx("div", {
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onCLickViewCard: toggleIsCardView,
    typeMenu: "Últimos Movimientos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_Table__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableIndex);

/***/ }),

/***/ "./src/components/Filters/Table/Settlements/Head.js":
/*!**********************************************************!*\
  !*** ./src/components/Filters/Table/Settlements/Head.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./src/components/Filters/Table/Settlements/Row.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Provider */ "./src/components/Provider/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/Settlements/Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const HeadTable = ({
  isCardView
}) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_5__["Context"]);
  const [checked, setChecked] = Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useToggle"])(false);
  const handleChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    dispatch({
      type: 'ALL_CHECKS',
      payload: id
    });
  }, [dispatch]);

  const handleOnClick = () => {
    setChecked();
    handleChangeValue(!checked);
  };

  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    displayNone: {
      display: 'none'
    }
  }));
  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    justify: "space-between",
    className: isCardView ? classes.displayNone : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: 'primary',
    checked: checked,
    onClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx(MenuTitle, {
    size: 2,
    title: 'Periodo',
    action: 'ORDER_TYPE',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(MenuTitle, {
    size: 4,
    title: 'Detalle',
    action: 'ORDER_DETAIL',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(MenuTitle, {
    size: 2,
    title: 'Montos',
    action: 'ORDER_AMOUNT',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(MenuTitle, {
    size: 2,
    title: 'Estado',
    action: 'ORDER_DATE',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "ACCIONES"));
};

const MenuTitle = ({
  size,
  title,
  action
}) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_5__["Context"]);
  const [bool, toggle] = Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useToggle"])(true);
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    root: {
      justifyContent: 'flex-start',
      padding: 0
    }
  }));
  const handleChangeSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(sort => {
    dispatch({
      type: action + sort,
      payload: sort
    });
  }, [dispatch]);

  const handleOnClickHeadTable = () => {
    toggle();
    const sorType = !bool ? '_ASC' : '_DESC';
    console.log(action + sorType);
    handleChangeSort(sorType);
  };

  const classes = useStyles();
  return __jsx(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleOnClickHeadTable,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadTable);

/***/ }),

/***/ "./src/components/Filters/Table/Settlements/List.js":
/*!**********************************************************!*\
  !*** ./src/components/Filters/Table/Settlements/List.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Provider */ "./src/components/Provider/index.js");
/* harmony import */ var _RowTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RowTable */ "./src/components/Filters/Table/Settlements/RowTable.js");

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/Settlements/List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const RowMap = ({
  onClickCheck,
  isCardView,
  onClickPaid
}) => {
  const {
    state
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_3__["Context"]);
  const data = state.last_movements;
  const handleChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(id => onClickCheck(id), [onClickCheck]);
  const handleOnClickPaid = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((id, paid) => onClickPaid(id, paid), [onClickPaid]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    justify: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, data.map(i => __jsx(_RowTable__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: i.id
  }, i, {
    onClickCheck: handleChangeValue,
    isCardView: isCardView,
    onClickPaid: handleOnClickPaid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RowMap);

/***/ }),

/***/ "./src/components/Filters/Table/Settlements/Row.js":
/*!*********************************************************!*\
  !*** ./src/components/Filters/Table/Settlements/Row.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/Settlements/Row.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Row = ({
  children,
  size,
  variant = 'subtitle1'
}) => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
  item: true,
  xs: size,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
  variant: variant,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, children));

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./src/components/Filters/Table/Settlements/RowTable.js":
/*!**************************************************************!*\
  !*** ./src/components/Filters/Table/Settlements/RowTable.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ "@material-ui/icons/MoreHoriz");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Row */ "./src/components/Filters/Table/Settlements/Row.js");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Chip */ "./src/components/Filters/Chip/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/Settlements/RowTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  root: {
    background: '#fafafa',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
    color: 'black'
  },
  gridMobile: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});

const TableRow = ({
  checked,
  period,
  client,
  clientID,
  amount,
  paid,
  onClickCheck,
  onClickPaid,
  id,
  isCardView
}) => {
  const viewCardGrid = isCardView ? {
    xs: 5
  } : {
    container: true
  };
  const classes = useStyles();
  console.log('Rendering <RowTable />');
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewCardGrid, {
    justify: "space-between",
    className: isCardView ? classes.gridMobile : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    size: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: 'primary',
    checked: checked,
    onClick: () => onClickCheck(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx(_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isCardView ? 11 : 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, period), __jsx(_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isCardView ? 12 : 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, `${client} - ${clientID}`), __jsx(_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isCardView ? 6 : 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, amount, " "), __jsx(_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isCardView ? 6 : 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_Chip__WEBPACK_IMPORTED_MODULE_7__["default"], {
    paid: paid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })), __jsx(_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: isCardView ? 12 : 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(Actions, {
    onClickPaid: onClickPaid,
    id: id,
    paid: paid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })));
};

function Actions({
  onClickPaid,
  id,
  paid
}) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
    root: {
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: -100,
      zIndex: 1500
    }
  }));
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClickAway: handleClickAway,
    className: classes.zIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    alignItems: 'center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), open ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), "Ver Detalle"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
    onClick: () => {
      onClickPaid(id, paid);
      handleClickAway();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Pagar en Farmacoins")) : null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(TableRow));

/***/ }),

/***/ "./src/components/Filters/Table/Settlements/Table.js":
/*!***********************************************************!*\
  !*** ./src/components/Filters/Table/Settlements/Table.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head */ "./src/components/Filters/Table/Settlements/Head.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List */ "./src/components/Filters/Table/Settlements/List.js");
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Provider */ "./src/components/Provider/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/SvgIcon/SvgIcon */ "@material-ui/core/SvgIcon/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/Settlements/Table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













const Table = ({
  isCardView
}) => {
  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Provider__WEBPACK_IMPORTED_MODULE_6__["Context"]);
  const {
    0: snackBars,
    1: setOpenSnackBars
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBars(false);
  };

  const handleChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(id => {
    dispatch({
      type: 'ON_CHECK',
      payload: id
    });
  }, [dispatch]);
  const handleOnClickPaid = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])((id, paid) => {
    paid ? setOpenSnackBars(true) : dispatch({
      type: 'ON_PAID',
      payload: id
    });
  }, [dispatch]);
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClickCheck: handleChangeValue,
    isCardView: isCardView,
    onClickPaid: handleOnClickPaid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: snackBars,
    autoHideDuration: 3000,
    onClose: handleCloseSnackBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(MySnackbarContentWrapper, {
    onClose: handleCloseSnackBar,
    variant: "error",
    message: "El pago se realizo con anterioridad.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })));
};

function MySnackbarContentWrapper(props) {
  const useStyles1 = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  }));
  const classes = useStyles1();

  const {
    className,
    message,
    onClose,
    variant
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "message", "onClose", "variant"]);

  const Icon = _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_8___default.a;
  return __jsx(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: __jsx("span", {
      id: "client-snackbar",
      className: classes.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(Icon, {
      className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(classes.icon, classes.iconVariant),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), message),
    action: [__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      onClick: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }))]
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/components/Filters/Table/Settlements/index.js":
/*!***********************************************************!*\
  !*** ./src/components/Filters/Table/Settlements/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table */ "./src/components/Filters/Table/Settlements/Table.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Menu */ "./src/components/Filters/Menu/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Filters/Table/Settlements/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const TableIndex = () => {
  const [isCardView, toggleIsCardView] = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onCLickViewCard: toggleIsCardView,
    typeMenu: "Liquidaciones",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_Table__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isCardView: isCardView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableIndex);

/***/ }),

/***/ "./src/components/Provider/index.js":
/*!******************************************!*\
  !*** ./src/components/Provider/index.js ***!
  \******************************************/
/*! exports provided: Context, filterByPaid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterByPaid", function() { return filterByPaid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/lokuhra/dev/FRONTEND/src/components/Provider/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Context = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
const {
  Provider
} = Context;
const alter = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["curry"])((checked, id, items) => Object(ramda__WEBPACK_IMPORTED_MODULE_2__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["when"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propEq"])('id', id), Object(ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"])('checked', checked)), items));
const alterPaid = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["curry"])((checked, id, items) => Object(ramda__WEBPACK_IMPORTED_MODULE_2__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["when"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propEq"])('id', id), Object(ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"])('paid', checked)), items));
const alterDate = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["curry"])((checked, id, items) => Object(ramda__WEBPACK_IMPORTED_MODULE_2__["map"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["when"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["propEq"])('id', id), Object(ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"])('paid_date', checked)), items));

const filterByID = i => Object(ramda__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["where"])({
  id: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["equals"])(i)
}));

const filterByPaid = i => Object(ramda__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["where"])({
  paid: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["equals"])(i)
}));

const changeAllChecks = i => Object(ramda__WEBPACK_IMPORTED_MODULE_2__["map"])(o => o.checked === !i ? Object(ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"])('checked', i, o) : o);

const reducer = (state, {
  type,
  payload
}) => {
  switch (type) {
    case 'ON_PAID':
      const newData = alterPaid(true, payload, state.last_movements);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: alterDate(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MM/DD/YYYY'), payload, newData)
      });

    case 'ON_CHECK':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: alter(!filterByID(payload)(state.last_movements)[0].checked, payload, state.last_movements)
      });

    case 'ALL_CHECKS':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: changeAllChecks(payload)(state.last_movements)
      });

    case 'ORDER_TYPE_ASC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["ascend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('type')))(state.last_movements)
      });

    case 'ORDER_TYPE_DESC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["descend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('type')))(state.last_movements)
      });

    case 'ORDER_DETAIL_ASC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["ascend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('client')))(state.last_movements)
      });

    case 'ORDER_DETAIL_DESC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["descend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('client')))(state.last_movements)
      });

    case 'ORDER_AMOUNT_ASC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["ascend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('amount')))(state.last_movements)
      });

    case 'ORDER_AMOUNT_DESC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["descend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('amount')))(state.last_movements)
      });

    case 'ORDER_DATE_ASC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["ascend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('date')))(state.last_movements)
      });

    case 'ORDER_DATE_DESC':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["sort"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["descend"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["prop"])('date')))(state.last_movements)
      });

    case 'FILTER_BY_SELECT':
      console.log(payload);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        last_movements: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["pathSatisfies"])(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["equals"])(payload[0]), [payload[1]]))(state.last_movements)
      });

    default:
      throw new Error(`Action type ${type} unknown`);
  }
};

const AppProvider = ({
  children
}) => {
  console.log('Rendering <AppProvider />');
  const initialState = {
    last_movements: [{
      period: "2019/05-M",
      id: 4,
      type: 'Realizaste un pago en farmacoins todas las farmacias.',
      client: 'Luis Pasteur - Antitabaco',
      clientID: 'Código: 210 ',
      amount: '40.000,00',
      paid_date: '04/09/2019',
      checked: false,
      paid: false
    }, {
      id: 5,
      period: "2019/05-M",
      type: 'Realizaste un pago en farmacoins todas las farmacias.',
      client: 'Luis Pasteur - Antitabaco',
      clientID: 'Código: 210 ',
      amount: '50.000,00',
      paid_date: '25/09/2019',
      checked: false,
      paid: true
    }, {
      id: 3,
      period: "2019/05-M",
      type: 'Realizaste un pago en farmacoins todas las farmacias.',
      client: 'Luis Pasteur - Antitabaco',
      clientID: 'Código: 210 ',
      amount: '30.000,00',
      paid_date: '03/09/2019',
      checked: false,
      paid: false
    }, {
      id: 2,
      period: "2019/05-M",
      type: 'Realizaste un pago en farmacoins todas las farmacias.',
      client: 'Luis Pasteur - Antitabaco',
      clientID: 'Código: 210 ',
      amount: '30.000,00',
      paid_date: '22/09/2019',
      checked: false,
      paid: false
    }, {
      id: 1,
      period: "2019/05-M",
      type: 'Realizaste un pago en farmacoins todas las farmacias.',
      client: 'Luis Pasteur - Antitabaco',
      clientID: 'Código: 210 ',
      amount: '11.000,00',
      paid_date: '01/09/2019',
      checked: false,
      paid: false
    }]
  };

  function enchanceDispatchWithLogger(dispatch) {
    return function (action) {
      console.log('Action Type:', action.type);
      return dispatch(action);
    };
  }

  function useReducerWithLogger(...args) {
    let prevState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(initialState);
    const {
      0: state,
      1: dispatch
    } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(...args);
    const dispatchWithLogger = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
      return enchanceDispatchWithLogger(dispatch);
    }, [dispatch]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      if (state !== initialState) {
        console.log('Prev state: ', prevState.current);
        console.log('Next state: ', state);
      }

      prevState.current = state;
    }, [state]);
    return [state, dispatchWithLogger];
  }

  const [state, dispatch] = useReducerWithLogger(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  return __jsx(Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppProvider);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lokuhra/dev/FRONTEND/pages/home.js */"./pages/home.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/core/SvgIcon/SvgIcon":
/*!****************************************************!*\
  !*** external "@material-ui/core/SvgIcon/SvgIcon" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon/SvgIcon");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/withWidth":
/*!**********************************************!*\
  !*** external "@material-ui/core/withWidth" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),

/***/ "@material-ui/icons/Cached":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cached" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cached");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/CloudDownloadOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/CloudDownloadOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloudDownloadOutlined");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/MoreHoriz":
/*!***********************************************!*\
  !*** external "@material-ui/icons/MoreHoriz" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "@material-ui/icons/NotificationsNone":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/NotificationsNone" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NotificationsNone");

/***/ }),

/***/ "@material-ui/icons/SearchOutlined":
/*!****************************************************!*\
  !*** external "@material-ui/icons/SearchOutlined" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchOutlined");

/***/ }),

/***/ "@material-ui/icons/Tune":
/*!******************************************!*\
  !*** external "@material-ui/icons/Tune" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Tune");

/***/ }),

/***/ "@material-ui/icons/ViewModule":
/*!************************************************!*\
  !*** external "@material-ui/icons/ViewModule" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewModule");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mui-layout":
/*!*****************************!*\
  !*** external "mui-layout" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mui-layout");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-svg":
/*!****************************!*\
  !*** external "react-svg" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map