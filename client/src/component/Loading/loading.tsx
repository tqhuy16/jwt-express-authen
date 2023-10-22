import classnames from 'classnames'

import styles from './loading.module.scss'

interface ILoadingProps {
  size?: 'small'
  className?: string
}

const Loading = ({ size, className }: ILoadingProps) => {
  return <div className={classnames(styles.loading, size, className)}></div>
}

export default Loading
