import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../utils/ApiError'

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next?: NextFunction
) => {

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: err.message })
  } else {
    console.error(err) 
    res.status(500).json({ error: 'Internal server error' })
  }
}
