/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return $(this.rootSelector);
  }
}

module.exports = BaseComponent;
