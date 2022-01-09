import { ResponseType, ErrorType } from '../types'

export const getDataFromSuccess = <T>(response: ResponseType<T>) => {
  return response?.data
}

export const getDataFromError = (error: ErrorType) => {
  const response = error.response

  if (response && response.data) {
    return response.data
  }
}
