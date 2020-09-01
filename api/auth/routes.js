const router = require('express').Router()
const authController = require('./controller')

router.post('/login', authController.login)
router.post('/logout', authController.logout)

module.exports = router
