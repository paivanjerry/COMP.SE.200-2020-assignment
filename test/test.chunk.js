import chai from 'chai'
const expect = chai.expect

import chunk from "../src/chunk.js";

describe('chunk', () => {
    describe('chunk', () => {
        it('sallittu taulukko / 2', () => {
            expect(chunk(['a', 'b', 'c', 'd'], 2)).to.equal([['a', 'b'], ['c', 'd']])
        })
        it('sallittu taulukko / 3', () => {
            expect(chunk(['a', 'b', 'c', 'd'], 3)).to.equal([['a', 'b', 'c'], ['d']])
        })
    })
})