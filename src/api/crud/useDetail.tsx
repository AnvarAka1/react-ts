import { useEffect } from 'react'

import useGetApi from 'src/api/api/useGetApi'
import { ParamsType } from 'src/api/request'
import { StateType } from 'src/api/api/dataState'
import { DetailResponseDTO } from 'src/api/types'
import { DetailType } from 'src/types/crud'

type toDetailMethodsType<ResponseDTO> = {
  getDetail: (params?: ParamsType) => Promise<DetailResponseDTO<ResponseDTO>>
  getDetailParams: (extraParams: ParamsType) => Promise<DetailResponseDTO<ResponseDTO>>
}

type toDetailType<ResponseDTO> = StateType<ResponseDTO> & toDetailMethodsType<ResponseDTO>

type toDetailReturnType<ResponseDTO> = toDetailMethodsType<ResponseDTO> & DetailType<ResponseDTO>

function toDetail<ResponseDTO> (detailArguments: toDetailType<ResponseDTO>): toDetailReturnType<ResponseDTO> {
  const { data, isLoading, getDetailParams, getDetail } = detailArguments
  const detail = data?.result || null
  const errors = data?.errors

  return { isLoading, detail, errors, getDetail, getDetailParams }
}

function useDetail <ResponseDTO> (url: string, params?: ParamsType, autoSend = true) {
  const { get, ...state } = useGetApi<ResponseDTO>(url)

  const getDetailParams = (extraParams: ParamsType) => get({ ...params, ...extraParams })

  useEffect(() => {
    if (autoSend) {
      get(params)
    }
  }, [autoSend, params, get])

  return toDetail<ResponseDTO>({ ...state, getDetailParams, getDetail: get })
}

export default useDetail
