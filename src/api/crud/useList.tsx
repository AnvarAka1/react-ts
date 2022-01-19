import { useEffect } from 'react'

import { ParamsType } from 'src/api/request'
import useGetApi from 'src/api/api/useGetApi'
import { StateType } from 'src/api/api/dataState'
import { ListType } from 'src/types/crud'
import { ListResponseDTO } from 'src/api/types'

const empty: never[] = []

type ListMethodsType<ResponseDTO> = {
  getListParams: (extraParams: ParamsType) => Promise<ListResponseDTO<ResponseDTO>>
  getList: (params: ParamsType) => Promise<ListResponseDTO<ResponseDTO>>
}

type toListType<ResponseDTO> = ListMethodsType<ResponseDTO> & StateType<ResponseDTO>
type toListReturnType<ResponseDTO> = ListMethodsType<ResponseDTO> & ListType<ResponseDTO>

function toList <ResponseDTO> (listArguments: toListType<ResponseDTO>) : toListReturnType<ResponseDTO> {
  const { data, isLoading, getListParams, getList } = listArguments

  const count = data?.count || 10
  const results = data?.results || empty
  const errors = data?.errors

  return { count, isLoading, results, errors, getListParams, getList }
}

function useList<ResponseDTO> (url: string, params?: ParamsType, autoSend = true) {
  const { get, ...state } = useGetApi<ResponseDTO>(url)

  const getListParams = (extraParams: ParamsType) => get({ ...params, ...extraParams })

  useEffect(() => {
    if (autoSend) {
      get(params)
    }
  }, [autoSend, params, get])

  return toList<ResponseDTO>({ ...state, getListParams, getList: get })
}

export default useList
