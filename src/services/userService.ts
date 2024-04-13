import prismaService, { handlePrismaError } from './prismaService'
import { User } from '../models/user'
import { Prisma } from '@prisma/client'
import { ApiError } from '../utils/ApiError'

export const createUser = async (userData: User) => {
  try {
    const newUser = await prismaService.user.create({
      data: { ...userData },
    })

    return newUser
  } catch (error) {
    handlePrismaError(error)
    throw error 
  }
}

export const getAllAdmins = async () => {
  try {
    const allAdmins = await prismaService.user.findMany({
      where: {
        isAdmin: true
      }
    })

    return allAdmins
  } catch (error) {
    throw error
  }
}

export const getAllCustomers = async () => {
  try {
    const allCustomers = await prismaService.user.findMany({
      where: {
        isAdmin: false,
      },
    })

    return allCustomers
  } catch (error) {
    throw error
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    const userByUsername = await prismaService.user.findFirstOrThrow({
      where: {
        username: { equals: username },
      },
    })

    return userByUsername
  } catch (error) {
    handlePrismaError(error)
    throw error 
  }
}

export const getUserById = async (id: string) => {
  try {
    const userById = await prismaService.user.findFirstOrThrow({
      where: {
        id: { equals: id },
      },
    })

    return userById
  } catch (error) {
    handlePrismaError(error)
    throw error
  }
}

export const updateUser = async (id: string, userData: User) => {
  try {
    const userUpdated = await prismaService.user.update({
      where: {
        id: id,
      },
      data: { ...userData },
    })

    return userUpdated
  } catch (error) {
    handlePrismaError(error)
    throw error 
  }
}

export const deleteUser = async (id: string) => {
  try {
    const deleteUser = await prismaService.user.delete({
      where: {
        id: id,
      },
    })

    return deleteUser
  } catch (error) {
    handlePrismaError(error)
    throw error 
  }
}
