import chai from 'chai'
const expect = chai.expect

import at from '../src/at.js';

describe('at.js', () => {
	describe('at()', () => {
		it('empty input', () => {
      const result = at();
      expect(result).to.be.an("array");
      expect(result).to.be.empty;
    })
    it('empty object', () => {
      const result = at(null, ["foo.bar"]);
      expect(result).to.be.an("array");
      expect(result).to.include(undefined);
      expect(result).to.have.lengthOf(1);
    })
    it('invalid string query', () => {
      const result = at({foo: ["one", "two"]}, '{foo: ["one", "two"]}');
      expect(result).to.be.an("array");
      expect(result).to.include(undefined);
      expect(result).to.have.lengthOf(1);
    })
    it('simple object with numbers', () => {
      const result = at({foo: 1, bar: 5}, ['foo']);
      expect(result).to.be.an("array");
      expect(result).to.include(1);
      expect(result).to.have.lengthOf(1);
    })
    it('simple array with strings', () => {
      const result = at(["foo", "bar", "foobar"], ['[1]']);
      expect(result).to.be.an("array");
      expect(result).to.include("bar");
      expect(result).to.have.lengthOf(1);
    })
    it('query with too big index from array', () => {
      const result = at(["foo", "bar", "foobar"], ['[5]']);
      expect(result).to.be.an("array");
      expect(result).to.include(undefined);
      expect(result).to.have.lengthOf(1);
    })
    it('object with arrays ', () => {
      const data = {a: [1, 2, 4, 5, 6], b: [5, 2, 1], c: [1], d:[]};
      const result = at(data, ['a[2]', 'b[0]', 'c[6]']);
      expect(result).to.be.an("array");
      expect(result[0]).to.be.equal(4);
      expect(result[1]).to.be.equal(5);
      expect(result[2]).to.be.equal(undefined);
      expect(result).to.have.lengthOf(3);
		})
	})
})