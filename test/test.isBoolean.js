import chai from 'chai'
const expect = chai.expect

import isBoolean from "../src/isBoolean.js";

describe('isBoolean', () => {
    describe('isBoolean', () => {
        it('input boolean true', () => {
            expect(isBoolean(true)).to.equal(true)
        })
        it('input boolean false', () => {
          expect(isBoolean(false)).to.equal(true)
        })
        it('input string true', () => {
          expect(isBoolean("true")).to.equal(false)
        })
        it('input number 1', () => {
          expect(isBoolean(1)).to.equal(false)
        })
        it('input number 0', () => {
          expect(isBoolean(0)).to.equal(false)
        })
        it('input object', () => {
            expect(isBoolean({true: true})).to.equal(false)
        })
    })
})