import chai from 'chai'
const expect = chai.expect

import difference from "../src/difference.js";

describe('difference', () => {
    describe('difference', () => {
        it('syötteet sallittuja taulukoita', () => {
            expect(difference([2, 1],[2, 3])).to.eql([1])
        })
        it('syöte tekstiä', () => {
            expect(difference('syöte tekstiä')).to.not.eql(['int'])
        })
        it('ei toisiaan vastaavia taulukoita', () => {
            expect(difference([1, 2],[3, 4])).to.not.eql(['int'])
        })
        it('toinen taulukko puuttuu', () => {
            expect(difference('[1, 2]')).to.not.eql(['int'])
        })
    })
})