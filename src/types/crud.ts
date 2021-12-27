export type ListType<T> = {
  results: T[]
  isLoading: boolean
  count: number
}

export type DetailType<T> = {
  result: T
  isLoading: boolean
}
