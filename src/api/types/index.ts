export type ResponseType<T> = {
  data?: T | null
  status: number
}

export type ErrorType = {
  response?: {
    data?: Record<string, unknown> | null
  }
}
