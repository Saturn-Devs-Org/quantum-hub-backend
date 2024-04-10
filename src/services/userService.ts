import prismaService from './prismaService'
import { User } from '../models/user'

export const createUser = async (userData: User) => {
  try {
    const newUser = await prismaService.user.create({
      data: { ...userData },
    })

    return newUser
  } catch (error) {
    throw new Error('Unable to create a new user')
  }
}

export const getAllUsers = async () => {
  try {
    const allUsers = await prismaService.user.findMany()

    return allUsers
  } catch (error) {
    throw new Error('Unable to fetch users list')
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    const userByUsername = await prismaService.user.findFirst({
      where: {
        username: { equals: username },
      },
    })

    return userByUsername
  } catch (error) {
    throw new Error(`Unable to get user with the username ${username}`)
  }
}

export const updateUser = async (id: string, userData: User) => {
  try {
    const userUpdate = await prismaService.user.update({
      where: {
        id: id,
      },
      data: { ...userData },
    })

    return userUpdate
  } catch (error) {
    throw new Error(`Unable to update user with the id ${id} `)
  }
}

export const deleteUser = async (id: string) => {
  try {
    const deleteUser = await prismaService.user.delete({
      where: {
        username: id,
      },
    })

    return deleteUser
  } catch (error) {
    throw new Error(`Unable to delete user with the id ${id} `)
  }
}
