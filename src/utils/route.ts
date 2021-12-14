import { complement, fromPairs, isNil, join, map, mergeRight, omit, pickBy, pipe, prop, sortBy, toPairs } from 'ramda'

export type Params = Record<string, string | number>
export type ParamsPairs = [string, string | number][]

export const setParams = pipe<
  [Params, Params],
  Params,
  Params,
  ParamsPairs,
  ParamsPairs,
  Params
  >(
    mergeRight,
    pickBy(complement(isNil)),
    toPairs,
    sortBy(element => prop(0, element)),
    fromPairs
  )

export const clearParams = (params: Params, key: string[]) => omit(key, params)

export const paramsToSearch = pipe<
  [Params],
  ParamsPairs,
  string[],
  string
  >(
    toPairs,
    map(join('=')),
    join('&')
  )

export const getRouteWithParams = (route: string, searchParams: Params) => {
  return `${route}?${paramsToSearch(searchParams)}`
}
