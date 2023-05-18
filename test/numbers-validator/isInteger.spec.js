import NumbersValidator from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isInteger tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return true if integer', () => {
    const validationResults = validator.isInteger(444);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false if not integer', () => {
    const validationResults = validator.isInteger(444.77);
    expect(validationResults).to.be.equal(false);
  });
  it('should throw an error if not a number', () => {
    expect(() => {
      validator.isInteger('"abc"');
    }).to.throw('["abc"] is not a number');
  });
});
