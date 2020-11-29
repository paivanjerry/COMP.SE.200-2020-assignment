import chai from 'chai'
const expect = chai.expect

import filter from "../src/filter.js";

const users = [{ 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false }]


describe('filter', () => {
    describe('filter', () => {
        it('sallittu operaatio, filtteri löytyy', () => {
            expect(filter(users, ({ active }) => active)).to.eql([ { user: 'barney', active: true } ]);
        })
        it('sallittu operaatio, filtteriä ei löydy', () => {
            expect(filter(users, ({ passive }) => passive)).to.eql([[]]);
        })
        it('sallittu operaatio', () => {
            expect(filter(users, ({ passive }) => passive)).to.eql([[]]);
        })
        it('filtteri puuttuu', () => {
            expect(filter(users)).to.eql([[]]);
        })
    })
})