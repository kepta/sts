var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
var expect = chai.expect

function foo(x) {
  return x*x;
}

describe('Test function foo', function() {

  it('should be function', function(done) {
    foo.should.be.a('function');
    done();
  });

  it('should expect a foo a func', function(done) {
    expect(foo).to.be.a('string');
    done();
  });

  it('should return a square', function(done) {
    assert.equal(foo(5), 24);
    done();
  });

  it('should return a type of number', function(done) {
    assert.typeOf(foo(5), 'number');
    done();
  })
})
