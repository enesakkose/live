import React from 'react'
import styles from './Modal.module.scss'

function Modal({children}: { children: React.ReactNode}) {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
}

export default Modal