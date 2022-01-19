import { ErrorType } from 'src/api/types'

export type ListType<T> = {
  results: T[] | null
  isLoading: boolean
  count: number
  errors?: ErrorType[] | null
}

export type DetailType<T> = {
  detail: T | null
  isLoading: boolean
  errors?: ErrorType[] | null
}
