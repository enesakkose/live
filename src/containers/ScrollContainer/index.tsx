import React from 'react'
import clsx from 'clsx'
import styles from './ScrollContainer.module.scss'

type ScrollContainerPropsType = {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

function ScrollContainer({ children, as = 'div', className }: ScrollContainerPropsType) {
  const Element = as

  return (
    <Element className={clsx(styles.scrollContainer, className)}>
      {children}
    </Element>
  )
}

export default ScrollContainer