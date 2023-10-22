import mockData from '@/utils/mock-api'
import http from '@/http'

interface ILogin {
  userName: string
  password: string
}

interface resLogin {
  accessToken: string
  createdAt: string
  updatedAt: string
  username: string
  __v: number
  _id: string
}

const login = async ({ userName, password }: ILogin): Promise<any> => {
  try {
    const response: resLogin = await http.post('/auth/sign-in', { userName, password })
    if (response.accessToken) {
      return mockData({
        data: {
          token: response.accessToken
        },
        duration: 1000
      })
    }
  } catch (error) {
    return mockData({
      error: {
        statusText: error
      },
      duration: 1000
    })
  }
}

export { login }
