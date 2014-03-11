

module.exports = function (){

  return function (req, res, next){

    res.success = function (data){
      res.json({
        status: 'success',
        data: data || null
      });
    };

    res.fail = function (data){
      if (!data || typeof data !== 'object') 
        throw new Error('An object/array with failure data is required.');

      res.json({
        status: 'fail',
        data: data
      });
    };

    res.error = function (message, data, code){
      if (typeof message !== 'string')
        message = message.message;

      if (!message)
        throw new Error('A valid error object or string is required.');

      var body = {
        status: 'error',
        message: message
      };

      if (data && typeof data === 'object')
        body.data = data;

      if (code && typeof code === 'string' || typeof code === 'number')
        body.code = code;

      res.json(body);
    };

    res.jsend = function (err, data){
      if (err)
        return res.error(err, data);

      res.success(data);
    };

    next();
  };
};