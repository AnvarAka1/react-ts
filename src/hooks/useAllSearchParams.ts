import useSearchParams from 'src/hooks/useSearchParams'

function useAllSearchParams () {
  const searchParams = useSearchParams()

  const params: Record<string, string> = {}

  for (const pair of searchParams.entries()) {
    params[pair[0]] = pair[1]
  }

  return params
}

export default useAllSearchParams
