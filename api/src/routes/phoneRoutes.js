const { Router } = require('express');
const { PhoneController } = require('../controllers');

const phoneRouter = Router();

phoneRouter.get('', (req, res) => new PhoneController(req, res).getAll());

phoneRouter.get('/:id', (req, res) => new PhoneController(req, res).getByID());

module.exports = phoneRouter;
