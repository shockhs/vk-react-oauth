import { login, logout } from './controller'
import express from 'express'

const router = express.Router()

router.post('/login', (req, res) => login(req, res))
router.post('/logout', (req, res) => logout(req, res))

export default router
