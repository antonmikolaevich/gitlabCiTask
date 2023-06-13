/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
describe('Task 1 test suite', () => {
  it('Verify the dashboard page title', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    const pageTitle = await browser.getTitle();
    // eslint-disable-next-line linebreak-style
    expect(pageTitle).toEqual('Appointment Planner - Syncfusion Angular Components Showcase App');
  });
  it('Show an error for an empty doctor email', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    await $('div.doctors').click();
    await $('//button[text()="Add New Doctor"]').click();
    await $('input[name="Name"]').setValue('John Doe');
    await $('//button[text()="Save"]').click();
    const emailError = await $('label#Email-info');
    expect(await emailError.getText()).toEqual('Enter valid email');
  });
  it('Search for a patient', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    await $('div.patients').click();
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
    await expect(browser).toHaveUrl('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
    await $('#schedule_searchbar').setValue('Laura');
    await $('//*[@id="schedule_searchbutton"]').click();
    const elem1 = await $('tr[aria-rowindex="1"]');
    const elem2 = await $('tr[aria-rowindex="2"]');
    const elem3 = await $('tr[aria-rowindex="3"]');
    const elem4 = await $('tr[aria-rowindex="4"]');
    const elem5 = await $('tr[aria-rowindex="5"]');
    const elem6 = await $('tr[aria-rowindex="6"]');
    await expect(elem1).not.toExist();
    await expect(elem2).not.toExist();
    await expect(elem3).not.toExist();
    await expect(elem4).not.toExist();
    await expect(elem5).not.toExist();
    await expect(elem6).not.toExist();
  });
  it('Add a new patient', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
    await $('//*[text()="Add New Patient"]').click();
    await $('//*[@name="Name"]').setValue('Keira Knightley');
    await $('//*[@for="doctorCheckFemale"]').click();
    await $('#DOB_input').setValue('3/26/1985');
    await $('#PatientMobile').setValue('1234567890');
    await $('input[name="Email"]').setValue('test@epam.com');
    await $('input[name="Symptoms"]').setValue('Lorem ipsum dolor sit amet');
    await $('//*[text()="Save"]').click();
    const newId = await $('td[aria-label="8 column header ID"]');
    expect(newId).toBeDisplayed();
    const newName = await $('tr[aria-rowindex="7"] span[class="patient-name"]');
    expect(newName).toHaveText('Keira Knightley');
    const newGender = await $('tr[aria-rowindex="7"]>td[aria-colindex="2"]');
    expect(newGender).toHaveElementProperty('aria-label', 'Female column header Gender');
    const newBloodGroup = await $('tr[aria-rowindex="7"]>td[aria-colindex="3"]');
    expect(newBloodGroup).toHaveText('AB+');
    const newSymptoms = await $('tr[aria-rowindex="7"]>td[aria-colindex="4"]');
    expect(newSymptoms).toHaveText('Lorem ipsum');
    const newMobile = await $('tr[aria-rowindex="7"]>td[aria-colindex="5"]');
    expect(newMobile).toHaveText('(123) 456-7890');
    const newEmail = await $('tr[aria-rowindex="7"]>td[aria-colindex="6"]');
    expect(newEmail).toHaveText('test@epam.com');
  });
});
