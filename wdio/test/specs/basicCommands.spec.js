/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
browser.addCommand('customClick', async (element) => {
  await element.waitForExist();
  await element.waitForDisplayed();
  await element.click();
});

describe('Task 2 test suite', () => {
  it('Show and hide pop-ups', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
    const editPatient = await $('//*[@aria-label="Dialog edit"]');
    const deletePatient = await $('//div[text()=" Are you sure you want to delete this patient? "]');
    await expect(editPatient).not.toExist();
    await expect(deletePatient).toExist();
    await expect(deletePatient).not.toBeDisplayed();
    const patient = await $('//span[text()="Laura"]');
    await browser.customClick(patient);
    // await $('//span[text()="Laura"]').click();
    await expect(editPatient).toBeDisplayed();
    const deleteButton = await $('//*[@id="delete"]');
    await browser.customClick(deleteButton);
    // await $('//*[@id="delete"]').click();
    await expect(deletePatient).toBeDisplayed();
  });
  it('Display email error when invalid email is entered', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    const addDoctor = await $('//button[text()="Add New Doctor"]');
    await browser.customClick(addDoctor);
    // await $('//button[text()="Add New Doctor"]').click();
    await $('input[name="Email"]').setValue('test@');
    const emailError = await $('label#Email-info');
    await expect(emailError).toBeDisplayed();
    await $('input[name="Email"]').addValue('gmail.com');
    await expect(emailError).not.toBeDisplayed();
  });
  it('Display quick appointment info', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
    const quickInfo = await $('//div[@class="e-event-popup"]');
    await expect(quickInfo).not.toExist();
    const appointmentBtn = await $('//div[@data-id="Appointment_1002"]');
    await browser.customClick(appointmentBtn);
    // await $('//div[@data-id="Appointment_1002"]').click();
    await quickInfo.waitForExist();
    await expect(quickInfo).toBeDisplayed();
  });
  it('Count number of doctors', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    const doctorsList = await $$('div[class="specialist-display"] div[class="e-cards specialist-item"]');
    const numberOfDoctors = doctorsList.length;
    await expect(numberOfDoctors).toEqual(7);
  });
});

