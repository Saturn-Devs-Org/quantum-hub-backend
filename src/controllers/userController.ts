import { Request, Response } from 'express'
import { User } from '../models/user'
import * as UserService from '../services/userService'

export const createUser = async (req: Request, res: Response) => {
  try {
    const requestBody = req.body as User
    const newUser = await UserService.createUser(requestBody)

    return res.sendStatus(201).json(newUser)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An error occurred while creating the user.' })
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserService.getAllUsers()
    return res.json(allUsers)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An error occurred while get all users.' })
  }
}

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.id
    const userByUsername = await UserService.getUserByUsername(username)

    return res.json(userByUsername)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: 'An error occurred while get user by username.' })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const username = req.params.id
    const userData = req.body as User
    const userUpdate = await UserService.updateUser(username, userData)

    return res.json(userUpdate)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An error occurred while updating the user.' })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const username = req.params.id
    const deleteUser = await UserService.deleteUser(username)

    return res.json(deleteUser)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'An error occurred while deleting the user.' })
  }
}
