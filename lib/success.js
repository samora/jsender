module.exports = function (res){

  return function (data) {
    return res.json({
      status: 'success',
      data: data || null
    })
  }
  
}