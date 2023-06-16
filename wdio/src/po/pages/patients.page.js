/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
const BasePage = require('./base.page');
// eslint-disable-next-line max-len
const {AddPatientModal, PatientListHeader, PatientLine, EditPatientModal} = require('../components');

class PatientsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/patients');
    this.addPatientModal = new AddPatientModal();
    this.patientListHeader = new PatientListHeader();
    this.editPatientModal = new EditPatientModal();
  }

  patientLine(id) {
    return new PatientLine(id);
  }
}

module.exports = PatientsPage;
