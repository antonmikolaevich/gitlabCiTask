/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const {page} = require('../po');

describe('Task 1 test suite', () => {
  beforeEach(async () => {
    await page('dashboard').open();
  });

  it('should open page', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });
  it('Show an error for an empty doctor email', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.input('name').setValue('John Doe');
    await page('doctors').addDoctorModal.saveBtn.click();
    await expect(page('doctors').addDoctorModal.emailError).toHaveText('Enter valid email');
  });
  it('Search for a patient', async () => {
    await page('dashboard').sideMenu.item('patients').click();
    await page('patients').patientListHeader.searchPatient.setValue('Laura');
    await page('patients').patientListHeader.searchBtn.click();
    await expect(page('patients').patientLine(2).rootEl).not.toExist();
    await expect(page('patients').patientLine(3).rootEl).not.toExist();
    await expect(page('patients').patientLine(4).rootEl).not.toExist();
    await expect(page('patients').patientLine(5).rootEl).not.toExist();
    await expect(page('patients').patientLine(6).rootEl).not.toExist();
    await expect(page('patients').patientLine(7).rootEl).not.toExist();
    await expect(page('patients').patientLine(8).rootEl).not.toExist();
  });
  it('Add a new patient', async () => {
    await page('dashboard').sideMenu.item('patients').click();
    await page('patients').patientListHeader.addNewPatientBtn.click();
    await page('patients').addPatientModal.input('name').setValue('Keira Knightley');
    await page('patients').addPatientModal.input('gender').click();
    await page('patients').addPatientModal.input('dob').setValue('3/26/1985');
    await page('patients').addPatientModal.input('phone').setValue('1234567890');
    await page('patients').addPatientModal.input('email').setValue('test@epam.com');
    await page('patients').addPatientModal.input('symptoms').setValue('Lorem ipsum');
    await page('patients').addPatientModal.saveBtn.click();
    await expect(page('patients').patientLine(7).name).toHaveText('Keira Knightley');
    await expect(page('patients').patientLine(7).gender).toHaveText('Female');
    await expect(page('patients').patientLine(7).bloodGroup).toHaveText('AB+');
    await expect(page('patients').patientLine(7).symptoms).toHaveText('Lorem ipsum');
    await expect(page('patients').patientLine(7).mobile).toHaveText('(123) 456-7890');
    await expect(page('patients').patientLine(7).email).toHaveText('test@epam.com');
  });
});
