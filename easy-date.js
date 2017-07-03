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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * EasyDate
 * is a Javascript extension for easy dates manipulations which is heavily inspired by Rails ActiveSupport::Duration class.
 * Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)
 * License: MIT
 */
var EasyDate = function EasyDate(value, type) {
  var types = {
    0: "day",
    1: "week",
    2: "month",
    3: "year",
    4: "hour"
  };

  this.value = parseInt(value);
  this.type = types[type];
};

EasyDate.prototype.toString = function () {
  return this.value + " " + this.type + (this.value > 1 ? 's' : '');
};

EasyDate.prototype.fromNow = function (mask) {
  switch (this.type) {
    case "day":
      return this._daysFromNow(mask);
    case "month":
      return this._monthsFromNow(mask);
    case "year":
      return this._yearsFromNow(mask);
    case "hour":
      return this._hoursFromNow(mask);
    default:
      return console.warn("EasyDate: " + this.type + "().fromNow() not yet implemented.");
  }
};

EasyDate.prototype.ago = function (mask) {
  switch (this.type) {
    case "day":
      return this._daysAgo(mask);
    case "month":
      return this._monthsAgo(mask);
    case "year":
      return this._yearsAgo(mask);
    case "hour":
      return this._hoursAgo(mask);
    default:
      return console.warn("EasyDate: " + this.type + "().ago() not yet implemented.");
  }
};

EasyDate.prototype.since = function (date, mask) {
  this.now = new Date(date.valueOf());
  return this.fromNow(mask);
};

EasyDate.prototype.until = function (date, mask) {
  this.now = new Date(date.valueOf());
  return this.ago(mask);
};

EasyDate.prototype.before = function (date, mask) {
  return this.until(date, mask);
};

EasyDate.prototype._daysFromNow = function (mask) {
  var now = this.now || new Date();
  now.setDate(now.getDate() + this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._daysAgo = function (mask) {
  var now = this.now || new Date();
  now.setDate(now.getDate() - this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._monthsFromNow = function (mask) {
  var now = this.now || new Date();
  now.setMonth(now.getMonth() + this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._monthsAgo = function (mask) {
  var now = this.now || new Date();
  now.setMonth(now.getMonth() - this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._yearsFromNow = function (mask) {
  var now = this.now || new Date();
  now.setFullYear(now.getFullYear() + this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._yearsAgo = function (mask) {
  var now = this.now || new Date();
  now.setFullYear(now.getFullYear() - this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._hoursFromNow = function (mask) {
  var now = this.now || new Date();
  now.setHours(now.getHours() + this.value);
  return formatDate(now, mask);
};

EasyDate.prototype._hoursAgo = function (mask) {
  var now = this.now || new Date();
  now.setHours(now.getHours() - this.value);
  return formatDate(now, mask);
};

var formatDate = function formatDate(date, mask) {
  if (mask === undefined) {
    return date;
  } else {
    return date.format(mask);
  }
};

var days = function days() {
  return new EasyDate(this, 0);
};
var months = function months() {
  return new EasyDate(this, 2);
};
var years = function years() {
  return new EasyDate(this, 3);
};

var hours = function hours() {
  return new EasyDate(this, 4);
};

Number.prototype.day = days;
Number.prototype.days = days;
Number.prototype.month = months;
Number.prototype.months = months;
Number.prototype.years = years;
Number.prototype.year = years;
Number.prototype.hours = hours;
Number.prototype.hour = hours;

Date.today = function (mask) {
  return formatDate(new this(), mask);
};

Date.yesterday = function (mask) {
  return 1 .day().ago(mask);
};

Date.tommorrow = function (mask) {
  return 1 .day().fromNow(mask);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g;

  var pad = function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  };

  // Regexes and supporting functions are cached through closure
  return function (date, mask, utc) {
    var dF = dateFormat;
    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
    if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    }
    // Passing date through Date applies Date.parse, if necessary
    date = date ? new Date(date) : new Date();
    if (isNaN(date)) {
      throw SyntaxError('invalid date');
    }
    mask = String(dF.masks[mask] || mask || dF.masks['default']);
    // Allow setting the utc argument via the mask
    if (mask.slice(0, 4) === 'UTC:') {
      mask = mask.slice(4);
      utc = true;
    }
    var _ = utc ? 'getUTC' : 'get';
    var d = date[_ + 'Date']();
    var D = date[_ + 'Day']();
    var m = date[_ + 'Month']();
    var y = date[_ + 'FullYear']();
    var H = date[_ + 'Hours']();
    var M = date[_ + 'Minutes']();
    var s = date[_ + 'Seconds']();
    var L = date[_ + 'Milliseconds']();
    var o = utc ? 0 : date.getTimezoneOffset();
    var flags = {
      d: d,
      dd: pad(d),
      ddd: dF.i18n.dayNames[D],
      dddd: dF.i18n.dayNames[D + 7],
      m: m + 1,
      mm: pad(m + 1),
      mmm: dF.i18n.monthNames[m],
      mmmm: dF.i18n.monthNames[m + 12],
      yy: String(y).slice(2),
      yyyy: y,
      h: H % 12 || 12,
      hh: pad(H % 12 || 12),
      H: H,
      HH: pad(H),
      M: M,
      MM: pad(M),
      s: s,
      ss: pad(s),
      l: pad(L, 3),
      L: pad(L > 99 ? Math.round(L / 10) : L),
      t: H < 12 ? 'a' : 'p',
      tt: H < 12 ? 'am' : 'pm',
      T: H < 12 ? 'A' : 'P',
      TT: H < 12 ? 'AM' : 'PM',
      Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
      o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
      S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
    };
    return mask.replace(token, function ($0) {
      if ($0 in flags) {
        return flags[$0];
      } else {
        return $0.slice(1, $0.length - 1);
      }
    });
  };
}();
// Some common format strings
dateFormat.masks = {
  'default': 'ddd mmm dd yyyy HH:MM:ss',
  shortDate: 'm/d/yy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:ss TT',
  longTime: 'h:MM:ss TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:ss',
  isoDateTime: 'yyyy-mm-dd\'T\'HH:MM:ss',
  isoUtcDateTime: 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\''
};
// Internationalization strings
dateFormat.i18n = {
  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// For convenience...
if (Date.prototype.format === undefined) {
  Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
  };
}

/***/ })
/******/ ]);