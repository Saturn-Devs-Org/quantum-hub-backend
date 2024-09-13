import jwt from 'jsonwebtoken'
import createError from 'http-errors'
import dotenv from 'dotenv'

dotenv.config()

const accessTokenSecret: string | undefined = process.env.ACCESS_TOKEN_SECRET

if (!accessTokenSecret) {
  throw new Error(
    'ACCESS_TOKEN_SECRET is not defined in the environment variables.'
  )
}

interface AccessTokenPayload {
  [key: string]: any
}

export const signAccessToken = async (
  payload: AccessTokenPayload
): Promise<string> => {
  try {
    const token = jwt.sign({ payload }, accessTokenSecret!, {
      expiresIn: '10m',
    })
    return token
  } catch (err) {
    throw createError.InternalServerError('Failed to sign access token.')
  }
}

export const verifyAccessToken = async (
  token: string
): Promise<AccessTokenPayload> => {
  try {
    const payload = jwt.verify(token, accessTokenSecret!)
    return payload as AccessTokenPayload
  } catch (error) {
    const message =
      error instanceof jwt.JsonWebTokenError ? 'Unauthorized' : "error.message"
    throw createError.Unauthorized(message)
  }
}
