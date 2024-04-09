import { Router } from 'express'
import * as UserController from '../controllers/userController'

const router = Router()

router.post('/create', UserController.createUser)

export default router
