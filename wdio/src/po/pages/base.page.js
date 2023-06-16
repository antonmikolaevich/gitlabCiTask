/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
const {Header} = require('../components');
class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }
  open() {
    return browser.url(this.url);
  }
}
module.exports = BasePage;
