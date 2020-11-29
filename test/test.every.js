import chai from 'chai'
const expect = chai.expect

import every from "../src/every.js";
const overTen = function(param) {
  return Number.isInteger(param) && param > 10;
};
const truthy = function(param) {
  return param ? true : false;
};
describe('every.js', () => {
    describe('every()', () => {
        it('different data types not to be boolean', () => {
          expect(every([true, true, null, 'yes'], Boolean)).to.equal(false);
        })
        it('custom truthy function', () => {
          
          expect(every([true, true, 1, 'yes'], truthy)).to.equal(true);
        })
        it('custom over 10 int function with too small numbers', () => {
          
          expect(every([4, 10, 1, 16], overTen)).to.equal(false);
        })
        it('custom over 10 int function with correct numbers', () => {
          
          expect(every([15, 11, 100000, 11], overTen)).to.equal(true);
        })
        it('custom over 10 int function with incorrect data type', () => {
          
          expect(every(["15", 11, undefined, {a: 11}], overTen)).to.equal(false);
        })

    })
})