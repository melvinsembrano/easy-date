[![Build Status](https://travis-ci.org/melvinsembrano/easy-date.svg?branch=master)](https://travis-ci.org/melvinsembrano/easy-date)
[![npm version](https://badge.fury.io/js/easy-date.svg)](https://badge.fury.io/js/easy-date)
# EasyDate
EasyDate is a Javascript extension for easy dates manipulations which was
heavily inspired by Rails ActiveSupport::Duration class.

### Installation
**Node.js** `npm install easy-date`

**Bower** `bower install easy-date`

[**Download the latest**](https://github.com/melvinsembrano/easy-date/archive/master.zip)

### Usage
**Node.js**
```
require('easy-date');
```
**In Browser**
```
<script src="easy-date.js"></script>
```
**Quickstart usage:**

by adding the codes above, new methods are now available on all numbers:
* day(), days()
* month(), months()
* year(), years()
* hour(), hours()
```
var date1 = 3..days().fromNow();
var date2 = (10).months().ago();

var yesterday = 1..day().ago();
var today = new Date();
var num = 5;
num.years().before(today); //==> is equal to 5..years().ago()
num.years().since(today); //==> is equal to 5..years().fromNow()

```

it will also add some basic date helpers
```
Date.today() //=> new Date()
Date.yesterday() //=> 1..day().ago()
Date.tommorrow() //=> 1..day().fromNow()
```

#### Formatting
The date.format library written by Steven Levithan (http://blog.stevenlevithan.com/archives/date-time-format) is now integrated for a very nice date formatting.

```
5..days().fromNow().format("d mmmm yyyy");
// is same as
5..days().fromNow("d mmmm yyyy");

// other functions
Date.today("yyyy-mm-dd");
Date.yesterday("dddd");
3..days().since(Date.yesterday(), "mmm dd, yyyy");
```

[Check the complete formatting here](FORMATTING.md)

#### Contributing to easy-date

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the webpack.config.js, package.json, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.
* Checkout package.json, there are few scripts that are very helpful during development.

##### Copyright
Copyright (c) 2017 Melvin Sembrano. See [LICENSE](LICENSE) for further details
