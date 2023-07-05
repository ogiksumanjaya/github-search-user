export enum RepositoryEndPointEnum {
  repositoryUser = '/users/:username/repos',
}

export enum RepositoryKeyEnum {
  FETCH_REPO = 'FETCH_USER_REPOSITORY',
}

export interface RepositoryInterface {
  name: string
  description: null
  stargazers_count: number
}
