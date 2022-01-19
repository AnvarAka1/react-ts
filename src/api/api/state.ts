export enum ActionEnum {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail'
}

export type ActionType = {
  type: ActionEnum.PENDING | ActionEnum.FAIL | ActionEnum.SUCCESS,
  errorPayload?: Record<string, unknown> | null
}

export type StateType = {
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
  isLoading: false,
}

export const createReducer = () => (state: StateType, action: ActionType): StateType => {
  if (action.type === ActionEnum.PENDING) {
    return { ...state, isLoading: true }
  }

  if (action.type === ActionEnum.SUCCESS) {
    return {
      error: null,
      isSuccess: true,
      isFail: false,
      isLoading: false
    }
  }

  if (action.type === ActionEnum.FAIL) {
    return {
      error: action.errorPayload,
      isSuccess: false,
      isFail: true,
      isLoading: false
    }
  }

  return state
}
