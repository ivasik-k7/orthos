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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_nameValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nameValidation */ \"./src/js/modules/nameValidation.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mask */ \"./src/js/modules/mask.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_modules_nameValidation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"[data-reg-name]\");\n  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"[data-reg-tel]\");\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar mask = function mask(selector) {\n  var setCursor = function setCursor(pos, elem) {\n    elem.focus();\n\n    if (elem.setSelectionRange) {\n      elem.setSelectionRange(pos, pos);\n    } else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse = true;\n      range.moveEnd(\"character\", pos);\n      range.moveStart(\"character\", pos);\n      range.select();\n    }\n  };\n\n  function makeMask(e) {\n    var matrix = \"+38 (___) ___ __ __\";\n    var i = 0;\n    var def = matrix.replace(/\\D/g, \"\");\n    var val = this.value.replace(/\\D/g, \"\");\n\n    if (def.length >= val.length) {\n      val = def;\n    }\n\n    this.value = matrix.replace(/./g, function (a) {\n      return /[_\\d]/.test(a) && i < val ? val.charAt(i++) : i >= val.length ? \"\" : a;\n    });\n\n    if (e.type === \"blur\") {\n      if (this.value.length == 2) {\n        this.value = \"\";\n      }\n    } else {\n      setCursor(this.value.length, this);\n    }\n  }\n\n  var inputsList = document.querySelectorAll(selector);\n  inputsList.forEach(function (inp) {\n    inp.addEventListener(\"input\", makeMask);\n    inp.addEventListener(\"focus\", makeMask);\n    inp.addEventListener(\"blur\", makeMask);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mask);\n\n//# sourceURL=webpack:///./src/js/modules/mask.js?");

/***/ }),

/***/ "./src/js/modules/nameValidation.js":
/*!******************************************!*\
  !*** ./src/js/modules/nameValidation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar nameValitaion = function nameValitaion(selecotor) {\n  var nameInputs = document.querySelectorAll(selecotor);\n  var regex = /[^a-zA-Zа-яА-ЯёЁіІїЇ .]/g;\n\n  if (nameInputs.length) {\n    nameInputs.forEach(function (item) {\n      if (!regex.test(item.value)) {\n        item.addEventListener(\"keyup\", function () {\n          this.value = this.value.replace(regex, \"\");\n        });\n      } else {\n        return true;\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nameValitaion);\n\n//# sourceURL=webpack:///./src/js/modules/nameValidation.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });