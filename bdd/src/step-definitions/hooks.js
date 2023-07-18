/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const {Before} = require('@wdio/cucumber-framework');

Before({name: 'console log', tags: '@1'}, () => {
  return console.log('before hook');
});

Before({name: 'refresh page', tags: '@4 or @5'}, () => {
  return browser.refresh();
});
