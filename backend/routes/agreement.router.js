const router = require('express').Router()
const AgreementController = require('../controllers/agreement.controller')
const {ensureAuthenticated}  = require('../config/auth')

router.get('/',ensureAuthenticated, AgreementController.get_all_agreements)
router.get('/umowa/:id',ensureAuthenticated, AgreementController.get_agreement
)
router.post('/umowa',ensureAuthenticated, AgreementController.post_agreement)
router.delete('/delete/:id',ensureAuthenticated,AgreementController.delete_agreement)
router.post('/update/:id', ensureAuthenticated, AgreementController.update_agreement)

module.exports = router