import prismaService from './prismaService'
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ApiError(400,'A user with the provided details already exists.')
      }
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new ApiError(400, `The format of the data is invalid`)
    }
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2023') {
        throw new ApiError(404, `The format of the id ${username} is invalid`)
      }
      if (error.code === 'P2025') {
        throw new ApiError(404, `The user ${username} does not exist`)
      }
    }
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2023') {
        throw new ApiError(404, `The format of the id ${id} is invalid`)
      }
      if (error.code === 'P2025') {
        throw new ApiError(404, `The user ${id} does not exist`)
      }
    }
    throw error
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ApiError(400, 'The user can`t be updated.')
      } 
    }
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new ApiError(400, 'The user can`t be updated.')
    }
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2023') {
        throw new ApiError(404, `The format of the id ${id} is invalid`)
      }
      if (error.code === 'P2025') {
        throw new ApiError(404, `The user ${id} does not exist`)
      }
    }
    throw error 
  }
}
