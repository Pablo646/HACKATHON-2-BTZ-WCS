const BaseController = require('./BaseController');
const { PhoneModel } = require('../models');

class PhoneController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new PhoneModel();
  }
}

module.exports = PhoneController;
