export enum SearchEndPointEnum {
  searchUser = '/search/users?q=:keyword&per_page=5',
}

export enum SearchKeyEnum {
  FETCH_USER = 'FETCH_SEARCH_USER',
}

export interface SearchInterface {
  items: ItemInterface[]
}

export interface ItemInterface {
  login: string
}
