import chai from 'chai'
const expect = chai.expect

import clamp from "../src/clamp.js";

describe('clamp', () => {
    describe('clamp', () => {
        it('sallittu operaatio', () => {
            expect(clamp(-10, -5, 5)).to.equal(-5)
        })
        it('sallittu operaatio', () => {
            expect(clamp(10, -5, 5)).to.equal(5)
        })
        it('ei parametreja', () => {
            expect(clamp()).to.eql(NaN)
        })
        it('MIN_VALUE', () => {
            expect(clamp(Number.MIN_VALUE, -5, 5)).to.equal(-5)
        })
        it('MAX_VALUE', () => {
            expect(clamp(Number.MAX_VALUE, -5, 5)).to.equal(5)
        })
        it('0 arvo', () => {
            expect(clamp(0, -5, 5)).not.equal(-5)
        })
    })
})