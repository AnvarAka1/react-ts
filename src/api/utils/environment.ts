import * as API from 'src/api/constants'

export const isProd = (
  location.hostname === API.APP_PROD_URL
)

export const isDev = (
  location.hostname === API.APP_DEV_URL
)

export const getApiUrl = () => {
  if (isProd) {
    return `${API.PROD_PROTOCOL}//${API.API_PROD_URL}`
  }

  if (isDev) {
    return `${API.DEV_PROTOCOL}//${API.API_DEV_URL}`
  }
}
