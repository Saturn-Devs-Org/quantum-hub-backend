export class ApiError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.name = 'ApiError'
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string = 'Bad Request') {
    super(400, message)
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string = 'Unauthorized') {
    super(401, message)
  }
} 

export class ForbiddenError extends ApiError {
  constructor(message: string = 'Forbidden') {
    super(403, message)
  }
} 

export class NotFoundError extends ApiError {
  constructor(message: string = 'Resource not found') {
    super(404, message)
  }
}
