/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
const BasePage = require('./base.page');
// eslint-disable-next-line max-len
const {QuickInfo, AppointmentSlot, EditAppointmentModal} = require('../components');

class CalendarPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/calendar');
    this.quickInfo = new QuickInfo();
    this.appointmentSlot = new AppointmentSlot();
    this.editAppointmentModal = new EditAppointmentModal();
  }
}

module.exports = CalendarPage;
