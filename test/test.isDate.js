import chai from 'chai'
const expect = chai.expect

import isEmpty from "../src/isDate.js";

let paiva = new Date()

describe('isDate', () => {
    describe('isDate', () => {
        it('syöte on date', () => {
            expect(isEmpty(paiva)).to.equal(true)
        })
        it('syöte on numeroita', () => {
            expect(isEmpty(24112020)).to.equal(false)
        })
        it('syöte on string', () => {
            expect(isEmpty('24112020')).to.equal(false)
        })
        it('syöte puuttuu', () => {
            expect(isEmpty()).to.equal(false)
        })

    })
})