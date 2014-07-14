module.exports = function (res) {
  
  return function (message, data, code){
    if (message instanceof Error) {
      message = process.env.NODE_ENV === 'production' 
        ? message.message : message.message + '\n' + message.stack
      console.log(message)
    } else if (typeof message === 'string') {
      message = message;
    } else {
      throw new Error('A valid error object or string is required.');
    }


    var body = {
      status: 'error',
      message: message
    };

    if (data && typeof data === 'object')
      body.data = data;

    if (code && typeof code === 'string' || typeof code === 'number')
      body.code = code;

    return res.json(body);
  }
  
}