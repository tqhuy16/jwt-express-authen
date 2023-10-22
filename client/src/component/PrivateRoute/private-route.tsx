import { Navigate } from 'react-router-dom'

import { LOGIN_ACCESS_TOKEN } from '@/constants/key-storage'
import { ROUTER_PATH } from '@/constants/common'

interface PrivateRouteProps {
  children: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props

  const accessToken = window.localStorage.getItem(LOGIN_ACCESS_TOKEN)
  if (accessToken) return children
  return <Navigate to={ROUTER_PATH.LOGIN} />
}

export default PrivateRoute
