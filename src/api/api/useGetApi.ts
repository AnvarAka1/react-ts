import { useReducer, useCallback } from 'react'

import { initialState, createReducer, ActionEnum } from '../api/state'
import { getDataFromSuccess, getDataFromError } from '../api/utils'
import useRequest from '../useRequest'
import { ResponseType } from '../types'

function useGetApi<ResponseDTO> (url: string) {
  const request = useRequest()
  const reducer = createReducer<ResponseDTO>()
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback(params => {
    dispatch({ type: ActionEnum.PENDING })

    return request.get(url, params)
      .then((response: ResponseType<ResponseDTO>) => {
        const data = getDataFromSuccess(response)
        dispatch({ type: ActionEnum.SUCCESS, payload: data })

        return data
      })
      .catch(response => {
        const error = getDataFromError(response)
        dispatch({ type: ActionEnum.FAIL, errorPayload: error })

        return Promise.reject(error)
      })
  }, [request, url])

  return { ...state, get: requestCallback }
}

export default useGetApi
