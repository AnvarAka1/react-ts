export type DetailDTO<T> = {
  result: T
  errors: ErrorType[]
}

export type ListDTO<T> = {
  results: T[] | null
  count: number
  errors: ErrorType[]
}

export type ResponseDataType<T> = ListDTO<T> & DetailDTO<T>

export type ResponseType<T> = {
  data: ResponseDataType<T>
  status: number
}

export type ErrorType = {
  response?: {
    data?: Record<string, unknown> | null
  }
}

export type ListResponseDTO<T> = {
  results: T[] | null
  count: number
  errors: ErrorType[] | null
}

export type DetailResponseDTO<T> = {
  result: T | null
  errors: ErrorType[] | null
}
