import usePostApi from '../api/usePostApi'

function useCreate<RequestDTO, ResponseDTO> (url: string) {
  const { post, ...state } = usePostApi<RequestDTO, ResponseDTO>(url)

  return { ...state, create: post }
}

export default useCreate
