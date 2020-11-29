import chai from 'chai'
const expect = chai.expect

import countBy from "../src/countBy.js";

let users1 = [{ 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false } ]

let users2 = [{ 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'mat', 'active': false },
    { 'user': 'joe', 'active': true }]

describe('countBy', () => {
    describe('countBy', () => {
        it('sallitut syötteet', () => {
            expect(countBy(users1, value => value.active)).to.equal( { 'true': 2, 'false': 1 })
        })
        it('sallitut syötteet 2', () => {
            expect(countBy(users2, value => value.active)).to.equal( { 'true': 3, 'false': 2 })
        })
    })
})