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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/easy-date.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/easy-date.js":
/*!**************************!*\
  !*** ./src/easy-date.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n * EasyDate\n * is a Javascript extension for easy dates manipulations which is heavily inspired by Rails ActiveSupport::Duration class.\n * Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)\n * License: MIT\n */\nvar EasyDate = function EasyDate(value, type) {\n  var types = {\n    0: \"day\",\n    1: \"week\",\n    2: \"month\",\n    3: \"year\",\n    4: \"hour\"\n  };\n\n  this.value = parseInt(value);\n  this.type = types[type];\n};\n\nEasyDate.prototype.toString = function () {\n  return this.value + \" \" + this.type + (this.value > 1 ? 's' : '');\n};\n\nEasyDate.prototype.fromNow = function (mask) {\n  switch (this.type) {\n    case \"day\":\n      return this._daysFromNow(mask);\n    case \"month\":\n      return this._monthsFromNow(mask);\n    case \"year\":\n      return this._yearsFromNow(mask);\n    case \"hour\":\n      return this._hoursFromNow(mask);\n    default:\n      return console.warn(\"EasyDate: \" + this.type + \"().fromNow() not yet implemented.\");\n  }\n};\n\nEasyDate.prototype.ago = function (mask) {\n  switch (this.type) {\n    case \"day\":\n      return this._daysAgo(mask);\n    case \"month\":\n      return this._monthsAgo(mask);\n    case \"year\":\n      return this._yearsAgo(mask);\n    case \"hour\":\n      return this._hoursAgo(mask);\n    default:\n      return console.warn(\"EasyDate: \" + this.type + \"().ago() not yet implemented.\");\n  }\n};\n\nEasyDate.prototype.since = function (date, mask) {\n  this.now = new Date(date.valueOf());\n  return this.fromNow(mask);\n};\n\nEasyDate.prototype.until = function (date, mask) {\n  this.now = new Date(date.valueOf());\n  return this.ago(mask);\n};\n\nEasyDate.prototype.before = function (date, mask) {\n  return this.until(date, mask);\n};\n\nEasyDate.prototype._daysFromNow = function (mask) {\n  var now = this.now || new Date();\n  now.setDate(now.getDate() + this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._daysAgo = function (mask) {\n  var now = this.now || new Date();\n  now.setDate(now.getDate() - this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._monthsFromNow = function (mask) {\n  var now = this.now || new Date();\n  now.setMonth(now.getMonth() + this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._monthsAgo = function (mask) {\n  var now = this.now || new Date();\n  now.setMonth(now.getMonth() - this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._yearsFromNow = function (mask) {\n  var now = this.now || new Date();\n  now.setFullYear(now.getFullYear() + this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._yearsAgo = function (mask) {\n  var now = this.now || new Date();\n  now.setFullYear(now.getFullYear() - this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._hoursFromNow = function (mask) {\n  var now = this.now || new Date();\n  now.setHours(now.getHours() + this.value);\n  return formatDate(now, mask);\n};\n\nEasyDate.prototype._hoursAgo = function (mask) {\n  var now = this.now || new Date();\n  now.setHours(now.getHours() - this.value);\n  return formatDate(now, mask);\n};\n\nvar formatDate = function formatDate(date, mask) {\n  if (mask === undefined) {\n    return date;\n  } else {\n    return date.format(mask);\n  }\n};\n\nvar days = function days() {\n  return new EasyDate(this, 0);\n};\nvar months = function months() {\n  return new EasyDate(this, 2);\n};\nvar years = function years() {\n  return new EasyDate(this, 3);\n};\n\nvar hours = function hours() {\n  return new EasyDate(this, 4);\n};\n\nNumber.prototype.day = days;\nNumber.prototype.days = days;\nNumber.prototype.month = months;\nNumber.prototype.months = months;\nNumber.prototype.years = years;\nNumber.prototype.year = years;\nNumber.prototype.hours = hours;\nNumber.prototype.hour = hours;\n\nDate.today = function (mask) {\n  return formatDate(new this(), mask);\n};\n\nDate.yesterday = function (mask) {\n  return 1 .day().ago(mask);\n};\n\nDate.tommorrow = function (mask) {\n  return 1 .day().fromNow(mask);\n};\n\n//# sourceURL=webpack:///./src/easy-date.js?");

/***/ })

/******/ });