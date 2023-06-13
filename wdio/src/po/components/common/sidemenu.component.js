/* eslint-disable linebreak-style */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  get name() {
    return this.rootEl.$('p.name');
  }

  /**
   * @param name {'dashboard' | 'schedule' | 'doctors' | 'patients'}
   */
  item(name) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      calendar: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
      patients: '[routerlink="/patients"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;
