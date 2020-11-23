import chai from 'chai'
const expect = chai.expect

import camelCase from "../src/camelCase.js";

let liikaaSanoja =  'Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar ' +
    'Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo ' +
    'Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar ' +
    'Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar Foo Bar'

let pitka = 'foobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoo' +
    'barfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoo' +
    'barfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoo' +
    'barfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobar'

describe('camelCase', () => {
    describe('camelCase', () => {
        it('sallittu merkkijono / Foo Bar', () => {
            expect(camelCase('Foo Bar')).to.equal('fooBar')
        })
        it('pitkä merkkijono > 256 merkkiä', () => {
            expect(camelCase(pitka)).to.equal('fooBar')
        })
        it('liikaa sanoja > 256 merkkiä', () => {
            expect(camelCase(liikaaSanoja)).to.equal('fooBar')
        })
        it('syöte pelkkiä numeroita / 123 345', () => {
            expect(camelCase('123 345')).to.equal('12345')
        })
        it('osa puuttuu / Foo ', () => {
            expect(camelCase('Foo')).to.equal('foo')
        })
    })
})