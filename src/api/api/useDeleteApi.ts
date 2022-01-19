import { useCallback, useReducer } from 'react'

import { ActionEnum, createReducer, initialState } from '../api/state'
import { getDataFromError } from '../api/utils'
import useRequest from '../useRequest'

function useDeleteApi<RequestDTO> (url: string) {
  const request = useRequest()
  const reducer = createReducer()
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback((data?: RequestDTO) => {
    dispatch({ type: ActionEnum.PENDING })

    return request.delete<RequestDTO>(url, data)
      .then(() => {
        dispatch({ type: ActionEnum.SUCCESS })
      })
      .catch(response => {
        const error = getDataFromError(response)
        dispatch({ type: ActionEnum.FAIL, errorPayload: error })

        return Promise.reject(error)
      })
  }, [request, url])

  return { ...state, remove: requestCallback }
}

export default useDeleteApi
