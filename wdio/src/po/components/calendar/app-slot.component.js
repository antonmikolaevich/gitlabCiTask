/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const BaseComponent = require('../common/base.component');

class AppointmentSlot extends BaseComponent {
  constructor() {
    super('//div[@data-id="Appointment_1002"]');
  }
}

module.exports = AppointmentSlot;
