const express = require('express');
const PhoneController = require('../controllers/PhoneController');

const router = express.Router();
const phoneController = new PhoneController();

router.get('', (req, res) => new PhoneController(req, res).getAll());
router.get('/:id', (req, res) =>
  new PhoneController(req, res).getByID(req, res)
);
router.post('', (req, res) => new PhoneController(req, res).create());

module.exports = router;
