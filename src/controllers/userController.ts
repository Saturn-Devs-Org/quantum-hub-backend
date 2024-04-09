import { Request, Response } from 'express'
import { User } from '../models/user'
import * as UserService from '../services/userService'

export const createUser = async (req: Request, res: Response) => {
  try {
    const requestBody = req.body as User
    const newUser = await UserService.createUser(requestBody)

    return res.json(newUser)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An error occurred while creating the user.' })
  }
}
