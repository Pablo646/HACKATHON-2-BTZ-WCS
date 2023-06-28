const BaseModel = require('./BaseModel');

class PhoneModel extends BaseModel {
  constructor() {
    super('phones');
  }
}

module.exports = PhoneModel;
