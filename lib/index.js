var success = require('./success')
  , fail = require('./fail')
  , error = require('./error')
  , jsend = require('./jsend')


module.exports = function (){

  return function (req, res, next){

    res.success = success(res)

    res.fail = fail(res)

    res.error = error(res)

    res.jsend = jsend(res)

    next();
  };
};