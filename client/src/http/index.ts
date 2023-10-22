import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  }
)

export default instance
