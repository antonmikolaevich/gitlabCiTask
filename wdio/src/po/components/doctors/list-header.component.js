/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
const BaseComponent = require('../common/base.component');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  get addNewDoctorBtn() {
    return this.rootEl.$('button.e-control');
  }
}

module.exports = ListHeaderComponent;
