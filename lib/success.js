module.exports = function (res){

  return function (data) {
    return res.json({
      status: 'success',
      data: (typeof data !== 'undefined' && data !== null) ? data : null
    })
  }
  
}
