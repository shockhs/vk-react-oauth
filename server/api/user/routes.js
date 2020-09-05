import { getCurrentUserData, getGroupPosts } from './controller'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => getCurrentUserData(req, res))
router.get('/groups', (req, res) => getGroupPosts(req, res))

export default router
