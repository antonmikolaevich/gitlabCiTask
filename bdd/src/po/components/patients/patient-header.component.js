/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
const BaseComponent = require('../common/base.component');

class PatientHeaderComponent extends BaseComponent {
  constructor() {
    super('div[class="patients-detail-wrapper"]');
  }

  get addNewPatientBtn() {
    return this.rootEl.$('//*[text()="Add New Patient"]');
  }

  get searchPatient() {
    return this.rootEl.$('#schedule_searchbar');
  }

  get searchBtn() {
    return this.rootEl.$('//*[@id="schedule_searchbutton"]');
  }
}

module.exports = PatientHeaderComponent;
