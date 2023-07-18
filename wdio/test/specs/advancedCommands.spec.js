/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
describe('Task 3 test suite', () => {
  it('Execute: change color of the button text', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    const button = await $('//*[text()="Add New Doctor"]');
    await browser.execute(function(button) {
      button.style.color='#ad2019';
    }, button);
  });
  it('waitUntil:explore guru99', async () => {
    await browser.url('https://www.guru99.com/');
    await $('//button[@aria-label="View Search Form"]').click();
    await $('input[type="Search"]').setValue('sql');
    await $('input[value="Search"]').click();
    await browser.waitUntil(
        async () => await $('h1[class="entry-title"]').getText() === 'Search Results',
        {timeout: 10000, interval: 500, timeoutMsg: 'not loaded'},
    );
    await expect(browser).toHaveUrl('https://www.guru99.com/search_gcse?q=sql');
  });
  it('Actions: double-click an appointment', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
    await $('div[data-id="Appointment_1002"]').doubleClick();
    const addApntmnt = await $('//div[text()="Edit Appointment"]');
    await expect(addApntmnt).toBeDisplayed();
  });
  it('Clear cookies', async () => {
    await browser.url('https://dpm.by/auth/');
    await $('//div[@class="window__block"]/input[@name="USER_LOGIN"]').setValue('3388100');
    await browser.scroll(0, 200);
    await $('//div[@class="window__block"]/input[@name="USER_PASSWORD"]').setValue('haVv5pen');
    await $('//*[@name="AUTH_ACTION"]').click();
    const accInfo = await $('//*[@class="persmainGrid"]');
    await expect(accInfo).toBeDisplayed();
    await browser.deleteCookies();
    await browser.refresh();
    await expect(accInfo).not.toExist();
  });
});
