import { Suspense, createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { PageContent, Loading, Header, SideBar } from '@/component'
import styles from './dashBoardLayout.module.scss'

interface MenuContextType {
  isOpenMenu: boolean
  setIsOpenMenu: (isOpenMenu: boolean) => void
}

const ToggleMenu = createContext<MenuContextType>({ isOpenMenu: true, setIsOpenMenu: () => {} })

const DashboardLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true)
  return (
    <ToggleMenu.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      <Header />
      <div className={styles.horizontalBox}>
        <SideBar />
        <Suspense
          fallback={
            <PageContent>
              <Loading />
            </PageContent>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </ToggleMenu.Provider>
  )
}

export type { MenuContextType }
export { ToggleMenu }
export default DashboardLayout
