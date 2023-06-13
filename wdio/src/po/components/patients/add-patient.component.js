/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const BaseComponent = require('../common/base.component');

class AddPatientComponent extends BaseComponent {
  constructor() {
    super('//*[@cssclass="new-patient-dialog"]');
  }

  get saveBtn() {
    return this.rootEl.$('//button[text()="Save"]');
  }

  /**
   * @param name {'name' | 'gender' | 'dob' | 'phone' | 'email' | 'symptoms'}
   */
  input(name) {
    const selectors = {
      name: '//*[@name="Name"]',
      gender: '//*[@for="doctorCheckFemale"]',
      dob: '#DOB_input',
      phone: '#PatientMobile',
      email: 'input[name="Email"]',
      symptoms: 'input[name="Symptoms"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddPatientComponent;
