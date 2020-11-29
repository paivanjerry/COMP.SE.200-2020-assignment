import chai from 'chai'
const expect = chai.expect

import isTypedArray from "../src/isTypedArray.js";
import nodeTypes from "../src/.internal/nodeTypes.js";

let taulukko = new Uint8Array()
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray


describe('isTypedArray', () => {
    describe('isTypedArray', () => {
        it('sallittu tyypitetty taulukko', () => {
            expect(isTypedArray(taulukko)).to.equal(true)
        })
        it('väärin tyypitetty', () => {
            expect(isTypedArray([12321321])).to.equal(false)
        })
        it('syöte numeroita/tekstiä', () => {
            expect(isTypedArray('taulukko')).to.equal(false)
        })
        it('ei syötettä', () => {
            expect(isTypedArray()).to.equal(false)
        })
        it('node tyyppi', () => {
            expect(isTypedArray(nodeIsTypedArray)).to.equal(false)
        })
    })
})