import { Router } from 'express'
import * as UserController from '../controllers/userController'

const router = Router()

router.post('/create', UserController.createUser)
router.get('/all', UserController.getAllUsers)
router.get('/:id', UserController.getUserByUsername)
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)

export default router
