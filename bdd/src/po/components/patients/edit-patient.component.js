/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const BaseComponent = require('../common/base.component');

class EditPatientComponent extends BaseComponent {
  constructor() {
    super('//*[@aria-label="Dialog edit"]');
  }

  get deleteButton() {
    return this.rootEl.$('//*[@id="delete"]');
  }

  get deletePatient() {
    return $('//*[text()=" Are you sure you want to delete this patient? "]');
  }
}

module.exports = EditPatientComponent;
