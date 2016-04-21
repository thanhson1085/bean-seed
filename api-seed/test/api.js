var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('should return 200 OK', function(done) {
        request(app)
        .get('/')
        .expect(200, done);
    });
});
