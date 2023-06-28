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

  get closeBtn() {
    return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
  }

  get genderFemale() {
    return this.rootEl.$('//*[@for="doctorCheckFemale"]');
  }

  get genderMale() {
    return this.rootEl.$('//*[@for="doctorCheckMale"]');
  }

  async clickButton(button) {
    if (button.toLowerCase() === 'save') {
      await this.saveBtn.click();
    } else await this.closeBtn.click();
  }

  /**
   * @param name {'name' | 'gender' | 'dob' | 'phone' | 'email' | 'symptoms'}
   */
  input(name) {
    const selectors = {
      name: '//*[@name="Name"]',
      // genderFemale: '//*[@for="doctorCheckFemale"]',
      // genderMale: '//*[@for="doctorCheckMale"]',
      dob: '#DOB_input',
      phone: '#PatientMobile',
      email: 'input[name="Email"]',
      symptoms: 'input[name="Symptoms"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }

  async clickGender(genderValue) {
    if (genderValue.toLowerCase() === 'female') {
      await this.genderFemale.click();
    } else {
      await this.genderMale.click();
    }
  }
}

module.exports = AddPatientComponent;
