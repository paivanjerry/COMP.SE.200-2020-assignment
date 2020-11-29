import chai from 'chai'
const expect = chai.expect

import compact from "../src/compact.js";

describe('compact', () => {
    describe('compact', () => {
        it('vain sallittuja numeroita', () => {
            expect(compact([1,2,3])).to.eql([1,2,3])
        })
        it('poistettava null', () => {
            expect(compact([null,1,2,3])).to.eql([1,2,3])
        })
        it('poistettava false', () => {
            expect(compact([1,false,2,3])).to.eql([1,2,3])
        })
        it('poistettava undefined', () => {
            expect(compact([1,undefined,2,3])).to.eql([1,2,3])
        })
        it('poistettava NaN', () => {
            expect(compact([1,NaN,2,3])).to.eql([1,2,3])
        })
    })
})