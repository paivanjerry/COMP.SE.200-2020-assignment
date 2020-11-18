import chai from 'chai'
const expect = chai.expect

import add from '../src/add.js';

describe('Add', () => {
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(add(1, 1)).to.equal(2)
		})
	})
})