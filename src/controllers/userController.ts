import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user'
import * as UserService from '../services/userService'
import { errorHandlerMiddleware } from '../middlewares/errorHandlerMiddleware'

export const createUser = async (req: Request, res: Response) => {
  try {
    const requestBody = req.body as User
    const newUser = await UserService.createUser(requestBody)

    return res.sendStatus(201).json(newUser)
  } catch (error) {
    return errorHandlerMiddleware(error as Error, req, res)
  }
}

export const getAdminsUsers = async (req: Request, res: Response) => {
  try {
    const allAdmins = await UserService.getAllAdmins()
    return res.json(allAdmins)
  } catch (error) {
    return errorHandlerMiddleware(error as Error, req, res)
  }
}

export const getCustomersUsers = async (req: Request, res: Response) => {
  try {
    const allCustomers = await UserService.getAllCustomers()
    return res.json(allCustomers)
  } catch (error) {
    return errorHandlerMiddleware(error as Error, req, res)
  }
}

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.id
    const userByUsername = await UserService.getUserByUsername(username)

    return res.json(userByUsername)
  } catch (error) {
    return errorHandlerMiddleware(error as Error, req, res)
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const userById = await UserService.getUserById(id)

    return res.json(userById)
  } catch (error) {
    return errorHandlerMiddleware(error as Error, req, res)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const username = req.params.id
    const userData = req.body as User
    const userUpdated = await UserService.updateUser(username, userData)

    return res.json(userUpdated)
  } catch (error) {
    return errorHandlerMiddleware(error as Error, req, res)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const username = req.params.id
    const deleteUser = await UserService.deleteUser(username)

    return res.json(deleteUser)
  } catch (error) {

    return errorHandlerMiddleware(error as Error, req, res)
  }
}
