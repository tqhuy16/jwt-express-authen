import classnames from 'classnames'

import styles from './pageContent.module.scss'

interface IPageContentProps {
  className?: string
  children: React.ReactNode
}

const PageContent = ({ children, className, ...rest }: IPageContentProps) => {
  return (
    <div
      {...rest}
      //   ref={(ref) => {
      //     this._div = ref
      //   }}
      className={classnames(className, styles.pageContent)}
    >
      {children}
    </div>
  )
}

export default PageContent
