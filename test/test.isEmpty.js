import chai from 'chai'
const expect = chai.expect

import isEmpty from "../src/isEmpty.js";

describe('isEmpty', () => {
    describe('isEmpty', () => {
        it('isEmpty(null)', () => {
            expect(isEmpty(null)).to.equal(true)
        })
        it('isEmpty(true)', () => {
            expect(isEmpty(true)).to.equal(true)
        })
        it('isEmpty([1, 2, 3])', () => {
            expect(isEmpty([1, 2, 3])).to.equal(false)
        })
        it('isEmpty(\'abc\')', () => {
            expect(isEmpty('abc')).to.equal(false)
        })
        it('isEmpty({ \'a\': 1 })', () => {
            expect(isEmpty({ 'a': 1 })).to.equal(false)
        })
    })
})