import chai from 'chai'
const expect = chai.expect

import reduce from "../src/reduce.js";

describe('reduce', () => {
    describe('reduce', () => {
        it('sallittu operaatio', () => {
            expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3)
        })
    })
})