const { doesNotMatch } = require('assert');
var assert = require('assert');
var sinon = require('sinon');
var expect = require('chai').expect;
var Availability = require('../backend/models/availability.model');

afterEach(() => {
  // Restore the default sandbox here
  sinon.restore();
});

describe('Availability Model', function() {
  describe('Init New Schedule', function() {
    it('Should error if missing username/id', function(done) {
      var availability = new Availability();

      availability.validate(function(err) {
        expect(err.errors).to.exist;
        done();
      });
    });
  });

  describe('Add schedule', function() {
    it('Should contain schedule names after adding', function(done) {
      var availability = new Availability({userId: 'testId', userName: 'testUser', schedules: ['s1']});
      availability.addSchedule('s2');

      assert.strictEqual(availability.schedules.length, 2);
      done();
    });
  });

  describe('Remove schedule', function() {
    it('Should remove only schedule name passed in', function(done) {
      var availability = new Availability({userId: 'testId', userName: 'testUser', schedules: ['s1', 's2', 's3']});
      availability.removeSchedule('s2');

      assert.strictEqual(availability.schedules.length, 2);
      assert.strictEqual(availability.schedules.includes('s1'), true);
      assert.strictEqual(availability.schedules.includes('s3'), true);
      done();
    });
  });
});