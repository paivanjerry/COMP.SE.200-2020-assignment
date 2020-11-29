import chai from 'chai'
const expect = chai.expect

import capitalize from "../src/capitalize.js";

let taulukko = new Uint8Array()


describe('capitalize', () => {
    describe('capitalize', () => {
        it('sallittu merkkijono', () => {
            expect(capitalize("ABCDEF")).to.equal('Abcdef')
        })
    })
})