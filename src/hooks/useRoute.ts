import { useHistory } from 'react-router-dom'

import { clearParams, Params, paramsToSearch, setParams } from 'src/utils/route'

import useAllSearchParams from './useAllSearchParams'

function useRoute () {
  const history = useHistory()
  const params: Params = useAllSearchParams()
  const pathname = history.location.pathname

  const changeParams = (values: Params) => {
    const newParams: Params = setParams(params, values)
    const url = `${pathname}?${paramsToSearch(newParams)}`

    history.push(url)
  }

  const replaceParams = (values: Params) => {
    const newParams = setParams(params, values)
    const url = `${pathname}?${paramsToSearch(newParams)}`

    history.replace(url)
  }

  const removeParams = (keys: [string]) => {
    const newParams = clearParams(params, keys)
    const url = `${pathname}?${paramsToSearch(newParams)}`

    history.push(url)
  }

  return { changeParams, replaceParams, removeParams }
}

export default useRoute
