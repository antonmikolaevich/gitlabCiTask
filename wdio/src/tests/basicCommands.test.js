/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const {page} = require('../po');

browser.addCommand('customClick', async (element) => {
  await element.waitForExist();
  await element.waitForDisplayed();
  await element.click();
});

describe('Task 2 test suite', () => {
  beforeEach(async () => {
    await page('dashboard').open();
  });
  it('Show and hide pop-ups', async () => {
    await page('dashboard').sideMenu.item('patients').click();
    await expect(page('patients').editPatientModal.rootEl).not.toExist();
    await expect(page('patients').editPatientModal.deletePatient).toExist();
    await expect(page('patients').editPatientModal.deletePatient).not.toBeDisplayed();
    await browser.customClick(page('patients').patientLine(1).name);
    await expect(page('patients').editPatientModal.rootEl).toBeDisplayed();
    await browser.customClick(page('patients').editPatientModal.deleteButton);
    await expect(page('patients').editPatientModal.deletePatient).toBeDisplayed();
  });
  it('Display email error when invalid email is entered', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await browser.customClick(page('doctors').doctorListHeader.addNewDoctorBtn);
    await page('doctors').addDoctorModal.input('email').setValue('test@');
    await expect(page('doctors').addDoctorModal.emailError).toBeDisplayed();
    await page('doctors').addDoctorModal.input('email').addValue('gmail.com');
    await expect(page('doctors').addDoctorModal.emailError).not.toBeDisplayed();
  });
  it('Display quick appointment info', async () => {
    await page('dashboard').sideMenu.item('calendar').click();
    await expect(page('calendar').quickInfo.rootEl).not.toExist();
    await browser.customClick(page('calendar').appointmentSlot.rootEl);
    await page('calendar').quickInfo.rootEl.waitForExist();
    await expect(page('calendar').quickInfo.rootEl).toBeDisplayed();
  });
  it('Count number of doctors', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await expect(page('doctors').specialistCard.rootEl);
    const doctorsList = await $$('div[class="specialist-display"] div[class="e-cards specialist-item"]');
    const numberOfDoctors = doctorsList.length;
    await expect(numberOfDoctors).toEqual(7);
  });
});
