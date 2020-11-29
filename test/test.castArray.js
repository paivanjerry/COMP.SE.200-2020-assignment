import chai from 'chai'
const expect = chai.expect

import castArray from "../src/castArray.js";

describe('castArray', () => {
    describe('castArray', () => {
        it('sallittu merkkijono', () => {
            expect(castArray(1)).to.eql([1])
        })
        it('ei parametria', () => {
            expect(castArray()).to.eql([])
        })
        it('ei parametria', () => {
            expect(castArray([1,2])).to.eql([1,2])
        })
    })
})