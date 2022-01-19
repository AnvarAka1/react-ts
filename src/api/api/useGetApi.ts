import { useCallback, useReducer } from 'react'

import { ParamsType } from 'src/api/request'
import { ActionEnum, createReducer, initialState } from 'src/api/api/dataState'
import { getDataFromError, getDataFromSuccess } from 'src/api/api/utils'
import useRequest from 'src/api/useRequest'
import { ResponseType } from 'src/api/types'

function useGetApi<ResponseDTO> (url: string) {
  const request = useRequest()
  const reducer = createReducer<ResponseDTO>()
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback((params?: ParamsType) => {
    dispatch({ type: ActionEnum.PENDING, payload: null })

    return request.get(url, params)
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

  return { ...state, get: requestCallback }
}

export default useGetApi
