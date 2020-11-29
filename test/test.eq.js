import chai from 'chai'
const expect = chai.expect

import eq from "../src/eq.js";

describe('eq.js', () => {
    describe('eq()', () => {
        it('1 to be 1', () => {
            expect(eq(1, 1)).to.equal(true);
        })
        it('1 not to be "1"', () => {
          expect(eq(1, "1")).to.equal(false);
        })
        it('a to be a', () => {
          console.log(eq("a", "a"));
          expect(eq("a", "a")).to.equal(true);
        })
        it('-0 to be +0', () => {
          expect(eq(-0, 0)).to.equal(true);
        })
        it('null to be undefined', () => {
          expect(eq(null, undefined)).to.equal(true);
        })
        it('null to not equal to object', () => {
          expect(eq(null, Object())).to.equal(false);
        })
        it('NaN to equal Nan', () => {
          expect(eq(NaN, NaN)).to.equal(true);
        })
        it('String to equal same String', () => {
          expect(eq("foo", "foo")).to.equal(true);
        })
        it('String to not equal different String', () => {
          expect(eq("foo", "bar")).to.equal(false);
        })

    })
})