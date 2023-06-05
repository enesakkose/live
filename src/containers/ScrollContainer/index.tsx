import React from 'react'
import styles from './ScrollContainer.module.scss'

function ScrollContainer({ children }: { children: React.ReactNode}) {
  return (
    <div className={styles.scrollContainer}>
      {children}
    </div>
  )
}

export default ScrollContainer