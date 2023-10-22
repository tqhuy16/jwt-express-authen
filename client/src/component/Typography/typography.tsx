import classnames from 'classnames'

import styles from './typography.module.scss'

type TypeSize = 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'giant' | 'enormous'

interface IProps {
  className?: string
  size?: TypeSize
  link?: boolean
  primary?: boolean
  secondary?: boolean
  underline?: boolean
  center?: boolean
  // bold?: boolean
  children: React.ReactNode
  // style?: any
}

const Typography = ({
  className,
  children,
  link,
  underline,
  primary,
  secondary,
  center,
  size,
  ...rest
}: IProps): JSX.Element => {
  return (
    <div
      className={classnames(
        styles.typography,
        size && styles[size],
        link && styles.link,
        underline && styles.underline,
        primary && styles.primary,
        secondary && styles.secondary,
        center && styles.center,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Typography
