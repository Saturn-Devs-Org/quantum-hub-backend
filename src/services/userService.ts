import prismaService from './prismaService'
import { User } from '../models/user'

export const createUser = async (userData: User) => {
  try {
    const newUser = await prismaService.user.create({
      data: { ...userData },
    })

    return newUser
  } catch (error) {
    throw error
  }
}
