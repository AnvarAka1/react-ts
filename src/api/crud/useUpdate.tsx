import { useCallback } from 'react'

import usePutApi from 'src/api/api/usePutApi'
import { ParamsType } from 'src/api/request'

function useUpdate<RequestDTO, ResponseDTO = null> (url: string, params?: ParamsType) {
  const { put, ...state } = usePutApi<RequestDTO, ResponseDTO>(url)

  const updateCallback = useCallback(data => {
    return put(data, params)
  }, [params, put])

  return { ...state, update: updateCallback }
}

export default useUpdate
