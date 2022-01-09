const KEY = 'token'

export const setToken = (token?: string) => {
  if (token) {
    localStorage.setItem(KEY, JSON.stringify(token))
  } else {
    localStorage.removeItem(KEY)
  }
}

export const getToken = () => {
  const token = localStorage.getItem(KEY)

  if (token) {
    return JSON.parse(token)
  }

  return null
}
