import React, { ReactNode } from 'react'
import clsx from 'clsx'
import styles from '@/components/MainContainer/MainContainer.module.scss'

function MainContainer({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={clsx(styles.container, className)}>{children}</div>
}

export default MainContainer
