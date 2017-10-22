var only = require('..')
require('should')

/* eslint-env mocha */
describe('only(obj, keys)', function () {
  var obj, expected

  beforeEach(function () {
    obj = {
      name: 'tobi',
      last: 'holowaychuk',
      email: 'tobi@learnboost.com',
      _id: '12345'
    }
    expected = {
      name: 'tobi',
      last: 'holowaychuk',
      email: 'tobi@learnboost.com'
    }
  })

  describe('given an array', function () {
    it('should return only the whitelisted properties', function () {
      only(obj, ['name', 'email', 'last']).should.eql(expected)
    })
  })

  describe('given an string', function () {
    it('should return only the whitelisted properties', function () {
      only(obj, 'name email last').should.eql(expected)
    })
  })

  it('should omit undefineds', function () {
    only({}, 'foo bar baz').should.eql({})
  })
})
