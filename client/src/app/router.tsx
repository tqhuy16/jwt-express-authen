import { Suspense, lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import '@/translations/i18n'
import { PrivateRoute, DashboardLayout, PageContent, Loading } from '@/component'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))
const Example = lazy(() => import('@/pages/Example'))
const Redux = lazy(() => import('@/pages/Redux'))
const NotFound = lazy(() => import('@/pages/NotFound'))

import { ROUTER_PATH } from '@/constants/common'
import styles from './router.module.scss'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <div className={styles.verticalBox}>
        <Suspense
          fallback={
            <PageContent>
              <Loading />
            </PageContent>
          }
        >
          <Routes>
            <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              {/* Pages need login to access should put in here */}
              <Route index element={<Home />} />
              <Route path={ROUTER_PATH.EXAMPLE} element={<Example />} />
              <Route path={ROUTER_PATH.REDUX} element={<Redux />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default RoutesComponent
