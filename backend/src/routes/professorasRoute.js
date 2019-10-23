const express = require('express');
const router = express.Router();
const professorasController = require('../controllers/professorasController');

router.get('/', professorasController.get);
router.get('/nomes', professorasController.getNomes);
router.get('/linguagens', professorasController.getLinguagens)
router.get('/signos', professorasController.getSignos)

module.exports = router; 