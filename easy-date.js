
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


/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
#
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
#
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function() {
  var dateFormat;

  dateFormat = (function() {
    var pad, timezone, timezoneClip, token;
    token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
    timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
    timezoneClip = /[^-+\dA-Z]/g;
    pad = function(val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) {
        val = '0' + val;
      }
      return val;
    };
    return function(date, mask, utc) {
      var D, H, L, M, _, d, dF, flags, m, o, s, y;
      dF = dateFormat;
      if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/\d/.test(date)) {
        mask = date;
        date = void 0;
      }
      date = date ? new Date(date) : new Date;
      if (isNaN(date)) {
        throw SyntaxError('invalid date');
      }
      mask = String(dF.masks[mask] || mask || dF.masks['default']);
      if (mask.slice(0, 4) === 'UTC:') {
        mask = mask.slice(4);
        utc = true;
      }
      _ = utc ? 'getUTC' : 'get';
      d = date[_ + 'Date']();
      D = date[_ + 'Day']();
      m = date[_ + 'Month']();
      y = date[_ + 'FullYear']();
      H = date[_ + 'Hours']();
      M = date[_ + 'Minutes']();
      s = date[_ + 'Seconds']();
      L = date[_ + 'Milliseconds']();
      o = utc ? 0 : date.getTimezoneOffset();
      flags = {
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
        S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - (d % 10) !== 10) * d % 10]
      };
      return mask.replace(token, function($0) {
        if ($0 in flags) {
          return flags[$0];
        } else {
          return $0.slice(1, $0.length - 1);
        }
      });
    };
  })();

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

  dateFormat.i18n = {
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  if (Date.prototype.format === void 0) {
    Date.prototype.format = function(mask, utc) {
      return dateFormat(this, mask, utc);
    };
  }

}).call(this);
