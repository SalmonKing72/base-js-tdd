if (typeof module !== 'undefined' && module.exports) {
  var chai = require('chai');
  var assert = chai.assert;
  var expect = chai.expect;
  var should = chai.should();
}

(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should assert an anonymous function does not throw an error', function () {
        expect(function () {}).to.not.throw();
      });

      it('should assert an object with property \'a\' does not contain property \'b\'', function () {
        expect({
          a: 1
        }).to.not.have.property('b');
      });

      it('should assert an array with values 1, 2 does contain value 3', function () {
        expect([1, 2]).to.be.an('array').that.does.not.include(3);
      });

    });
  });
})();