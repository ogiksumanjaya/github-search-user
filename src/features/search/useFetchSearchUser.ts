import { useQuery } from '@tanstack/react-query'
import { APIErrorType, publicRequest } from '../../utils/axiosRequest'
import { SearchEndPointEnum, SearchInterface, SearchKeyEnum } from './interface'

export const useFetchSearchUser = (keyword?: string) =>
  useQuery({
    queryFn: async () => {
      const q = keyword || ''
      const response = await publicRequest.get(SearchEndPointEnum.searchUser.replace(':keyword', q))
      const userResponse: SearchInterface = response.data

      return userResponse
    },
    queryKey: [SearchKeyEnum.FETCH_USER, keyword],
    enabled: !!keyword,
    onError(error: APIErrorType) {
      return error
    },
  })
