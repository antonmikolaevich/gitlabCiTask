import NumbersValidator from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isAllNumbers tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return true if all numbers', () => {
    const validationResults = validator.isAllNumbers([4, 6, 7, 9]);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false if not all numbers', () => {
    const validationResults = validator.isAllNumbers([4, '6', 7, 9]);
    expect(validationResults).to.be.equal(false);
  });
  it('should throw an error if not an array', () => {
    expect(() => {
      validator.isAllNumbers('"abc"');
    }).to.throw('["abc"] is not an array');
  });
});
