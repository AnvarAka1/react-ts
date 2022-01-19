import useDeleteApi from '../api/useDeleteApi'

function useDelete<RequestDTO = null> (url: string) {
  return useDeleteApi<RequestDTO>(url)
}

export default useDelete
