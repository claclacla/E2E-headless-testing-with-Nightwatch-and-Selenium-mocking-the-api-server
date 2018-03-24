/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/react/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/prop-types/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/react-redux/es/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/*!*********************************!*\
  !*** ./src/entities/Product.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _IEntity2 = __webpack_require__(/*! ./IEntity */ 137);\n\nvar _IEntity3 = _interopRequireDefault(_IEntity2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Product = function (_IEntity) {\n  _inherits(Product, _IEntity);\n\n  function Product(_ref) {\n    var uid = _ref.uid,\n        name = _ref.name;\n\n    _classCallCheck(this, Product);\n\n    var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, uid));\n\n    if (name === undefined) {\n      throw new Error(\"The name parameter is required\");\n    }\n\n    _this.name = name;\n    return _this;\n  }\n\n  return Product;\n}(_IEntity3.default);\n\nexports.default = Product;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2VudGl0aWVzL1Byb2R1Y3QuanM/YmUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUVudGl0eSBmcm9tICcuL0lFbnRpdHknO1xuXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgSUVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKHsgdWlkLCBuYW1lIH0pIHtcbiAgICBzdXBlcih1aWQpO1xuXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG5hbWUgcGFyYW1ldGVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2VudGl0aWVzL1Byb2R1Y3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUNBOzs7O0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!********************************!*\
  !*** ./src/dtos/ProductDTO.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _IDTO2 = __webpack_require__(/*! ./IDTO */ 138);\n\nvar _IDTO3 = _interopRequireDefault(_IDTO2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductDTO = function (_IDTO) {\n  _inherits(ProductDTO, _IDTO);\n\n  function ProductDTO(_ref) {\n    var uid = _ref.uid,\n        name = _ref.name;\n\n    _classCallCheck(this, ProductDTO);\n\n    var _this = _possibleConstructorReturn(this, (ProductDTO.__proto__ || Object.getPrototypeOf(ProductDTO)).call(this, uid));\n\n    if (name === undefined) {\n      throw new Error(\"The name parameter is required\");\n    }\n\n    _this.name = name;\n    return _this;\n  }\n\n  return ProductDTO;\n}(_IDTO3.default);\n\nexports.default = ProductDTO;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2R0b3MvUHJvZHVjdERUTy5qcz9hYTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJRFRPIGZyb20gJy4vSURUTyc7XG5cbmNsYXNzIFByb2R1Y3REVE8gZXh0ZW5kcyBJRFRPIHtcbiAgY29uc3RydWN0b3IoeyB1aWQsIG5hbWUgfSkge1xuICAgIHN1cGVyKHVpZCk7XG5cbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbmFtZSBwYXJhbWV0ZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RFRPO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZHRvcy9Qcm9kdWN0RFRPLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUUE7QUFDQTs7OztBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/redux/es/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/react-router-dom/es/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/*!*********************************!*\
  !*** ./src/actions/products.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CREATE_PRODUCTS = undefined;\nexports.createAsyncProducts = createAsyncProducts;\n\nvar _products = __webpack_require__(/*! ../repositories/pure-src/products */ 119);\n\nvar _getQueryString = __webpack_require__(/*! @App/lib/query-string/getQueryString */ 141);\n\nvar _getQueryString2 = _interopRequireDefault(_getQueryString);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CREATE_PRODUCTS = exports.CREATE_PRODUCTS = \"CREATE_PRODUCTS\";\n\nfunction createProducts(_ref) {\n  var products = _ref.products;\n\n  return {\n    type: CREATE_PRODUCTS,\n    products: products\n  };\n};\n\nfunction createAsyncProducts(filters) {\n  return function (dispatch) {\n    var queryString = (0, _getQueryString2.default)(filters);\n\n    (0, _products.productsGetRequest)(queryString).then(function (products) {\n      dispatch(createProducts({ products: products }));\n    }).catch(function (error) {// error => { status, message }\n\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FjdGlvbnMvcHJvZHVjdHMuanM/NGM2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9kdWN0c0dldFJlcXVlc3QgfSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvcHVyZS1zcmMvcHJvZHVjdHMnO1xuaW1wb3J0IGdldFF1ZXJ5U3RyaW5nIGZyb20gJ0BBcHAvbGliL3F1ZXJ5LXN0cmluZy9nZXRRdWVyeVN0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfUFJPRFVDVFMgPSBcIkNSRUFURV9QUk9EVUNUU1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0cyh7IHByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDUkVBVEVfUFJPRFVDVFMsXG4gICAgcHJvZHVjdHNcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBc3luY1Byb2R1Y3RzKGZpbHRlcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGxldCBxdWVyeVN0cmluZyA9IGdldFF1ZXJ5U3RyaW5nKGZpbHRlcnMpO1xuXG4gICAgcHJvZHVjdHNHZXRSZXF1ZXN0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocHJvZHVjdHMgPT4ge1xuICAgICAgICBkaXNwYXRjaChjcmVhdGVQcm9kdWN0cyh7IHByb2R1Y3RzIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4geyAvLyBlcnJvciA9PiB7IHN0YXR1cywgbWVzc2FnZSB9XG5cbiAgICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hY3Rpb25zL3Byb2R1Y3RzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFZQTtBQUNBO0FBYkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!****************************!*\
  !*** ./src/lib/uid/UID.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar shortid = __webpack_require__(/*! shortid */ 129);\n\nvar UID = function () {\n  function UID() {\n    _classCallCheck(this, UID);\n  }\n\n  _createClass(UID, null, [{\n    key: \"create\",\n    value: function create() {\n      return shortid.generate();\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid(uid) {\n      return shortid.isValid(uid);\n    }\n  }]);\n\n  return UID;\n}();\n\nmodule.exports = UID;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2xpYi91aWQvVUlELmpzPzlmOTQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNob3J0aWQgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuY2xhc3MgVUlEIHtcbiAgc3RhdGljIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gc2hvcnRpZC5nZW5lcmF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGlzVmFsaWQodWlkKSB7XG4gICAgcmV0dXJuIHNob3J0aWQuaXNWYWxpZCh1aWQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVUlEXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9saWIvdWlkL1VJRC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */,
/* 55 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 58);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _redux = __webpack_require__(/*! redux */ 33);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 17);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 92);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 44);\n\nvar _products = __webpack_require__(/*! ./reducers/products */ 118);\n\nvar _products2 = _interopRequireDefault(_products);\n\nvar _App = __webpack_require__(/*! ./App */ 143);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;\n\nvar store = (0, _redux.createStore)((0, _redux.combineReducers)({ products: _products2.default }), composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRouterDom.BrowserRouter,\n  null,\n  _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(_App2.default, null)\n  )\n), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL3JlZHVjZXJzL3Byb2R1Y3RzJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2VcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcnMoeyBwcm9kdWN0cyB9KSwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXBwIC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgPC9Ccm93c2VyUm91dGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/react-dom/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTguanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/*!***********************************************!*\
  !*** ./node_modules/redux-thunk/lib/index.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/redux-thunk/lib/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTIuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///92\n");

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/*!**********************************!*\
  !*** ./src/reducers/products.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _products = __webpack_require__(/*! @App/actions/products */ 52);\n\nfunction products() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    data: []\n  };\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _products.CREATE_PRODUCTS:\n      return _extends({}, state, {\n        data: action.products\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = products;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9yZWR1Y2Vycy9wcm9kdWN0cy5qcz9jYTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENSRUFURV9QUk9EVUNUUyB9IGZyb20gJ0BBcHAvYWN0aW9ucy9wcm9kdWN0cyc7XG5cbmZ1bmN0aW9uIHByb2R1Y3RzKHN0YXRlID0ge1xuICBkYXRhOiBbXVxufSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENSRUFURV9QUk9EVUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnByb2R1Y3RzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHVjZXJzL3Byb2R1Y3RzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSUE7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///118\n");

/***/ }),
/* 119 */
/*!***********************************************!*\
  !*** ./src/repositories/pure-src/products.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.productsGetRequest = undefined;\n\nvar _createPureSrc = __webpack_require__(/*! @App/lib/pure-src/src/createPureSrc */ 120);\n\nvar _createPureSrc2 = _interopRequireDefault(_createPureSrc);\n\nvar _AppConfig = __webpack_require__(/*! AppConfig */ 121);\n\nvar _AppConfig2 = _interopRequireDefault(_AppConfig);\n\nvar _fetchDeliveryMethod = __webpack_require__(/*! @App/lib/pure-src/src/deliveryMethods/fetch/fetchDeliveryMethod */ 122);\n\nvar _fetchDeliveryMethod2 = _interopRequireDefault(_fetchDeliveryMethod);\n\nvar _restGetRequest = __webpack_require__(/*! @App/lib/pure-src/src/repositories/rest/restGetRequest */ 127);\n\nvar _restGetRequest2 = _interopRequireDefault(_restGetRequest);\n\nvar _UID = __webpack_require__(/*! @App/lib/uid/UID */ 53);\n\nvar _UID2 = _interopRequireDefault(_UID);\n\nvar _Product = __webpack_require__(/*! @App/entities/Product */ 25);\n\nvar _Product2 = _interopRequireDefault(_Product);\n\nvar _ProductDTO = __webpack_require__(/*! @App/dtos/ProductDTO */ 26);\n\nvar _ProductDTO2 = _interopRequireDefault(_ProductDTO);\n\nvar _mapProductDTOToProduct = __webpack_require__(/*! @App/mapToEntities/mapProductDTOToProduct */ 139);\n\nvar _mapProductDTOToProduct2 = _interopRequireDefault(_mapProductDTOToProduct);\n\nvar _mapProductToProductDTO = __webpack_require__(/*! @App/mapToDtos/mapProductToProductDTO */ 140);\n\nvar _mapProductToProductDTO2 = _interopRequireDefault(_mapProductToProductDTO);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar source = _AppConfig2.default.api.address + '/products';\n\nvar productsRepository = (0, _createPureSrc2.default)(source, _fetchDeliveryMethod2.default, _mapProductDTOToProduct2.default, _mapProductToProductDTO2.default);\n\n// Create the repository methods\n\nvar productsGetRequest = exports.productsGetRequest = productsRepository(_restGetRequest2.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9yZXBvc2l0b3JpZXMvcHVyZS1zcmMvcHJvZHVjdHMuanM/ZWE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUHVyZVNyYyBmcm9tICdAQXBwL2xpYi9wdXJlLXNyYy9zcmMvY3JlYXRlUHVyZVNyYydcblxuXG5pbXBvcnQgQXBwQ29uZmlnIGZyb20gJ0FwcENvbmZpZyc7XG5cbmltcG9ydCBkZWxpdmVyeU1ldGhvZCBmcm9tICdAQXBwL2xpYi9wdXJlLXNyYy9zcmMvZGVsaXZlcnlNZXRob2RzL2ZldGNoL2ZldGNoRGVsaXZlcnlNZXRob2QnXG5cbmltcG9ydCBnZXRSZXF1ZXN0IGZyb20gJ0BBcHAvbGliL3B1cmUtc3JjL3NyYy9yZXBvc2l0b3JpZXMvcmVzdC9yZXN0R2V0UmVxdWVzdCdcblxubGV0IHNvdXJjZSA9IGAke0FwcENvbmZpZy5hcGkuYWRkcmVzc30vcHJvZHVjdHNgO1xuXG5cbmltcG9ydCBVSUQgZnJvbSAnQEFwcC9saWIvdWlkL1VJRCc7XG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJ0BBcHAvZW50aXRpZXMvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdERUTyBmcm9tICdAQXBwL2R0b3MvUHJvZHVjdERUTyc7XG5pbXBvcnQgbWFwUHJvZHVjdERUT1RvUHJvZHVjdCBmcm9tICdAQXBwL21hcFRvRW50aXRpZXMvbWFwUHJvZHVjdERUT1RvUHJvZHVjdCc7XG5pbXBvcnQgbWFwUHJvZHVjdFRvUHJvZHVjdERUTyBmcm9tICdAQXBwL21hcFRvRHRvcy9tYXBQcm9kdWN0VG9Qcm9kdWN0RFRPJztcblxubGV0IHByb2R1Y3RzUmVwb3NpdG9yeSA9IGNyZWF0ZVB1cmVTcmMoXG4gIHNvdXJjZSxcbiAgZGVsaXZlcnlNZXRob2QsXG4gIG1hcFByb2R1Y3REVE9Ub1Byb2R1Y3QsXG4gIG1hcFByb2R1Y3RUb1Byb2R1Y3REVE8pO1xuXG4vLyBDcmVhdGUgdGhlIHJlcG9zaXRvcnkgbWV0aG9kc1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNHZXRSZXF1ZXN0ID0gcHJvZHVjdHNSZXBvc2l0b3J5KGdldFJlcXVlc3QpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVwb3NpdG9yaWVzL3B1cmUtc3JjL3Byb2R1Y3RzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFUQTtBQUNBO0FBU0E7QUFDQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///119\n");

/***/ }),
/* 120 */
/*!***********************************************!*\
  !*** ./src/lib/pure-src/src/createPureSrc.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createPureSrc;\nfunction createPureSrc(source, deliveryMethod, mapFromSource, mapToSource) {\n  return function (deliveryRequest, options) {\n    return async function () {\n      for (var _len = arguments.length, requestParameters = Array(_len), _key = 0; _key < _len; _key++) {\n        requestParameters[_key] = arguments[_key];\n      }\n\n      var data = await deliveryRequest.apply(undefined, [deliveryMethod, source, options, mapFromSource, mapToSource].concat(requestParameters));\n\n      return data;\n    };\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL2NyZWF0ZVB1cmVTcmMuanM/M2MwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQdXJlU3JjKHNvdXJjZSwgZGVsaXZlcnlNZXRob2QsIG1hcEZyb21Tb3VyY2UsIG1hcFRvU291cmNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGVsaXZlcnlSZXF1ZXN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uICguLi5yZXF1ZXN0UGFyYW1ldGVycykge1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBkZWxpdmVyeVJlcXVlc3QoXG4gICAgICAgIGRlbGl2ZXJ5TWV0aG9kLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIG1hcEZyb21Tb3VyY2UsIFxuICAgICAgICBtYXBUb1NvdXJjZSxcbiAgICAgICAgLi4ucmVxdWVzdFBhcmFtZXRlcnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9saWIvcHVyZS1zcmMvc3JjL2NyZWF0ZVB1cmVTcmMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///120\n");

/***/ }),
/* 121 */
/*!********************************************************************!*\
  !*** external "{\"api\":{\"address\":\"http://localhost:3000\"}}" ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = {\"api\":{\"address\":\"http://localhost:3000\"}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwie1xcXCJhcGlcXFwiOntcXFwiYWRkcmVzc1xcXCI6XFxcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFxcXCJ9fVwiPzQwZWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJhcGlcIjp7XCJhZGRyZXNzXCI6XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIn19O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwie1xcXCJhcGlcXFwiOntcXFwiYWRkcmVzc1xcXCI6XFxcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFxcXCJ9fVwiXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///121\n");

/***/ }),
/* 122 */
/*!***************************************************************************!*\
  !*** ./src/lib/pure-src/src/deliveryMethods/fetch/fetchDeliveryMethod.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Json = __webpack_require__(/*! ../../lib/Json/ */ 123);\n\nvar _PureSrcError = __webpack_require__(/*! ../../errors/PureSrcError */ 124);\n\nvar _PureSrcError2 = _interopRequireDefault(_PureSrcError);\n\nvar _DeliveryError = __webpack_require__(/*! ../../errors/DeliveryError */ 125);\n\nvar _DeliveryError2 = _interopRequireDefault(_DeliveryError);\n\nvar _FetchDeliveryResponse = __webpack_require__(/*! ./responses/FetchDeliveryResponse */ 126);\n\nvar _FetchDeliveryResponse2 = _interopRequireDefault(_FetchDeliveryResponse);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = async function fetchDeliveryMethod(address, options) {\n  var body = null;\n  var fetchResponse = null;\n\n  try {\n    fetchResponse = await fetch(address, options);\n  } catch (error) {\n    throw new _PureSrcError2.default('Failed to connect to ' + address);\n  }\n\n  if (!fetchResponse.ok) {\n    throw new _DeliveryError2.default({\n      status: fetchResponse.status,\n      message: fetchResponse.statusText\n    });\n  }\n\n  var fetchResponseBody = await fetchResponse.text();\n\n  if (fetchResponseBody) {\n    try {\n      body = (0, _Json.stringToJson)(fetchResponseBody);\n    } catch (error) {\n      throw new Error(\"Error parsing response data\");\n    }\n  } else {\n    body = fetchResponseBody;\n  }\n\n  var response = new _FetchDeliveryResponse2.default({ status: fetchResponse.status, body: body });\n\n  return response;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL2RlbGl2ZXJ5TWV0aG9kcy9mZXRjaC9mZXRjaERlbGl2ZXJ5TWV0aG9kLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nVG9Kc29uIH0gZnJvbSAnLi4vLi4vbGliL0pzb24vJ1xuaW1wb3J0IFB1cmVTcmNFcnJvciBmcm9tICcuLi8uLi9lcnJvcnMvUHVyZVNyY0Vycm9yJ1xuaW1wb3J0IERlbGl2ZXJ5RXJyb3IgZnJvbSAnLi4vLi4vZXJyb3JzL0RlbGl2ZXJ5RXJyb3InXG5pbXBvcnQgRmV0Y2hEZWxpdmVyeVJlc3BvbnNlIGZyb20gJy4vcmVzcG9uc2VzL0ZldGNoRGVsaXZlcnlSZXNwb25zZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEZWxpdmVyeU1ldGhvZChhZGRyZXNzLCBvcHRpb25zKSB7XG4gIGxldCBib2R5ID0gbnVsbDtcbiAgbGV0IGZldGNoUmVzcG9uc2UgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGFkZHJlc3MsIG9wdGlvbnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBQdXJlU3JjRXJyb3IoYEZhaWxlZCB0byBjb25uZWN0IHRvICR7YWRkcmVzc31gKTtcbiAgfVxuXG4gIGlmICghZmV0Y2hSZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBEZWxpdmVyeUVycm9yKHtcbiAgICAgIHN0YXR1czogZmV0Y2hSZXNwb25zZS5zdGF0dXMsXG4gICAgICBtZXNzYWdlOiBmZXRjaFJlc3BvbnNlLnN0YXR1c1RleHRcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBmZXRjaFJlc3BvbnNlQm9keSA9IGF3YWl0IGZldGNoUmVzcG9uc2UudGV4dCgpO1xuXG4gIGlmIChmZXRjaFJlc3BvbnNlQm9keSkge1xuICAgIHRyeSB7XG4gICAgICBib2R5ID0gc3RyaW5nVG9Kc29uKGZldGNoUmVzcG9uc2VCb2R5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyByZXNwb25zZSBkYXRhXCIpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBib2R5ID0gZmV0Y2hSZXNwb25zZUJvZHk7XG4gIH1cblxuICBsZXQgcmVzcG9uc2UgPSBuZXcgRmV0Y2hEZWxpdmVyeVJlc3BvbnNlKHsgc3RhdHVzOiBmZXRjaFJlc3BvbnNlLnN0YXR1cywgYm9keSB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9saWIvcHVyZS1zcmMvc3JjL2RlbGl2ZXJ5TWV0aG9kcy9mZXRjaC9mZXRjaERlbGl2ZXJ5TWV0aG9kLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///122\n");

/***/ }),
/* 123 */
/*!************************************************!*\
  !*** ./src/lib/pure-src/src/lib/Json/index.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.jsonToString = jsonToString;\nexports.stringToJson = stringToJson;\nfunction jsonToString(jsonData) {\n  return JSON.stringify(jsonData);\n}\n\nfunction stringToJson(stringData) {\n  var jsonData = null;\n\n  try {\n    jsonData = JSON.parse(stringData);\n  } catch (error) {\n    throw new SyntaxError(\"The supplied string is not a valid json data\");\n  }\n\n  return jsonData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL2xpYi9Kc29uL2luZGV4LmpzPzdjNDAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGpzb25Ub1N0cmluZyhqc29uRGF0YSkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9Kc29uKHN0cmluZ0RhdGEpIHtcbiAgbGV0IGpzb25EYXRhID0gbnVsbDtcblxuICB0cnkge1xuICAgIGpzb25EYXRhID0gSlNPTi5wYXJzZShzdHJpbmdEYXRhKTsgXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIHN1cHBsaWVkIHN0cmluZyBpcyBub3QgYSB2YWxpZCBqc29uIGRhdGFcIik7XG4gIH1cblxuICByZXR1cm4ganNvbkRhdGE7XG59IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbGliL3B1cmUtc3JjL3NyYy9saWIvSnNvbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUlBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///123\n");

/***/ }),
/* 124 */
/*!*****************************************************!*\
  !*** ./src/lib/pure-src/src/errors/PureSrcError.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PureSrcError = function (_Error) {\n  _inherits(PureSrcError, _Error);\n\n  function PureSrcError() {\n    var _ref;\n\n    _classCallCheck(this, PureSrcError);\n\n    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {\n      params[_key] = arguments[_key];\n    }\n\n    var _this = _possibleConstructorReturn(this, (_ref = PureSrcError.__proto__ || Object.getPrototypeOf(PureSrcError)).call.apply(_ref, [this].concat(params)));\n\n    Error.captureStackTrace(_this, PureSrcError);\n    return _this;\n  }\n\n  return PureSrcError;\n}(Error);\n\nmodule.exports = PureSrcError;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL2Vycm9ycy9QdXJlU3JjRXJyb3IuanM/MWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQdXJlU3JjRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgIHN1cGVyKC4uLnBhcmFtcyk7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgUHVyZVNyY0Vycm9yKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFB1cmVTcmNFcnJvclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbGliL3B1cmUtc3JjL3NyYy9lcnJvcnMvUHVyZVNyY0Vycm9yLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7O0FBTEE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///124\n");

/***/ }),
/* 125 */
/*!******************************************************!*\
  !*** ./src/lib/pure-src/src/errors/DeliveryError.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DeliveryError = function DeliveryError(_ref) {\n  var message = _ref.message,\n      status = _ref.status;\n\n  _classCallCheck(this, DeliveryError);\n\n  if (message === undefined) {\n    throw new Error(\"message is a required property\");\n  }\n\n  if (status === undefined) {\n    throw new Error(\"status is a required property\");\n  }\n\n  this.status = status;\n  this.message = message;\n};\n\nmodule.exports = DeliveryError;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL2Vycm9ycy9EZWxpdmVyeUVycm9yLmpzPzNjNTYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGVsaXZlcnlFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHsgbWVzc2FnZSwgc3RhdHVzIH0pIHtcbiAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXNzYWdlIGlzIGEgcmVxdWlyZWQgcHJvcGVydHlcIik7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdGF0dXMgaXMgYSByZXF1aXJlZCBwcm9wZXJ0eVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVsaXZlcnlFcnJvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xpYi9wdXJlLXNyYy9zcmMvZXJyb3JzL0RlbGl2ZXJ5RXJyb3IuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///125\n");

/***/ }),
/* 126 */
/*!***************************************************************************************!*\
  !*** ./src/lib/pure-src/src/deliveryMethods/fetch/responses/FetchDeliveryResponse.js ***!
  \***************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FetchDeliveryResponse = function FetchDeliveryResponse(_ref) {\n  var body = _ref.body,\n      status = _ref.status;\n\n  _classCallCheck(this, FetchDeliveryResponse);\n\n  if (body === undefined) {\n    throw new Error(\"body is a required property\");\n  }\n\n  if (status === undefined) {\n    throw new Error(\"status is a required property\");\n  }\n\n  this.status = status;\n  this.body = body;\n};\n\nmodule.exports = FetchDeliveryResponse;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL2RlbGl2ZXJ5TWV0aG9kcy9mZXRjaC9yZXNwb25zZXMvRmV0Y2hEZWxpdmVyeVJlc3BvbnNlLmpzP2Y3NDgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmV0Y2hEZWxpdmVyeVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoeyBib2R5LCBzdGF0dXMgfSkge1xuICAgIGlmIChib2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImJvZHkgaXMgYSByZXF1aXJlZCBwcm9wZXJ0eVwiKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInN0YXR1cyBpcyBhIHJlcXVpcmVkIHByb3BlcnR5XCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGZXRjaERlbGl2ZXJ5UmVzcG9uc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9saWIvcHVyZS1zcmMvc3JjL2RlbGl2ZXJ5TWV0aG9kcy9mZXRjaC9yZXNwb25zZXMvRmV0Y2hEZWxpdmVyeVJlc3BvbnNlLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///126\n");

/***/ }),
/* 127 */
/*!******************************************************************!*\
  !*** ./src/lib/pure-src/src/repositories/rest/restGetRequest.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _restDelivery = __webpack_require__(/*! ./restDelivery */ 128);\n\nvar _restDelivery2 = _interopRequireDefault(_restDelivery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = async function restGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {\n  if (query) {\n    source += \"?\" + query;\n  }\n\n  // TODO: check restDelivery type\n\n  var restResponse = await (0, _restDelivery2.default)(deliveryMethod, source, options);\n\n  var srcObjects = restResponse.body.data;\n  var object = {};\n  var responseObjects = [];\n\n  srcObjects.forEach(function (srcObject) {\n    object = mapFromSource(srcObject);\n    responseObjects.push(object);\n  });\n\n  return responseObjects;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL3JlcG9zaXRvcmllcy9yZXN0L3Jlc3RHZXRSZXF1ZXN0LmpzPzZkMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc3REZWxpdmVyeSBmcm9tICcuL3Jlc3REZWxpdmVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc3RHZXRSZXF1ZXN0KGRlbGl2ZXJ5TWV0aG9kLCBzb3VyY2UsIG9wdGlvbnMsIG1hcEZyb21Tb3VyY2UsIG1hcFRvU291cmNlLCBxdWVyeSkge1xuICBpZiAocXVlcnkpIHtcbiAgICBzb3VyY2UgKz0gXCI/XCIgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIFRPRE86IGNoZWNrIHJlc3REZWxpdmVyeSB0eXBlXG5cbiAgbGV0IHJlc3RSZXNwb25zZSA9IGF3YWl0IHJlc3REZWxpdmVyeShkZWxpdmVyeU1ldGhvZCwgc291cmNlLCBvcHRpb25zKTtcblxuICBsZXQgc3JjT2JqZWN0cyA9IHJlc3RSZXNwb25zZS5ib2R5LmRhdGE7XG4gIGxldCBvYmplY3QgPSB7fTtcbiAgbGV0IHJlc3BvbnNlT2JqZWN0cyA9IFtdO1xuXG4gIHNyY09iamVjdHMuZm9yRWFjaChzcmNPYmplY3QgPT4ge1xuICAgIG9iamVjdCA9IG1hcEZyb21Tb3VyY2Uoc3JjT2JqZWN0KTtcbiAgICByZXNwb25zZU9iamVjdHMucHVzaChvYmplY3QpO1xuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2VPYmplY3RzO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbGliL3B1cmUtc3JjL3NyYy9yZXBvc2l0b3JpZXMvcmVzdC9yZXN0R2V0UmVxdWVzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///127\n");

/***/ }),
/* 128 */
/*!****************************************************************!*\
  !*** ./src/lib/pure-src/src/repositories/rest/restDelivery.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = async function restDelivery(deliveryMethod, address, options, mapFromSource, mapToSource) {\n  var data = await deliveryMethod(address, options);\n\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcHVyZS1zcmMvc3JjL3JlcG9zaXRvcmllcy9yZXN0L3Jlc3REZWxpdmVyeS5qcz8wM2IxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc3REZWxpdmVyeShkZWxpdmVyeU1ldGhvZCwgYWRkcmVzcywgb3B0aW9ucywgbWFwRnJvbVNvdXJjZSwgbWFwVG9Tb3VyY2UpIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBkZWxpdmVyeU1ldGhvZChhZGRyZXNzLCBvcHRpb25zKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xpYi9wdXJlLXNyYy9zcmMvcmVwb3NpdG9yaWVzL3Jlc3QvcmVzdERlbGl2ZXJ5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///128\n");

/***/ }),
/* 129 */
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/usr/src/app/node_modules/shortid/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI5LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///129\n");

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/*!*********************************!*\
  !*** ./src/entities/IEntity.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar IEntity = function IEntity(uid) {\n  _classCallCheck(this, IEntity);\n\n  if (uid !== undefined) {\n    this.uid = uid;\n  }\n};\n\nmodule.exports = IEntity;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9lbnRpdGllcy9JRW50aXR5LmpzPzQ3NDQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSUVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKHVpZCkge1xuICAgIGlmICh1aWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51aWQgPSB1aWQ7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSUVudGl0eVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZW50aXRpZXMvSUVudGl0eS5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///137\n");

/***/ }),
/* 138 */
/*!**************************!*\
  !*** ./src/dtos/IDTO.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar IDTO = function IDTO(uid) {\n  _classCallCheck(this, IDTO);\n\n  if (uid === undefined) {\n    throw new Error(\"The parameter UID is required\");\n  }\n\n  this.uid = uid;\n};\n\nmodule.exports = IDTO;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9kdG9zL0lEVE8uanM/MzRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJRFRPIHtcbiAgY29uc3RydWN0b3IodWlkKSB7XG4gICAgaWYgKHVpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGFyYW1ldGVyIFVJRCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnVpZCA9IHVpZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElEVE9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2R0b3MvSURUTy5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///138\n");

/***/ }),
/* 139 */
/*!*****************************************************!*\
  !*** ./src/mapToEntities/mapProductDTOToProduct.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = mapProductDTOToProduct;\n\nvar _ProductDTO = __webpack_require__(/*! ../dtos/ProductDTO */ 26);\n\nvar _ProductDTO2 = _interopRequireDefault(_ProductDTO);\n\nvar _Product = __webpack_require__(/*! ../entities/Product */ 25);\n\nvar _Product2 = _interopRequireDefault(_Product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// TODO: Add check for souceDto type\n\nfunction mapProductDTOToProduct(productDto) {\n  var product = new _Product2.default({ uid: productDto.uid, name: productDto.name });\n\n  return product;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9tYXBUb0VudGl0aWVzL21hcFByb2R1Y3REVE9Ub1Byb2R1Y3QuanM/ZjAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdERUTyBmcm9tICcuLi9kdG9zL1Byb2R1Y3REVE8nO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vZW50aXRpZXMvUHJvZHVjdCc7XG5cbi8vIFRPRE86IEFkZCBjaGVjayBmb3Igc291Y2VEdG8gdHlwZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBQcm9kdWN0RFRPVG9Qcm9kdWN0KHByb2R1Y3REdG8pIHtcbiAgbGV0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdCh7IHVpZDogcHJvZHVjdER0by51aWQsIG5hbWU6IHByb2R1Y3REdG8ubmFtZSB9KTtcblxuICByZXR1cm4gcHJvZHVjdDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21hcFRvRW50aXRpZXMvbWFwUHJvZHVjdERUT1RvUHJvZHVjdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtBQUNBO0FBTkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///139\n");

/***/ }),
/* 140 */
/*!*************************************************!*\
  !*** ./src/mapToDtos/mapProductToProductDTO.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = mapProductToProductDTO;\n\nvar _UID = __webpack_require__(/*! ../lib/uid/UID */ 53);\n\nvar _UID2 = _interopRequireDefault(_UID);\n\nvar _ProductDTO = __webpack_require__(/*! ../dtos/ProductDTO */ 26);\n\nvar _ProductDTO2 = _interopRequireDefault(_ProductDTO);\n\nvar _Product = __webpack_require__(/*! ../entities/Product */ 25);\n\nvar _Product2 = _interopRequireDefault(_Product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// TODO: Add check for souce type\n\nfunction mapProductToProductDTO(product) {\n  var uid = product.uid ? product.uid : _UID2.default.create();\n\n  var productDto = new _ProductDTO2.default({ uid: uid, name: product.name });\n\n  return productDto;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9tYXBUb0R0b3MvbWFwUHJvZHVjdFRvUHJvZHVjdERUTy5qcz8zZmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUQgZnJvbSAnLi4vbGliL3VpZC9VSUQnO1xuXG5pbXBvcnQgUHJvZHVjdERUTyBmcm9tICcuLi9kdG9zL1Byb2R1Y3REVE8nO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vZW50aXRpZXMvUHJvZHVjdCc7XG5cbi8vIFRPRE86IEFkZCBjaGVjayBmb3Igc291Y2UgdHlwZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBQcm9kdWN0VG9Qcm9kdWN0RFRPKHByb2R1Y3QpIHtcbiAgbGV0IHVpZCA9IHByb2R1Y3QudWlkID8gcHJvZHVjdC51aWQgOiBVSUQuY3JlYXRlKCk7XG5cbiAgbGV0IHByb2R1Y3REdG8gPSBuZXcgUHJvZHVjdERUTyh7IHVpZCwgbmFtZTogcHJvZHVjdC5uYW1lIH0pO1xuXG4gIHJldHVybiBwcm9kdWN0RHRvO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFwVG9EdG9zL21hcFByb2R1Y3RUb1Byb2R1Y3REVE8uanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0E7QUFDQTtBQVJBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///140\n");

/***/ }),
/* 141 */
/*!************************************************!*\
  !*** ./src/lib/query-string/getQueryString.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nexports.default = getQueryString;\n\nvar _Json = __webpack_require__(/*! @App/lib/Json/ */ 142);\n\nfunction getQueryString(queryFilters) {\n  if (!queryFilters) {\n    return \"\";\n  }\n\n  return Object.entries(queryFilters).reduce(function (reducer, filterEntry) {\n    if (reducer != \"\") {\n      reducer += \"&\";\n    }\n\n    var _filterEntry = _slicedToArray(filterEntry, 2),\n        key = _filterEntry[0],\n        filter = _filterEntry[1];\n\n    reducer += key + \"=\" + (0, _Json.jsonToString)(filter);\n\n    return reducer;\n  }, \"\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvcXVlcnktc3RyaW5nL2dldFF1ZXJ5U3RyaW5nLmpzP2IzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNvblRvU3RyaW5nIH0gZnJvbSAnQEFwcC9saWIvSnNvbi8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRRdWVyeVN0cmluZyhxdWVyeUZpbHRlcnMpIHtcbiAgaWYoIXF1ZXJ5RmlsdGVycykge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHF1ZXJ5RmlsdGVycykucmVkdWNlKChyZWR1Y2VyLCBmaWx0ZXJFbnRyeSkgPT4ge1xuICAgIGlmKHJlZHVjZXIgIT0gXCJcIikge1xuICAgICAgcmVkdWNlciArPSBcIiZcIjtcbiAgICB9XG5cbiAgICBsZXQgWyBrZXksIGZpbHRlciBdID0gZmlsdGVyRW50cnk7XG5cbiAgICByZWR1Y2VyICs9IGtleSArIFwiPVwiICsganNvblRvU3RyaW5nKGZpbHRlcik7XG5cbiAgICByZXR1cm4gcmVkdWNlcjtcbiAgfSwgXCJcIik7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9saWIvcXVlcnktc3RyaW5nL2dldFF1ZXJ5U3RyaW5nLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///141\n");

/***/ }),
/* 142 */
/*!*******************************!*\
  !*** ./src/lib/Json/index.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.jsonToString = jsonToString;\nexports.stringToJson = stringToJson;\nfunction jsonToString(jsonData) {\n  return JSON.stringify(jsonData);\n}\n\nfunction stringToJson(stringData) {\n  var jsonData = null;\n\n  try {\n    jsonData = JSON.parse(stringData);\n  } catch (error) {\n    throw new SyntaxError(\"The supplied string is not a valid json data\");\n  }\n\n  return jsonData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9saWIvSnNvbi9pbmRleC5qcz84ODMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBqc29uVG9TdHJpbmcoanNvbkRhdGEpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvSnNvbihzdHJpbmdEYXRhKSB7XG4gIGxldCBqc29uRGF0YSA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBqc29uRGF0YSA9IEpTT04ucGFyc2Uoc3RyaW5nRGF0YSk7IFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBzdXBwbGllZCBzdHJpbmcgaXMgbm90IGEgdmFsaWQganNvbiBkYXRhXCIpO1xuICB9XG5cbiAgcmV0dXJuIGpzb25EYXRhO1xufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2xpYi9Kc29uL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBSUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///142\n");

/***/ }),
/* 143 */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 44);\n\nvar _Home = __webpack_require__(/*! ./containers/Home/ */ 144);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9BcHAuanM/MTRiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSG9tZS8nO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17SG9tZUNvbnRhaW5lcn0+PC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///143\n");

/***/ }),
/* 144 */
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _View = __webpack_require__(/*! ./View */ 145);\n\nvar _View2 = _interopRequireDefault(_View);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HomeContainer = function HomeContainer(_ref) {\n  var getProducts = _ref.getProducts;\n\n  return _react2.default.createElement(_View2.default, null);\n};\n\nexports.default = HomeContainer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0hvbWUvaW5kZXguanM/MGEyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhvbWVDb250YWluZXJWaWV3IGZyb20gJy4vVmlldyc7XG5cbmNvbnN0IEhvbWVDb250YWluZXIgPSBmdW5jdGlvbiAoeyBnZXRQcm9kdWN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEhvbWVDb250YWluZXJWaWV3IC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnRhaW5lcnMvSG9tZS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///144\n");

/***/ }),
/* 145 */
/*!*************************************!*\
  !*** ./src/containers/Home/View.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 17);\n\nvar _ProductsList = __webpack_require__(/*! ./components/ProductsList/ */ 146);\n\nvar _ProductsList2 = _interopRequireDefault(_ProductsList);\n\nvar _GetProductButton = __webpack_require__(/*! ./components/GetProductButton/ */ 148);\n\nvar _GetProductButton2 = _interopRequireDefault(_GetProductButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HomeContainerView = function HomeContainerView(_ref) {\n  var products = _ref.products;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_ProductsList2.default, { products: products }),\n    _react2.default.createElement('br', null),\n    _react2.default.createElement(_GetProductButton2.default, null)\n  );\n};\n\nHomeContainerView.propTypes = {\n  products: _propTypes2.default.array.isRequired\n};\n\nfunction mapStateToProps(_ref2) {\n  var products = _ref2.products;\n\n  return {\n    products: products.data\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(HomeContainerView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0hvbWUvVmlldy5qcz9kNDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFByb2R1Y3RzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdHNMaXN0LydcbmltcG9ydCBHZXRQcm9kdWN0QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9HZXRQcm9kdWN0QnV0dG9uLydcblxuY29uc3QgSG9tZUNvbnRhaW5lclZpZXcgPSBmdW5jdGlvbiAoeyBwcm9kdWN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQcm9kdWN0c0xpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8R2V0UHJvZHVjdEJ1dHRvbiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ib21lQ29udGFpbmVyVmlldy5wcm9wVHlwZXMgPSB7XG4gIHByb2R1Y3RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgcHJvZHVjdHMgfSkge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzXG4pKEhvbWVDb250YWluZXJWaWV3KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29udGFpbmVycy9Ib21lL1ZpZXcuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///145\n");

/***/ }),
/* 146 */
/*!**************************************************************!*\
  !*** ./src/containers/Home/components/ProductsList/index.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _View = __webpack_require__(/*! ./View */ 147);\n\nvar _View2 = _interopRequireDefault(_View);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ProductsList = function ProductsList(_ref) {\n  var products = _ref.products;\n\n  return _react2.default.createElement(_View2.default, { products: products });\n};\n\nProductsList.propTypes = {\n  products: _propTypes2.default.array.isRequired\n};\n\nexports.default = ProductsList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0hvbWUvY29tcG9uZW50cy9Qcm9kdWN0c0xpc3QvaW5kZXguanM/NjI3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFByb2R1Y3RMaXN0VmlldyBmcm9tICcuL1ZpZXcnO1xuXG5jb25zdCBQcm9kdWN0c0xpc3QgPSBmdW5jdGlvbiAoeyBwcm9kdWN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RMaXN0VmlldyBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICk7XG59XG5cblByb2R1Y3RzTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHByb2R1Y3RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0xpc3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnRhaW5lcnMvSG9tZS9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///146\n");

/***/ }),
/* 147 */
/*!*************************************************************!*\
  !*** ./src/containers/Home/components/ProductsList/View.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ProductsListView = function ProductsListView(_ref) {\n  var products = _ref.products;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    products && products.map(function (product, index) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'products', key: index },\n        product.name\n      );\n    })\n  );\n};\n\nProductsListView.propTypes = {\n  products: _propTypes2.default.array.isRequired\n};\n\nexports.default = ProductsListView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0hvbWUvY29tcG9uZW50cy9Qcm9kdWN0c0xpc3QvVmlldy5qcz8wNmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQcm9kdWN0c0xpc3RWaWV3ID0gZnVuY3Rpb24gKHsgcHJvZHVjdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCIga2V5PXtpbmRleH0+e3Byb2R1Y3QubmFtZX08L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Qcm9kdWN0c0xpc3RWaWV3LnByb3BUeXBlcyA9IHtcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzTGlzdFZpZXdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnRhaW5lcnMvSG9tZS9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdC9WaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///147\n");

/***/ }),
/* 148 */
/*!******************************************************************!*\
  !*** ./src/containers/Home/components/GetProductButton/index.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 17);\n\nvar _products = __webpack_require__(/*! @App/dataProviders/products */ 149);\n\nvar _View = __webpack_require__(/*! ./View */ 150);\n\nvar _View2 = _interopRequireDefault(_View);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GetProductButton = function GetProductButton(_ref) {\n  var getProducts = _ref.getProducts;\n\n  var onClickHandler = function onClickHandler() {\n    getProducts();\n  };\n\n  return _react2.default.createElement(_View2.default, { onClickHandler: onClickHandler });\n};\n\nGetProductButton.propTypes = {\n  getProducts: _propTypes2.default.func.isRequired\n};\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    getProducts: function getProducts() {\n      return dispatch((0, _products.getProducts)());\n    }\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(GetProductButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0hvbWUvY29tcG9uZW50cy9HZXRQcm9kdWN0QnV0dG9uL2luZGV4LmpzPzVhOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0BBcHAvZGF0YVByb3ZpZGVycy9wcm9kdWN0cyc7XG5pbXBvcnQgR2V0UHJvZHVjdEJ1dHRvblZpZXcgZnJvbSAnLi9WaWV3JztcblxuY29uc3QgR2V0UHJvZHVjdEJ1dHRvbiA9IGZ1bmN0aW9uICh7IGdldFByb2R1Y3RzIH0pIHtcbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgZ2V0UHJvZHVjdHMoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdldFByb2R1Y3RCdXR0b25WaWV3IG9uQ2xpY2tIYW5kbGVyPXtvbkNsaWNrSGFuZGxlcn0gLz5cbiAgKTtcbn1cblxuR2V0UHJvZHVjdEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGdldFByb2R1Y3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGdldFByb2R1Y3RzOiAoKSA9PiBkaXNwYXRjaChnZXRQcm9kdWN0cygpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG51bGwsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShHZXRQcm9kdWN0QnV0dG9uKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29udGFpbmVycy9Ib21lL2NvbXBvbmVudHMvR2V0UHJvZHVjdEJ1dHRvbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///148\n");

/***/ }),
/* 149 */
/*!***************************************!*\
  !*** ./src/dataProviders/products.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getProducts = getProducts;\n\nvar _products = __webpack_require__(/*! @App/actions/products */ 52);\n\nfunction getProducts() {\n  return (0, _products.createAsyncProducts)();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9kYXRhUHJvdmlkZXJzL3Byb2R1Y3RzLmpzP2EyZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNQcm9kdWN0cyB9IGZyb20gJ0BBcHAvYWN0aW9ucy9wcm9kdWN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgcmV0dXJuIGNyZWF0ZUFzeW5jUHJvZHVjdHMoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2RhdGFQcm92aWRlcnMvcHJvZHVjdHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///149\n");

/***/ }),
/* 150 */
/*!*****************************************************************!*\
  !*** ./src/containers/Home/components/GetProductButton/View.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GetProductButtonView = function GetProductButtonView(_ref) {\n  var onClickHandler = _ref.onClickHandler;\n\n  return _react2.default.createElement('input', { type: 'button', value: 'Get products', id: 'getProducts', onClick: onClickHandler });\n};\n\nGetProductButtonView.propTypes = {\n  onClickHandler: _propTypes2.default.func.isRequired\n};\n\nexports.default = GetProductButtonView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0hvbWUvY29tcG9uZW50cy9HZXRQcm9kdWN0QnV0dG9uL1ZpZXcuanM/ZTlmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgR2V0UHJvZHVjdEJ1dHRvblZpZXcgPSBmdW5jdGlvbiAoeyBvbkNsaWNrSGFuZGxlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkdldCBwcm9kdWN0c1wiIGlkPVwiZ2V0UHJvZHVjdHNcIiBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gLz5cbiAgKTtcbn1cblxuR2V0UHJvZHVjdEJ1dHRvblZpZXcucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBHZXRQcm9kdWN0QnV0dG9uVmlld1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29udGFpbmVycy9Ib21lL2NvbXBvbmVudHMvR2V0UHJvZHVjdEJ1dHRvbi9WaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///150\n");

/***/ })
/******/ ]);