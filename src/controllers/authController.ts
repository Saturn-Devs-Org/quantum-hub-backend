import { User } from "@prisma/client"
import { errorHandlerMiddleware } from "../middlewares/errorHandlerMiddleware"
import { Request, Response } from 'express'
import * as authService from '../services/authService'

export const login = async (req: Request, res:Response) =>{

    try {
        const data = await authService.login(req.body)
        res.status(200).json({
          status: true,
          message: 'Account login successful',
          data,
        })
    } catch (error) {
        return errorHandlerMiddleware(error as Error, req, res)
    }
}

export const register = async (req: Request, res:Response) =>{
    try {
      const requestBody = req.body as User
      const newUser = await authService.register(requestBody)

      return res.json(newUser)
    } catch (error) {
      return errorHandlerMiddleware(error as Error, req, res)
    }
} 