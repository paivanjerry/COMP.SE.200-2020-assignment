import chai from 'chai'
const expect = chai.expect

import capitalize from "../src/capitalize.js";

let pitka = 'FoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobar' +
    'FoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobar' +
    'FoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobar' +
    'FoobarFoobarFoobarFoobarFoobarFoobarFoobarFoobar'

let pitkaCapitalize = 'Foobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobar' +
    'foobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobar' +
    'foobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobar' +
    'foobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobarfoobar'


describe('capitalize', () => {
    describe('capitalize', () => {
        it('sallittu merkkijono', () => {
            expect(capitalize('ABCDEF')).to.equal('Abcdef')
        })
        it('pitkä merkkijono > 256 merkkiä', () => {
            expect(capitalize(pitka)).to.equal(pitkaCapitalize)
        })
        it('pelkkiä numeroita', () => {
            expect(capitalize('12345')).to.equal('12345')
        })
        it('ei parametreja / tyhjä', () => {
            expect(capitalize('')).to.equal('')
        })
    })
})