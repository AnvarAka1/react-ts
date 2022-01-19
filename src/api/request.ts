import axios from 'axios'

import { getToken } from 'src/api/utils/token'
import { getApiUrl } from 'src/api/utils/environment'

const getHeaders = () => {
  const token = getToken()

  return {
    Authorization: token
  }
}

const getFileHeaders = () => {
  const CONTENT_TYPE_KEY = 'Content-Type'
  const contentType = 'multipart/form-data'
  const headers = getHeaders()

  return { ...headers, [CONTENT_TYPE_KEY]: contentType }
}

export const getHttpRequest = () => {
  const config = {
    baseURL: getApiUrl()
  }

  return axios.create(config)
}

export type OptionsType = Record<string, unknown>
export type ParamsType = Record<string, unknown>

function Request () {
  return {
    get: async (url: string, params?: ParamsType, options?: OptionsType) => {
      const http = getHttpRequest()
      const headers = getHeaders()
      const config = { headers, params, ...options }

      return http.get(url, config)
    },
    post: async <T>(url: string, data: T, params?: ParamsType, options?: OptionsType) => {
      const http = getHttpRequest()
      const headers = getHeaders()
      const config = { headers, params, ...options }

      return http.post(url, data, config)
    },
    put: async <T> (url: string, data: T, params?: ParamsType, options?: OptionsType) => {
      const http = getHttpRequest()
      const headers = getHeaders()
      const config = { headers, params, ...options }

      return http.put(url, data, config)
    },
    delete: async <T>(url: string, data?: T, params?: ParamsType, options?: OptionsType) => {
      const http = getHttpRequest()
      const headers = getHeaders()
      const config = { headers, params, data, ...options }

      return http.delete(url, config)
    },
    upload: async <T>(
      url: string,
      data: T,
      onUploadProgress: (progressEvent: ProgressEvent) => void,
      params?: ParamsType,
      options?: OptionsType
    ) => {
      const http = getHttpRequest()
      const headers = getFileHeaders()
      const config = { headers, params, onUploadProgress, ...options }

      return http.post(url, data, config)
    }
  }
}

export default Request
