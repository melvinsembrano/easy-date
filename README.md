[![Build Status](https://travis-ci.org/melvinsembrano/easy-date.svg?branch=master)](https://travis-ci.org/melvinsembrano/easy-date)
# EasyDate
EasyDate is a Javascript extension for easy dates manipulations which is
heavily inspired by Rails ActiveSupport::Duration class.

### Installation
**Node.js** `npm install easy-date --save-dev`

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
```

var nextDate = 3..days().fromNow();
var prevDate = 10..months().ago();

5..years().since(newDate);


```

### Contributing
TODO

##### Copyright
Copyright (c) 2015 Melvin Sembrano. See [LICENSE](LICENSE) for further details
