import { useQuery } from '@tanstack/react-query'
import { APIErrorType, publicRequest } from '../../utils/axiosRequest'
import { RepositoryEndPointEnum, RepositoryInterface, RepositoryKeyEnum } from './interface'

export const useFetchRepository = (username: string) =>
  useQuery({
    queryFn: async () => {
      const response = await publicRequest.get(
        RepositoryEndPointEnum.repositoryUser.replace(':username', username),
      )
      const repoResponse: RepositoryInterface[] = response.data

      return repoResponse
    },
    queryKey: [RepositoryKeyEnum.FETCH_REPO, username],
    enabled: false,
    onError(error: APIErrorType) {
      return error
    },
  })
