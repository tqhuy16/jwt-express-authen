import { useContext } from 'react'
import { Popover } from 'antd'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { logoutStorage } from '@/utils/authenticated-storage'
import { LOGIN_ACCESS_TOKEN } from '@/constants/key-storage'
import { Clickable } from '@/component'
import { ROUTER_PATH } from '@/constants/common'
import { MenuContextType, ToggleMenu } from '@/component/DashboardLayout/dashboard-layout'
import { LANGUAGE_ITEMS } from '@/constants/common'
import styles from './header.module.scss'

const Header = () => {
  const navigate = useNavigate()
  const MenuContext = useContext<MenuContextType>(ToggleMenu)

  const { t, i18n } = useTranslation('common')

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    logoutStorage(LOGIN_ACCESS_TOKEN)
    navigate(ROUTER_PATH.LOGIN)
  }

  const toggleSideBar = () => {
    MenuContext.setIsOpenMenu(!MenuContext.isOpenMenu)
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.content}>
        <div className={styles.leftBox}>
          <Clickable className={styles.menuButton} onClick={toggleSideBar}>
            <div />
            <div />
            <div />
          </Clickable>
          <p className={styles.title}>{t('header.title')}</p>
        </div>
        <div className={styles.rightBox}>
          <Popover
            content={
              <a href='/' onClick={onLogout}>
                {t('header.logout')}
              </a>
            }
            trigger='click'
          >
            <div className={styles.userBox}>
              <img className={styles.avatar} src='https://picsum.photos/300' alt='avatar' />
              <p className='name'>{t('header.hello', { userName: 'tqhuy' })}</p>
            </div>
          </Popover>
          <div className={styles.languageBox}>
            {LANGUAGE_ITEMS.map((item) => (
              <Clickable
                key={item}
                className={classnames(styles.languageButton, item === i18n.language && styles.active)}
                onClick={() => i18n.changeLanguage(item)}
              >
                {item.toUpperCase()}
              </Clickable>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
