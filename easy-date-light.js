
/*
 * EasyDate
 * is a Javascript extension for easy dates manipulations which is heavily inspired by Rails ActiveSupport::Duration class.
 * Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)
 * License: MIT
 */

(function() {
  var EasyDate, days, formatDate, hours, months, years;

  EasyDate = function(value, type) {
    var types;
    types = {
      0: "day",
      1: "week",
      2: "month",
      3: "year",
      4: "hour"
    };
    this.value = parseInt(value);
    this.type = types[type];
  };

  EasyDate.prototype.toString = function() {
    return this.value + " " + this.type + (this.value > 1 ? 's' : '');
  };

  EasyDate.prototype.fromNow = function(mask) {
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

  EasyDate.prototype.ago = function(mask) {
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

  EasyDate.prototype.since = function(date, mask) {
    this.now = new Date(date.valueOf());
    return this.fromNow(mask);
  };

  EasyDate.prototype.until = function(date, mask) {
    this.now = new Date(date.valueOf());
    return this.ago(mask);
  };

  EasyDate.prototype.before = function(date, mask) {
    return this.until(date, mask);
  };

  EasyDate.prototype._daysFromNow = function(mask) {
    var now;
    now = this.now || new Date();
    now.setDate(now.getDate() + this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._daysAgo = function(mask) {
    var now;
    now = this.now || new Date();
    now.setDate(now.getDate() - this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._monthsFromNow = function(mask) {
    var now;
    now = this.now || new Date();
    now.setMonth(now.getMonth() + this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._monthsAgo = function(mask) {
    var now;
    now = this.now || new Date();
    now.setMonth(now.getMonth() - this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._yearsFromNow = function(mask) {
    var now;
    now = this.now || new Date();
    now.setFullYear(now.getFullYear() + this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._yearsAgo = function(mask) {
    var now;
    now = this.now || new Date();
    now.setFullYear(now.getFullYear() - this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._hoursFromNow = function(mask) {
    var now;
    now = this.now || new Date();
    now.setHours(now.getHours() + this.value);
    return formatDate(now, mask);
  };

  EasyDate.prototype._hoursAgo = function(mask) {
    var now;
    now = this.now || new Date();
    now.setHours(now.getHours() - this.value);
    return formatDate(now, mask);
  };

  formatDate = function(date, mask) {
    if (mask === void 0) {
      return date;
    } else {
      return date.format(mask);
    }
  };

  days = function() {
    return new EasyDate(this, 0);
  };

  months = function() {
    return new EasyDate(this, 2);
  };

  years = function() {
    return new EasyDate(this, 3);
  };

  hours = function() {
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

  Date.today = function(mask) {
    return formatDate(new this(), mask);
  };

  Date.yesterday = function(mask) {
    return 1..day().ago(mask);
  };

  Date.tommorrow = function(mask) {
    return 1..day().fromNow(mask);
  };

}).call(this);
