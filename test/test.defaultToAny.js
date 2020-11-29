import chai from 'chai'
const expect = chai.expect

import defaultToAny from "../src/defaultToAny.js";

describe('defaultToAny', () => {
    describe('defaultToAny', () => {
        it('sallitut syötteet', () => {
            expect(defaultToAny(1, 10, 20)).to.equal( 1)
        })
        it('sallitut syötteet / undefined', () => {
            expect(defaultToAny(undefined, 10, 20)).to.equal( 10)
        })
        it('sallitut syötteet / NaN', () => {
            expect(defaultToAny(NaN, 10, 20)).to.equal( 10)
        })
        it('sallitut syötteet / undefined', () => {
            expect(defaultToAny(undefined, 10, 20)).to.equal( 10)
        })
        it('sallitut syötteet / null', () => {
            expect(defaultToAny(null, 10, 20)).to.equal( 10)
        })
        it('sallitut syötteet / undefined / null', () => {
            expect(defaultToAny(undefined, null, 20)).to.equal( 20)
        })
        it('sallitut syötteet / undefined / null / NaN', () => {
            expect(defaultToAny(undefined, null, NaN)).to.equal(NaN)
        })

    })
})