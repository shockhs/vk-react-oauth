const router = require('express').Router()
const authController = require('./controller')

router.get('/', authController.getCurrentUserData)
router.get('/groups', authController.getGroupPosts)

module.exports = router
