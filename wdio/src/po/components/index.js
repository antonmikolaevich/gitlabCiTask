/* eslint-disable linebreak-style */
const Header = require('./common/header.component');
const SideMenu = require('./common/sidemenu.component');

const AddDoctorModal = require('./doctors/add-doctor.component');
const DoctorListHeader = require('./doctors/list-header.component');
const SpecialistCard = require('./doctors/specialist-card.component');
const AddPatientModal = require('./patients/add-patient.component');
const PatientListHeader = require('./patients/patient-header.component');
const PatientLine = require('./patients/patient-card.component');
const EditPatientModal = require('./patients/edit-patient.component');
const QuickInfo = require('./calendar/quick-info.component');
const AppointmentSlot = require('./calendar/app-slot.component');
const EditAppointmentModal = require('./calendar/edit-app.component');

module.exports = {
  Header,
  SideMenu,
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
  AddPatientModal,
  PatientListHeader,
  PatientLine,
  EditPatientModal,
  QuickInfo,
  AppointmentSlot,
  EditAppointmentModal,
};
