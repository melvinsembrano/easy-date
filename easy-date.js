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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundled.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bundled.js":
/*!************************!*\
  !*** ./src/bundled.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./easy-date */ \"./src/easy-date.js\");\n\n__webpack_require__(/*! ./date-format */ \"./src/date-format.js\");\n\n//# sourceURL=webpack:///./src/bundled.js?");

/***/ }),

/***/ "./src/date-format.js":
/*!****************************!*\
  !*** ./src/date-format.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n * Date Format 1.2.3\n * (c) 2007-2009 Steven Levithan <stevenlevithan.com>\n * MIT license\n *\n * Includes enhancements by Scott Trenda <scott.trenda.net>\n * and Kris Kowal <cixar.com/~kris.kowal/>\n *\n * Accepts a date, a mask, or a date and a mask.\n * Returns a formatted version of the given date.\n * The date defaults to the current date/time.\n * The mask defaults to dateFormat.masks.default.\n */\n\nvar dateFormat = function () {\n  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\\1?|[LloSZ]|\"[^\"]*\"|'[^']*'/g;\n  var timezone = /\\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g;\n  var timezoneClip = /[^-+\\dA-Z]/g;\n\n  var pad = function pad(val, len) {\n    val = String(val);\n    len = len || 2;\n    while (val.length < len) {\n      val = '0' + val;\n    }\n    return val;\n  };\n\n  // Regexes and supporting functions are cached through closure\n  return function (date, mask, utc) {\n    var dF = dateFormat;\n    // You can't provide utc if you skip other args (use the \"UTC:\" mask prefix)\n    if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/\\d/.test(date)) {\n      mask = date;\n      date = undefined;\n    }\n    // Passing date through Date applies Date.parse, if necessary\n    date = date ? new Date(date) : new Date();\n    if (isNaN(date)) {\n      throw SyntaxError('invalid date');\n    }\n    mask = String(dF.masks[mask] || mask || dF.masks['default']);\n    // Allow setting the utc argument via the mask\n    if (mask.slice(0, 4) === 'UTC:') {\n      mask = mask.slice(4);\n      utc = true;\n    }\n    var _ = utc ? 'getUTC' : 'get';\n    var d = date[_ + 'Date']();\n    var D = date[_ + 'Day']();\n    var m = date[_ + 'Month']();\n    var y = date[_ + 'FullYear']();\n    var H = date[_ + 'Hours']();\n    var M = date[_ + 'Minutes']();\n    var s = date[_ + 'Seconds']();\n    var L = date[_ + 'Milliseconds']();\n    var o = utc ? 0 : date.getTimezoneOffset();\n    var flags = {\n      d: d,\n      dd: pad(d),\n      ddd: dF.i18n.dayNames[D],\n      dddd: dF.i18n.dayNames[D + 7],\n      m: m + 1,\n      mm: pad(m + 1),\n      mmm: dF.i18n.monthNames[m],\n      mmmm: dF.i18n.monthNames[m + 12],\n      yy: String(y).slice(2),\n      yyyy: y,\n      h: H % 12 || 12,\n      hh: pad(H % 12 || 12),\n      H: H,\n      HH: pad(H),\n      M: M,\n      MM: pad(M),\n      s: s,\n      ss: pad(s),\n      l: pad(L, 3),\n      L: pad(L > 99 ? Math.round(L / 10) : L),\n      t: H < 12 ? 'a' : 'p',\n      tt: H < 12 ? 'am' : 'pm',\n      T: H < 12 ? 'A' : 'P',\n      TT: H < 12 ? 'AM' : 'PM',\n      Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),\n      o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),\n      S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]\n    };\n    return mask.replace(token, function ($0) {\n      if ($0 in flags) {\n        return flags[$0];\n      } else {\n        return $0.slice(1, $0.length - 1);\n      }\n    });\n  };\n}();\n// Some common format strings\ndateFormat.masks = {\n  'default': 'ddd mmm dd yyyy HH:MM:ss',\n  shortDate: 'm/d/yy',\n  mediumDate: 'mmm d, yyyy',\n  longDate: 'mmmm d, yyyy',\n  fullDate: 'dddd, mmmm d, yyyy',\n  shortTime: 'h:MM TT',\n  mediumTime: 'h:MM:ss TT',\n  longTime: 'h:MM:ss TT Z',\n  isoDate: 'yyyy-mm-dd',\n  isoTime: 'HH:MM:ss',\n  isoDateTime: 'yyyy-mm-dd\\'T\\'HH:MM:ss',\n  isoUtcDateTime: 'UTC:yyyy-mm-dd\\'T\\'HH:MM:ss\\'Z\\''\n};\n// Internationalization strings\ndateFormat.i18n = {\n  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\n\n// For convenience...\nif (Date.prototype.format === undefined) {\n  Date.prototype.format = function (mask, utc) {\n    return dateFormat(this, mask, utc);\n  };\n}\n\n//# sourceURL=webpack:///./src/date-format.js?");

/***/ }),

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