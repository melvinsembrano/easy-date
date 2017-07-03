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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ })
/******/ ]);