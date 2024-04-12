import { Router } from 'express'
import * as UserController from '../controllers/userController'

const router = Router()

router.post('/create', UserController.createUser)
router.get('/admins', UserController.getAdminsUsers)
router.get('/customers', UserController.getCustomersUsers)
router.get('/username/:id', UserController.getUserByUsername)
router.get('/:id', UserController.getUserByUsername)
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)

export default router
