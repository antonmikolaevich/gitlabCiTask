/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable max-len */
const {Then} = require('@wdio/cucumber-framework');
const compareText = require('./utils/compare-text');
const patientAdded = require('./utils/patient-added');
const {page} = require('../po');

Then('Page title should {string} {string}', async function(shouldBeParameter, titleText) {
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle, titleText, shouldBeParameter);
});

Then(/^modal window should( not)? be displayed$/, async (notArg) => {
  let assert = expect(page('doctors').addDoctorModal.rootEl);
  if (notArg) {
    assert = assert.not;
  }
  return assert.toBeDisplayed();
});

Then(/^Email error message should( not)? be displayed$/, async (notArg) => {
  let assert = expect(page('doctors').addDoctorModal.emailError);
  if (notArg) {
    assert = assert.not;
  }
  return assert.toBeDisplayed();
});

Then(/^A patient is "(.+)"$/, async function(shouldBePresent) {
  const newLine = await page('patients').patientLine(7).rootEl;
  return patientAdded(newLine, shouldBePresent);
});

