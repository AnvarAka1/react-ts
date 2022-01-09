import { useReducer, useCallback } from 'react'

import { initialState, createReducer, ActionEnum } from '../api/state'
import { getDataFromSuccess, getDataFromError } from '../api/utils'
import useRequest from '../useRequest'
import { ResponseType } from '../types'

function useDeleteApi<RequestDTO, ResponseDTO> (url: string) {
  const request = useRequest()
  const reducer = createReducer<ResponseDTO>()
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback((data: RequestDTO) => {
    dispatch({ type: ActionEnum.PENDING })

    return request.delete<RequestDTO>(url, data)
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

  return { ...state, post: requestCallback }
}

export default useDeleteApi
