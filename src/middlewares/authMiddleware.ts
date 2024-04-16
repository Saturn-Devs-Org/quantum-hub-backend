import { Request, Response, NextFunction } from 'express'
import { verifyAccessToken } from '../utils/jwt' 

declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(402).json({ message: 'Unauthorized' })
  }
  try {
    const user = await verifyAccessToken(token)
    req.user = user
    next()
  } catch (e) {
    return res.status(402).json({ message: 'Unauthorized' })
  }
}

export const role = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (user.payload.isAdmin) return next()
    return res.status(402).json({ message: 'Unauthorized' })
  } catch (e) {
    return res.status(402).json({ message: 'Unauthorized' })
  }
}

