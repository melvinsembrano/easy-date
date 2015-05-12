[![Build Status](https://travis-ci.org/melvinsembrano/easy-date.svg?branch=master)](https://travis-ci.org/melvinsembrano/easy-date)
# EasyDate
EasyDate is a Javascript extension for easy dates manipulations which is
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
var date2 = 10..months().ago();

var yesterday = 1..day().ago();
var today = new Date();
var num = 5;
num.years().until(today); //==> is equal to 5..years().ago()
num.years().since(today); //==> is equal to 5..years().fromNow()

```

#### Contributing to easy-date
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Gruntfile, package.json, travis.yml, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

##### Copyright
Copyright (c) 2015 Melvin Sembrano. See [LICENSE](LICENSE) for further details
