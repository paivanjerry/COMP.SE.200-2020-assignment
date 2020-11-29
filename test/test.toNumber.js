import chai from 'chai'
const expect = chai.expect

import toNumber from "../src/toNumber.js";

let symbol = Symbol('foo')
let object = Object('foo')

describe('toNumber', () => {
    describe('toNumber', () => {
        it('sallittu merkkijono / float', () => {
            expect(toNumber(3.2)).to.equal(3.2)
        })
        it('MIN_VALUE', () => {
            expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324)
        })
        it('MAX_VALUE', () => {
            expect(toNumber(Number.MAX_VALUE)).to.equal(1.7976931348623157e+308)
        })
        it('0 arvo', () => {
            expect(toNumber(0)).to.equal(0)
        })
        it('MAX_VALUE +1', () => {
            expect(toNumber(Number.MAX_VALUE+1)).not.equal(1.7976931348623157e+308)
        })
        it('tekstiä', () => {
            expect(toNumber('moi')).to.eql(NaN)
        })
        it('ei parametrejä', () => {
            expect(toNumber()).to.eql(NaN)
        })
        it('syöte on symbol tyyppiä', () => {
            expect(toNumber(symbol)).to.eql(NaN)
        })
        it('syöte on object tyyppiä', () => {
            expect(toNumber(object)).to.eql(NaN)
        })
    })
})