import classnames from 'classnames'

import styles from './container.module.scss'

interface IContainerProps {
  className?: string
  children: React.ReactNode
}

const Container = ({ children, className }: IContainerProps): JSX.Element => {
  return (
    <div className={classnames(styles.container, className)}>
      <div className={styles.containerContent}>{children}</div>
    </div>
  )
}

export default Container
