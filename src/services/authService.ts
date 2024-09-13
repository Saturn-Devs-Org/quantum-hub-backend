
import { User } from "../models/user";
import prismaService, { handlePrismaError } from "./prismaService";
import bcrypt from 'bcryptjs';
import { ApiError } from "../utils/ApiError";
import { signAccessToken } from '../utils/jwt'

export const login = async (userData: User) => {
    try {
        const { username, passwordHash } = userData
        const user = await prismaService.user.findUniqueOrThrow({
          where: {
            username: username,
          },
        })
        
        const checkPassword = bcrypt.compareSync(
          passwordHash,
          user.passwordHash
        )
        if (!checkPassword)
          throw new ApiError(402, 'Email address or password not valid')
        const accessToken = await signAccessToken(user)

        return { ...user, accessToken }
    } catch (error) {
        handlePrismaError(error)
        throw error
    }
}

export const register = async (userData: User) => {
  try {
    userData.passwordHash = bcrypt.hashSync(userData.passwordHash, 8)
    userData.isAdmin = false
    const newUser = await prismaService.user.create({
      data: { ...userData },
    })

    return newUser
  } catch (error) {
    handlePrismaError(error)
    throw error
  }
}