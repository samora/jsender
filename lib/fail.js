module.exports = function (res) {

  return function (data){
    if (!data || typeof data !== 'object') 
      throw new Error('An object/array with failure data is required.');

    return res.json({
      status: 'fail',
      data: data
    });
  }

}