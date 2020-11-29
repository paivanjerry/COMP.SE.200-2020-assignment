import chai from 'chai'
const expect = chai.expect

import divide from "../src/divide.js";

describe('clamp', () => {
    describe('clamp', () => {
        it('sallittu operaatio, tulos desimaalio', () => {
            expect(divide(6, 4)).to.equal(1.5)
        })
        it('sallittu operaatio, tulos kokonaisluku', () => {
            expect(divide(6, 2)).to.equal(3)
        })
        it('jako nollalla', () => {
            expect(divide(6, 0)).to.eql(NaN)
        })
        it('jakaja puuttuu', () => {
            expect(divide(6)).to.eql(6)
        })
        it('tekstiä', () => {
            expect(divide(a,6)).to.eql(NaN)
        })
    })
})