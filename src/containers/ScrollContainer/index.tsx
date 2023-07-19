import React from 'react'
import clsx from 'clsx'
import styles from './ScrollContainer.module.scss'

type ScrollContainerPropsType<T extends React.ElementType = 'div'> = {
  children: React.ReactNode
  className?: string
  as?: T
} & React.ComponentPropsWithoutRef<T>

const ScrollContainer = <T extends React.ElementType = 'div'>({
  children,
  as,
  className,
  ...props
}: ScrollContainerPropsType<T>) => {
  const Element = as || 'div'

  return <Element className={clsx(styles.scrollContainer, className)} {...props}>{children}</Element>
}

export default ScrollContainer
