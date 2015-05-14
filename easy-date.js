
/*
 * EasyDate
 * is a Javascript extension for easy dates manipulations which is heavily inspired by Rails ActiveSupport::Duration class.
 * Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)
 * License: MIT
 */

(function() {
  var EasyDate, days, hours, months, years;

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

  EasyDate.prototype.fromNow = function() {
    switch (this.type) {
      case "day":
        return this._daysFromNow();
      case "month":
        return this._monthsFromNow();
      case "year":
        return this._yearsFromNow();
      case "hour":
        return this._hoursFromNow();
      default:
        return console.warn("EasyDate: " + this.type + "().fromNow() not yet implemented.");
    }
  };

  EasyDate.prototype.ago = function() {
    switch (this.type) {
      case "day":
        return this._daysAgo();
      case "month":
        return this._monthsAgo();
      case "year":
        return this._yearsAgo();
      case "hour":
        return this._hoursAgo();
      default:
        return console.warn("EasyDate: " + this.type + "().ago() not yet implemented.");
    }
  };

  EasyDate.prototype.since = function(date) {
    this.now = new Date(date.valueOf());
    return this.fromNow();
  };

  EasyDate.prototype.until = function(date) {
    this.now = new Date(date.valueOf());
    return this.ago();
  };

  EasyDate.prototype.before = function(date) {
    return this.until(date);
  };

  EasyDate.prototype._daysFromNow = function() {
    var now;
    now = this.now || new Date();
    now.setDate(now.getDate() + this.value);
    return now;
  };

  EasyDate.prototype._daysAgo = function() {
    var now;
    now = this.now || new Date();
    now.setDate(now.getDate() - this.value);
    return now;
  };

  EasyDate.prototype._monthsFromNow = function() {
    var now;
    now = this.now || new Date();
    now.setMonth(now.getMonth() + this.value);
    return now;
  };

  EasyDate.prototype._monthsAgo = function() {
    var now;
    now = this.now || new Date();
    now.setMonth(now.getMonth() - this.value);
    return now;
  };

  EasyDate.prototype._yearsFromNow = function() {
    var now;
    now = this.now || new Date();
    now.setFullYear(now.getFullYear() + this.value);
    return now;
  };

  EasyDate.prototype._yearsAgo = function() {
    var now;
    now = this.now || new Date();
    now.setFullYear(now.getFullYear() - this.value);
    return now;
  };

  EasyDate.prototype._hoursFromNow = function() {
    var now;
    now = this.now || new Date();
    now.setHours(now.getHours() + this.value);
    return now;
  };

  EasyDate.prototype._hoursAgo = function() {
    var now;
    now = this.now || new Date();
    now.setHours(now.getHours() - this.value);
    return now;
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

  Date.today = function() {
    return new this();
  };

  Date.yesterday = function() {
    return 1..day().ago();
  };

  Date.tommorrow = function() {
    return 1..day().fromNow();
  };

}).call(this);
