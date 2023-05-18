import NumbersValidator from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('getEvenNumbersFromArray tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return even numbers', () => {
    // const actual = validator.getEvenNumbersFromArray(arrayOfNumbers);
    const validationResults = validator.getEvenNumbersFromArray([4, 6, 7, 9]);
    expect(validationResults).to.eql([4, 6]);
  });
  it('should return empty array when no even numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray([5, 7, 9]);
    expect(validationResults).to.eql([]);
  });
  it('should throw an error when passing a string', () => {
    expect(() => {
      validator.getEvenNumbersFromArray('"fff"');
    }).to.throw('["fff"] is not an array of "Numbers"');
  });
});
