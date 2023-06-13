/* eslint-disable linebreak-style */
/* eslint-disable valid-jsdoc */
/* eslint-disable linebreak-style */
const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');
const CalendarPage = require('./calendar.page');

/**
 * @param name {'dashboard' | 'doctors' | 'patients' | 'calendar'}
 * @return {DashboardPage|DoctorsPage|PatientsPage|CalendarPage}
 */
function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    calendar: new CalendarPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientsPage,
  CalendarPage,
  page,
};
