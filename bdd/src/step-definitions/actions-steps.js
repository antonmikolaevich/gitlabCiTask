/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable new-cap */
const {When, Given} = require('@wdio/cucumber-framework');
const {page} = require('../po');

Given('I open {string} page', function(pageName) {
  return page(pageName).open();
});

When('I click {string} link from the side menu', function(link) {
  return page('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function() {
  return page('doctors').doctorListHeader.addNewDoctorBtn.click();
});

When('I click {string} button in modal window', function(button) {
  return page('doctors').addDoctorModal.clickButton(button);
});

When('I write {string} in {string} field', function(text, inputField) {
  return page('doctors').addDoctorModal.input(inputField.toLowerCase()).setValue(text);
});

When('I click add new patient button from list header', function() {
  return page('patients').patientListHeader.addNewPatientBtn.click();
});

When(/^I write "(.+)" in "(.+)" patient field$/, function(text, inputField) {
  return page('patients').addPatientModal.input(inputField.toLowerCase()).setValue(text);
});

When(/^I click on "(.+)" gender$/, function(genderValue) {
  return page('patients').addPatientModal.clickGender(genderValue);
});

When(/^I click "(.+)" button in patient modal window$/, function(button) {
  return page('patients').addPatientModal.clickButton(button);
});

