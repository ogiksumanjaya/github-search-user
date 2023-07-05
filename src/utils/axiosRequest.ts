/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export type APIErrorType = {
  message: string
}

export const InternalError: APIErrorType = {
  message: 'Internal error during request',
}

export const onFirstRequest = (config: AxiosRequestConfig) => {
  const configCopy = { ...config }
  configCopy.headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  return configCopy
}

export const onFulfilledRequest = (response: AxiosResponse) => response
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onRejectedResponse = (_error: any): any => Promise.reject(_error.response.data)

export const publicRequest = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL_API}`,
})

publicRequest.interceptors.request.use(onFirstRequest, onRejectedResponse)
publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse)
