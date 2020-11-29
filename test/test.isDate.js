import chai from 'chai'
const expect = chai.expect

import isDate from "../src/isDate.js";

let paiva = new Date()

describe('isDate', () => {
    describe('isDate', () => {
        it('syöte on date', () => {
            expect(isDate(paiva)).to.equal(true)
        })
        it('syöte on numeroita', () => {
            expect(isDate(24112020)).to.equal(false)
        })
        it('syöte on string', () => {
            expect(isDate('24112020')).to.equal(false)
        })
        it('syöte puuttuu', () => {
            expect(isDate()).to.equal(false)
        })

    })
})