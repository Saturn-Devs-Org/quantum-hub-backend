import { Prisma, PrismaClient } from '@prisma/client'
import { ApiError } from '../utils/ApiError'

export default new PrismaClient()

export const handlePrismaError = (error: any) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      throw new ApiError(
        400,
        'A entity with the provided details already exists.'
      )
    }
    if (error.code === 'P2023') {
      throw new ApiError(404, `The format of the id is invalid`)
    }
    if (error.code === 'P2025') {
      throw new ApiError(404, `The entity does not exist`)
    }
  }
  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new ApiError(400, `The format of the data is invalid`)
  }
}
