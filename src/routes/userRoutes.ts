import { Router } from 'express'
import * as UserController from '../controllers/userController'
import {auth, role} from '../middlewares/authMiddleware'

const router = Router()

router.post('/create', auth, role, UserController.createUser)
router.get('/admins', auth, role, UserController.getAdminsUsers)
router.get('/customers', auth, role, UserController.getCustomersUsers)
router.get('/username/:id', auth, UserController.getUserByUsername)
router.get('/:id', auth, UserController.getUserById)
router.put('/update/:id', auth, role, UserController.updateUser)
router.delete('/delete/:id', auth, role, UserController.deleteUser)

export default router
