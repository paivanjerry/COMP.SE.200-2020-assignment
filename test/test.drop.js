import chai from 'chai'
const expect = chai.expect

import drop from "../src/drop.js";

describe('drop', () => {
    describe('drop', () => {
        it('sallitut syötteet', () => {
            expect(drop([1, 2, 3],2)).to.eql([3])
        })
        it('sallitut syötteet, ei annettu dropattavien määrää', () => {
            expect(drop([1, 2, 3])).to.eql( [2, 3])
        })
        it('ei parametreja', () => {
            expect(drop()).to.eql()
        })
        it('enemmän dropattavia kuin numeroita taulukossa', () => {
            expect(drop([1, 2, 3],4)).to.eql( [])
        })
        it('parametri - merkkinen', () => {
            expect(drop([1, 2, 3],-1)).to.eql( [1, 2, 3])
        })
    })
})