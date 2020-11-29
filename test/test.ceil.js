import chai from 'chai'
const expect = chai.expect

import ceil from "../src/ceil.js";

describe('ceil', () => {
    describe('ceil', () => {
        it('sallittu merkkijono', () => {
            expect(ceil(4.006)).to.eql(5)
        })
        it('0 arvo', () => {
            expect(ceil(0)).to.eql(0)
        })
        it('MIN_VALUE', () => {
            expect(ceil(Number.MIN_VALUE)).to.equal(1)
        })
        it('MAX_VALUE', () => {
            expect(ceil(Number.MAX_VALUE)).to.equal(1.7976931348623157e+308)
        })
        it('parametrinä taulukko', () => {
            expect(ceil([1, 2])).to.eql(NaN)
        })
    })
})