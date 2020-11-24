import chai from 'chai'
const expect = chai.expect

import isEmpty from "../src/isEmpty.js";

let tyhjaMap = new Map()
let tyhjaSet = new Set()


describe('isEmpty', () => {
    describe('isEmpty', () => {
        it('null', () => {
            expect(isEmpty(null)).to.equal(true)
        })
        it('tyhjä map', () => {
            expect(isEmpty(tyhjaMap)).to.equal(true)
        })
        it('tyhjä set', () => {
            expect(isEmpty(tyhjaSet)).to.equal(true)
        })
        it('tyhjä taulukko', () => {
            expect(isEmpty([])).to.equal(true)
        })
        it('syöte numeroita', () => {
            expect(isEmpty(123)).to.equal(false)
        })
        it('tyhjä', () => {
            expect(isEmpty()).to.equal(true)
        })
    })
})