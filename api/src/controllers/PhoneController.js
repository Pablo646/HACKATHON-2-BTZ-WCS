const BaseController = require('./BaseController');
const { PhoneModel } = require('../models');

class PhoneController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new PhoneModel();
  }

  create() {
    const phoneData = this.req.body;
    phoneData.estimationPrice = 70;
    this.model
      .create(phoneData)
      .then(() => this.sendJson({ message: 'Phone created successfully' }))
      .catch((error) => {
        console.error('Error creating phone:', error);
        this.sendJson({ error: 'An error occurred while creating the phone' });
      });
  }
}

module.exports = PhoneController;
