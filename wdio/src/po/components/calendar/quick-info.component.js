/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const BaseComponent = require('../common/base.component');

class QuickInfo extends BaseComponent {
  constructor() {
    super('//div[@class="e-event-popup"]');
  }
}

module.exports = QuickInfo;
