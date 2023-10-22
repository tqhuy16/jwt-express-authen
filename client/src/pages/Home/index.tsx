import { useTranslation } from 'react-i18next'

import { Container, PageContent, Loading, Typography } from '@/component'
import { AppleIcon } from '@/assets/icons'

import styles from './home.module.scss'

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <PageContent>
      <Container>
        <h1>{t('hello')}</h1>
        <Typography size='big'>SVG Icon</Typography>
        <AppleIcon />
        <Typography size='big'>CSS Module BackgroundImage</Typography>
        <div className={styles.background}></div>
        <Loading />
      </Container>
    </PageContent>
  )
}

export default Home
