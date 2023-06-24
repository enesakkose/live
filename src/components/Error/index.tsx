import React from 'react'
import styles from './Error.module.scss'

type ErrorPropsType = {
  error: string
}

function Error({ error }: ErrorPropsType) {
  return (
    <div className={styles.error}>
      <p className={styles.text}>{error}</p>
    </div>
  )
}

export default Error
