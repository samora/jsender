module.exports = function (res) {

  return function (err, data){
    if (err) return res.error(err, data)

    return res.success()
  }
  
}