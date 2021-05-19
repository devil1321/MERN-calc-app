const router = require('express').Router()
const UserController = require('../controllers/user.controller')
const {ensureAuthenticated}  = require('../config/auth')

router.post('/register',UserController.register_user)
router.post('/login',UserController.login_user)
router.get('/logout',UserController.logout_user)
router.get('/dashboard',ensureAuthenticated, UserController.get_user_dashboard)
router.get('/admin',ensureAuthenticated, UserController.get_admin_dashboard)

router.get('/',ensureAuthenticated, UserController.get_all_users)
router.get('/user/:id',ensureAuthenticated, UserController.get_user)
router.delete('/delete/:id',ensureAuthenticated,UserController.delete_user)
router.post('/update/:id', ensureAuthenticated, UserController.update_user)

module.exports = router 