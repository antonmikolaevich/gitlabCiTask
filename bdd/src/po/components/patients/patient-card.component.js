/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
const BaseComponent = require('../common/base.component');

class PatientCardComponent extends BaseComponent {
  constructor(id) {
    super(`tr[aria-rowindex="${id}"]`);
  }
  get name() {
    return this.rootEl.$('span[class="patient-name"]');
  }
  get gender() {
    return this.rootEl.$('td[aria-colindex="2"]');
  }
  get bloodGroup() {
    return this.rootEl.$('td[aria-colindex="3"]');
  }
  get symptoms() {
    return this.rootEl.$('td[aria-colindex="4"]');
  }
  get mobile() {
    return this.rootEl.$('td[aria-colindex="5"]');
  }
  get email() {
    return this.rootEl.$('td[aria-colindex="6"]');
  }
}

module.exports = PatientCardComponent;
