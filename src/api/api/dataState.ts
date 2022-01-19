import { ResponseDataType } from 'src/api/types'

export enum ActionEnum {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail'
}

export type ActionType<T> = {
  type: ActionEnum.PENDING | ActionEnum.FAIL | ActionEnum.SUCCESS,
  payload: ResponseDataType<T> | null
  errorPayload?: Record<string, unknown> | null
}

export type StateType<T> = {
  data: ResponseDataType<T> | null
  error?: Record<string, unknown> | null
  isSuccess: boolean
  isFail: boolean
  isLoading: boolean
}

export const initialState = {
  data: null,
  error: null,
  isSuccess: false,
  isFail: false,
  isLoading: false
}

export const createReducer = <T> () => (state: StateType<T>, action: ActionType<T>): StateType<T> => {
  if (action.type === ActionEnum.PENDING) {
    return { ...state, isLoading: true }
  }

  if (action.type === ActionEnum.SUCCESS) {
    return {
      data: action.payload,
      error: null,
      isSuccess: true,
      isFail: false,
      isLoading: false
    }
  }

  if (action.type === ActionEnum.FAIL) {
    return {
      data: null,
      error: action.errorPayload,
      isSuccess: false,
      isFail: true,
      isLoading: false
    }
  }

  return state
}
