var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var api = chai.request('http://localhost:3000/api')
var should = chai.should();

describe('API testing', function() {
  it('should get hello world on /test', function(done) {
    api.get('/test')
      .end(function(err, res) {
      res.should.have.status(304);
      done();
    });
  });
  it('should get JSON from /test/json ', function(done) {
    api.get('/test/json')
      .end(function(err, res) {
      res.should.be.json;
      done();
    });
  });
})
