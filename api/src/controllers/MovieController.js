const BaseController = require('./BaseController');
const { MovieModel } = require('../models');

class MovieController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new MovieModel();
  }
}

module.exports = MovieController;
