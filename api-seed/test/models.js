var User = require('../models/user');

describe('User Model', function() {
    it('should create a new user', function(done) {
        var user = new User({
            email: 'test@gmail.com',
            password: 'password'
        });
        user.save(function(err) {
            if (err) return done(err);
            done();
        });
    });
    it('should delete a user', function(done) {
        User.remove({
            email: 'test@gmail.com'
        }, function(err) {
            if (err) return done(err);
            done();
        });
    });
});
