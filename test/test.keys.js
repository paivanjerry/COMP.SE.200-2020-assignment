import chai from 'chai'
const expect = chai.expect

import keys from "../src/keys.js";

describe('keys.js', () => {
  describe('keys()', () => {
    it('input array', () => {
      const result = keys(["foo", "bar", "foo"]);
      expect(result).to.be.an("array");
      expect(result).to.include("0");
      expect(result).to.include("1");
      expect(result).to.include("2");
      expect(result).to.not.include("3");
    })
    it('input object', () => {
      const result = keys({ 1: 3, 4: 3 });
      expect(result).to.be.an("array");
      expect(result).to.include("1");
      expect(result).to.include("4");
      
    })
    it('input string', () => {
      const result = keys("testing");
      expect(result).to.be.an("array");
      expect(result).to.include("0");
      expect(result).to.include("1");
      expect(result).to.include("2");
      expect(result).to.include("3");
      expect(result).to.include("4");
      expect(result).to.include("5");
      expect(result).to.include("6");
      expect(result).to.not.include("7");
    })
    it('input boolean', () => {
      const result = keys(true);
      expect(result).to.be.an("array");
      expect(result).to.not.include("0");
    })
    it('input empty string', () => {
      const result = keys("");
      expect(result).to.be.an("array");
      expect(result).to.not.include("0");
    })
    it('input empty', () => {
      const result = keys("");
      expect(result).to.be.an("array");
      expect(result).to.not.include("0");
    })
  })
})