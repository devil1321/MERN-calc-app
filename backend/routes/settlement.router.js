const router = require('express').Router()
const SettlementController = require('../controllers/settlement.controller')
const {ensureAuthenticated}  = require('../config/auth')

router.get('/',ensureAuthenticated, SettlementController.get_all_settlements)
router.get('/rozliczenie/:id',ensureAuthenticated, SettlementController.get_settlement)

router.get('/rozliczenie',ensureAuthenticated, SettlementController.post_settlement)
router.delete('/delete/:id',ensureAuthenticated,SettlementController.delete_settlement)
router.post('/update/:id', ensureAuthenticated, SettlementController.update_settlement)

module.exports = router