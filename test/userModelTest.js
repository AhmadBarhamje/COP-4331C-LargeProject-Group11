var assert = require('assert');
var sinon = require('sinon');
var chai = require('chai');
var should = require('chai').should();
var User = require('../backend/models/user.model');
var Token = require('../backend/models/token.model');
var jwt = require('jsonwebtoken');
var rewire = require('rewire');
const secret = process.env.ACCESS_TOKEN_SECRET;

afterEach(() => {
  // Restore the default sandbox here
  sinon.restore();
});

function createNewUser() {
  return new User({
                  _id: 'id',
                  email: 'email', 
                  password: 'password',
                  firstName: 'fname',
                  lastName: 'lname',
                  userName: 'uname',
                  active: true,
                })
}

describe('User Model', function() {
  describe('Create Access Token', function() {
    it('Creates valid access token', async function() {
      var user = createNewUser();
      var token = await user.createAccessToken();
      should.exist(token);

      const payload = jwt.verify(token, secret);
      assert.strictEqual(payload.user.userName, user.userName)
      chai.assert(payload.user._id == user._id, 'ID does not match')
    });
  });

  // This test doesn't do anything yet
  describe('Create Refresh Token', function() {
    it('Creates valid refresh token', async function() {
      var user = createNewUser();
      var token = user.createRefreshToken();
    });
  });
});