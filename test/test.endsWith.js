import chai from 'chai'
const expect = chai.expect

import endsWith from "../src/endsWith.js";

describe('endsWith', () => {
    describe('endsWith', () => {
        it('sallittu operaatio', () => {
            expect(endsWith('abc', 'c')).to.eql(true)
        })
        it('sallittu operaatio', () => {
            expect(endsWith('abc', 'b',2)).to.eql(true)
        })
        it('positio on nolla', () => {
            expect(endsWith('abc', 'b',0)).to.eql(false)
        })
        it('positio on negatiivinen', () => {
            expect(endsWith('abc', 'b',-5)).to.eql(false)
        })
        it('positio on > merkkijonon pituus', () => {
            expect(endsWith('abc', 'b',5)).to.eql(false)
        })
        it('numeroita', () => {
            expect(endsWith(123, 3)).to.eql(true)
        })
        it('tyhjä parametri', () => {
            expect(endsWith( )).not.eql(true)
        })
    })
})