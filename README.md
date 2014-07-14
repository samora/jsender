# JSender

[![Build Status](https://travis-ci.org/samora/jsender.svg?branch=master)](https://travis-ci.org/samora/jsender)

Simple and structured application level JSON responses for [Express](http://expressjs.com).
Based on JSend specification ([http://labs.omniti.com/labs/jsend](http://labs.omniti.com/labs/jsend)).

## Installation

```
npm install jsender
```

Setup the middleware in your [Express](http://expressjs.com) app. Before any routes.
```javascript
var express = require('express')
  , jsender = require('jsender')
  ;

var app = express();

// ... (other middlewares)
app.use(jsender());

app.get('/', function (req, res){
  res.success({
    notice: 'Hello, World!'
  });
});

// JSON Response
// {
//   "status": "success",
//   "data": {
//     "notice": "Hello, World!"
//   }
// }
```

## API
JSender augments the node `res` object with the following methods.

### `success(data)`

* __data__: _Optional_ response data object.

```javascript
function (req, res){
  res.success({
    notice: 'Hello, World!'
  });
};

// JSON Response
// {
//   "status": "success",
//   "data": {
//     "notice": "Hello, World!"
//   }
// }
```

### `fail(data)`

* __data__: _Required_ failure data.

```javascript
function (req, res){
  res.fail({
    name: 'Name is required.'
  });
};

// JSON Response
// {
//   "status": "fail",
//   "data": {
//     "name": "Name is required."
//   }
// }
```

### `error(message, data, code)`

* __message__: _Required_ error message.
* __data__: _Optional_ error data.
* __code__: _Optional_ error code.

```javascript
function (req, res){
  res.error('Server error.');
};

// JSON Response
// {
//   "status": "error",
//   "message": "Server error."
// }
```

### `jsend(err, data)`

* __err__: An error object or `null`.
* __data__: _Optional_ response data object.

```javascript
function (req, res){
  books.find()
    .exec(res.jsend);
};

// same as

function (req, res){
  books.find()
    .exec(function (err, data){
      if (err)
        return res.jsend(err);

      res.jsend(null, data);
    });
};
```