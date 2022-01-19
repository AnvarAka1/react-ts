import { useReducer, useCallback } from 'react'

import { initialState, createReducer, ActionEnum } from '../api/dataState'
import { getDataFromSuccess, getDataFromError } from '../api/utils'
import useRequest from '../useRequest'
import { ResponseType } from '../types'

function usePutApi<RequestDTO, ResponseDTO> (url: string) {
  const request = useRequest()
  const reducer = createReducer<ResponseDTO>()
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback((data: RequestDTO, params) => {
    dispatch({ type: ActionEnum.PENDING, payload: null })

    return request.put<RequestDTO>(url, data, params)
      .then((response: ResponseType<ResponseDTO>) => {
        const data = getDataFromSuccess(response)
        dispatch({ type: ActionEnum.SUCCESS, payload: data })

        return data
      })
      .catch(response => {
        const error = getDataFromError(response)
        dispatch({ type: ActionEnum.FAIL, payload: null, errorPayload: error })

        return Promise.reject(error)
      })
  }, [request, url])

  return { ...state, put: requestCallback }
}

export default usePutApi
