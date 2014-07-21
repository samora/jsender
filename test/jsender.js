var success = require('../lib/success')
  , fail = require('../lib/fail')
  , error = require('../lib/error')
  , jsend = require('../lib/jsend')

describe('jsender', function () {
  describe('success', function() {
    var s
    before (function () {s = success(res)})

    it('should pass', function () {
      s({name: 'Samora'}).should.have.properties({
        status: 'success',
        data: {
          name: 'Samora'
        }
      })

      s().should.have.properties({
        status: 'success',
        data: null
      })
    })
  })

  describe('fail', function() {
    var f
    before (function () {f = fail(res)})

    it('should pass', function () {
      f.bind(null, 'fail').should.throw()

      var data = {name: 'Name is required.'}
      f(data).should.have.properties({status: 'fail', data: data})
    })
  })

  describe('error', function() {
    var e
    before (function () {e = error(res)})

    it('should pass', function () {
      e.bind(null, {random: 'stuff'}).should.throw()

      var err = new Error('An error has occured')
      e(err).should.have.property('status', 'error')

      var data = {stuff: 'The world exploded'}
      e(err, data, 419).should.have.properties({
        status: 'error',
        data: data,
        code: 419
      })
    })
  })
})


res = {
  json: function (obj) {
    return obj
  },

  status: function (code) {
    return code
  }
}