(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/date-format.js":
/*!****************************!*\
  !*** ./src/date-format.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*\n * Date Format 1.2.3\n * (c) 2007-2009 Steven Levithan <stevenlevithan.com>\n * MIT license\n *\n * Includes enhancements by Scott Trenda <scott.trenda.net>\n * and Kris Kowal <cixar.com/~kris.kowal/>\n *\n * Accepts a date, a mask, or a date and a mask.\n * Returns a formatted version of the given date.\n * The date defaults to the current date/time.\n * The mask defaults to dateFormat.masks.default.\n */\n\nvar dateFormat = function () {\n  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\\1?|[LloSZ]|\"[^\"]*\"|'[^']*'/g;\n  var timezone = /\\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g;\n  var timezoneClip = /[^-+\\dA-Z]/g;\n\n  var pad = function pad(val, len) {\n    val = String(val);\n    len = len || 2;\n    while (val.length < len) {\n      val = '0' + val;\n    }\n    return val;\n  };\n\n  // Regexes and supporting functions are cached through closure\n  return function (date, mask, utc) {\n    var dF = dateFormat;\n    // You can't provide utc if you skip other args (use the \"UTC:\" mask prefix)\n    if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/\\d/.test(date)) {\n      mask = date;\n      date = undefined;\n    }\n    // Passing date through Date applies Date.parse, if necessary\n    date = date ? new Date(date) : new Date();\n    if (isNaN(date)) {\n      throw SyntaxError('invalid date');\n    }\n    mask = String(dF.masks[mask] || mask || dF.masks['default']);\n    // Allow setting the utc argument via the mask\n    if (mask.slice(0, 4) === 'UTC:') {\n      mask = mask.slice(4);\n      utc = true;\n    }\n    var _ = utc ? 'getUTC' : 'get';\n    var d = date[_ + 'Date']();\n    var D = date[_ + 'Day']();\n    var m = date[_ + 'Month']();\n    var y = date[_ + 'FullYear']();\n    var H = date[_ + 'Hours']();\n    var M = date[_ + 'Minutes']();\n    var s = date[_ + 'Seconds']();\n    var L = date[_ + 'Milliseconds']();\n    var o = utc ? 0 : date.getTimezoneOffset();\n    var flags = {\n      d: d,\n      dd: pad(d),\n      ddd: dF.i18n.dayNames[D],\n      dddd: dF.i18n.dayNames[D + 7],\n      m: m + 1,\n      mm: pad(m + 1),\n      mmm: dF.i18n.monthNames[m],\n      mmmm: dF.i18n.monthNames[m + 12],\n      yy: String(y).slice(2),\n      yyyy: y,\n      h: H % 12 || 12,\n      hh: pad(H % 12 || 12),\n      H: H,\n      HH: pad(H),\n      M: M,\n      MM: pad(M),\n      s: s,\n      ss: pad(s),\n      l: pad(L, 3),\n      L: pad(L > 99 ? Math.round(L / 10) : L),\n      t: H < 12 ? 'a' : 'p',\n      tt: H < 12 ? 'am' : 'pm',\n      T: H < 12 ? 'A' : 'P',\n      TT: H < 12 ? 'AM' : 'PM',\n      Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),\n      o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),\n      S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]\n    };\n    return mask.replace(token, function ($0) {\n      if ($0 in flags) {\n        return flags[$0];\n      } else {\n        return $0.slice(1, $0.length - 1);\n      }\n    });\n  };\n}();\n// Some common format strings\ndateFormat.masks = {\n  'default': 'ddd mmm dd yyyy HH:MM:ss',\n  shortDate: 'm/d/yy',\n  mediumDate: 'mmm d, yyyy',\n  longDate: 'mmmm d, yyyy',\n  fullDate: 'dddd, mmmm d, yyyy',\n  shortTime: 'h:MM TT',\n  mediumTime: 'h:MM:ss TT',\n  longTime: 'h:MM:ss TT Z',\n  isoDate: 'yyyy-mm-dd',\n  isoTime: 'HH:MM:ss',\n  isoDateTime: 'yyyy-mm-dd\\'T\\'HH:MM:ss',\n  isoUtcDateTime: 'UTC:yyyy-mm-dd\\'T\\'HH:MM:ss\\'Z\\''\n};\n// Internationalization strings\ndateFormat.i18n = {\n  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\n\n// For convenience...\nif (Date.prototype.format === undefined) {\n  Date.prototype.format = function (mask, utc) {\n    return dateFormat(this, mask, utc);\n  };\n}\n\nexports.default = dateFormat;\n\n//# sourceURL=webpack:///./src/date-format.js?");

/***/ }),

/***/ "./src/easy-date.js":
/*!**************************!*\
  !*** ./src/easy-date.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.backwardCompatibility = exports.easyDate = exports.EasyDate = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dateFormat = __webpack_require__(/*! ./date-format */ \"./src/date-format.js\");\n\nvar _dateFormat2 = _interopRequireDefault(_dateFormat);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar EasyDate = function () {\n  function EasyDate(date) {\n    _classCallCheck(this, EasyDate);\n\n    if (typeof date === 'string') {\n      this._date = new Date(date);\n    } else {\n      this._date = date;\n    }\n  }\n\n  _createClass(EasyDate, [{\n    key: \"getDate\",\n    value: function getDate() {\n      return this._date;\n    }\n  }, {\n    key: \"format\",\n    value: function format(mask) {\n      return (0, _dateFormat2.default)(this._date, mask);\n    }\n  }], [{\n    key: \"formatDate\",\n    value: function formatDate(date, mask) {\n      if (!!mask) {\n        return (0, _dateFormat2.default)(date, mask);\n      } else {\n        return date;\n      }\n    }\n  }, {\n    key: \"today\",\n    value: function today(mask) {\n      return EasyDate.formatDate(new Date(), mask);\n    }\n  }, {\n    key: \"yesterday\",\n    value: function yesterday(mask) {\n      return new EasyD(1, 'day').ago(mask);\n    }\n  }, {\n    key: \"tomorrow\",\n    value: function tomorrow(mask) {\n      return new EasyD(1, 'day').fromNow(mask);\n    }\n  }]);\n\n  return EasyDate;\n}();\n\nvar EasyD = function () {\n  function EasyD(value, conversionType) {\n    _classCallCheck(this, EasyD);\n\n    _initialiseProps.call(this);\n\n    this.value = parseInt(value);\n    this.conversionType = conversionType;\n  }\n\n  _createClass(EasyD, [{\n    key: \"fromNow\",\n    value: function fromNow(mask) {\n      var processor = this.process(mask);\n      if (processor) {\n        return processor.fromNow();\n      } else {\n        return \"Processor not found.\";\n      }\n    }\n  }, {\n    key: \"ago\",\n    value: function ago(mask) {\n      var processor = this.process(mask);\n      if (processor) {\n        return processor.ago();\n      } else {\n        return \"Processor not found.\";\n      }\n    }\n  }, {\n    key: \"since\",\n    value: function since(date, mask) {\n      this.now = new Date(date.valueOf());\n      return this.fromNow(mask);\n    }\n  }, {\n    key: \"until\",\n    value: function until(date, mask) {\n      this.now = new Date(date.valueOf());\n      return this.ago(mask);\n    }\n  }, {\n    key: \"before\",\n    value: function before(date, mask) {\n      return this.until(date, mask);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.value + \" \" + this.conversionType + (this.value > 1 ? 's' : '');\n    }\n  }, {\n    key: \"process\",\n    value: function process(mask) {\n      var conversionType = this.conversionType,\n          timeProcessor = this.timeProcessor;\n\n      var now = this.now || new Date();\n      return {\n        minute: function minute() {\n          return timeProcessor(now, now.setMinutes, now.getMinutes, mask);\n        },\n        hour: function hour() {\n          return timeProcessor(now, now.setHours, now.getHours, mask);\n        },\n        day: function day() {\n          return timeProcessor(now, now.setDate, now.getDate, mask);\n        },\n        week: function week() {\n          return null;\n        },\n        month: function month() {\n          return timeProcessor(now, now.setMonth, now.getMonth, mask);\n        },\n        year: function year() {\n          return timeProcessor(now, now.setFullYear, now.getFullYear, mask);\n        }\n      }[conversionType]();\n    }\n  }]);\n\n  return EasyD;\n}();\n\nvar _initialiseProps = function _initialiseProps() {\n  var _this = this;\n\n  this.timeProcessor = function (now, set, get, mask) {\n    var value = _this.value;\n\n    return {\n      ago: function ago() {\n        set.call(now, get.call(now) - value);\n        return EasyDate.formatDate(now, mask);\n      },\n      fromNow: function fromNow() {\n        set.call(now, get.call(now) + value);\n        return EasyDate.formatDate(now, mask);\n      }\n    };\n  };\n};\n\nfunction easyDate(value) {\n  var days = function days() {\n    return new EasyD(value, 'day');\n  };\n\n  var months = function months() {\n    return new EasyD(value, 'month');\n  };\n\n  var years = function years() {\n    return new EasyD(value, 'year');\n  };\n\n  var hours = function hours() {\n    return new EasyD(value, 'hour');\n  };\n\n  var minutes = function minutes() {\n    return new EasyD(value, 'minute');\n  };\n\n  return {\n    minute: minutes,\n    minutes: minutes,\n    hour: hours,\n    hours: hours,\n    day: days,\n    days: days,\n    month: months,\n    months: months,\n    year: years,\n    years: years\n  };\n}\n\nfunction backwardCompatibility() {\n\n  var days = function days() {\n    return new EasyD(this, 'day');\n  };\n\n  var months = function months() {\n    return new EasyD(this, 'month');\n  };\n\n  var years = function years() {\n    return new EasyD(this, 'year');\n  };\n\n  var hours = function hours() {\n    return new EasyD(this, 'hour');\n  };\n\n  var minutes = function minutes() {\n    return new EasyD(this, 'minute');\n  };\n\n  // $FlowFixMe\n  Number.prototype.day = days;\n  // $FlowFixMe\n  Number.prototype.days = days;\n  // $FlowFixMe\n  Number.prototype.month = months;\n  // $FlowFixMe\n  Number.prototype.months = months;\n  // $FlowFixMe\n  Number.prototype.years = years;\n  // $FlowFixMe\n  Number.prototype.year = years;\n  // $FlowFixMe\n  Number.prototype.hours = hours;\n  // $FlowFixMe\n  Number.prototype.hour = hours;\n  // $FlowFixMe\n  Number.prototype.minute = minutes;\n\n  // $FlowFixMe\n  Object.assign(Date, {\n    today: function today(mask) {\n      return EasyDate.today(mask);\n    },\n    yesterday: function yesterday(mask) {\n      return EasyDate.yesterday(mask);\n    },\n    tomorrow: function tomorrow(mask) {\n      return EasyDate.tomorrow(mask);\n    },\n    tommorrow: function tommorrow(mask) {\n      return EasyDate.tomorrow(mask);\n    }\n  });\n}\n\nexports.EasyDate = EasyDate;\nexports.easyDate = easyDate;\nexports.backwardCompatibility = backwardCompatibility;\n\n//# sourceURL=webpack:///./src/easy-date.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/easy-date.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/easy-date.js */\"./src/easy-date.js\");\n\n\n//# sourceURL=webpack:///multi_./src/easy-date.js?");

/***/ })

/******/ });
});