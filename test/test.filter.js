import chai from 'chai'
const expect = chai.expect

import filter from "../src/filter.js";

const users = [{ 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false }]


describe('filter', () => {
    describe('filter', () => {
        it('sallittu operaatio', () => {
            expect(filter(users,({ active }))).to.equal(['barney']);
        })
    })
})