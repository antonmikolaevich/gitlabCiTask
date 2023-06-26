/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
function patientAdded(newPatient, presenceOption) {
  switch ((presenceOption)) {
    case 'added':
      return expect(newPatient).toBeDisplayed();
    case 'not added':
      return expect(newPatient).not.toBeDisplayed();
    default:
      throw Error(`${presenceOption} is not a valid option!`);
  }
};

module.exports = patientAdded;
