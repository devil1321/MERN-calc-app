const router = require('express').Router()
const InvoiceController = require('../controllers/invoice.controller')
const {ensureAuthenticated}  = require('../config/auth')

router.get('/',ensureAuthenticated, InvoiceController.get_all_invoices)
router.get('/faktura/:id',ensureAuthenticated, InvoiceController.get_invoice)

router.post('/faktura',ensureAuthenticated, InvoiceController.post_invoice)
router.delete('/delete/:id',ensureAuthenticated,InvoiceController.delete_invoice)
router.post('/update/:id', ensureAuthenticated, InvoiceController.update_invoice)

module.exports = router