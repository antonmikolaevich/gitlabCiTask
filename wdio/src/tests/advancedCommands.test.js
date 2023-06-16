/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const {page} = require('../po');

describe('Task 3 test suite', () => {
  beforeEach(async () => {
    await page('dashboard').open();
  });

  it('Execute: change color of the button text', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    const button = await page('doctors').doctorListHeader.addNewDoctorBtn;
    await browser.execute(function(button) {
      button.style.color='#ad2019';
    }, button);
  });
  it('Actions: double-click an appointment', async () => {
    await page('dashboard').sideMenu.item('calendar').click();
    await page('calendar').appointmentSlot.rootEl.doubleClick();
    await expect(page('calendar').editAppointmentModal.rootEl).toBeDisplayed();
  });
});
