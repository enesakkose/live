import React from 'react'
import BrandLogo from '../BrandLogo'
import styles from './Loading.module.scss'

function Loading() {
  return (
    <div className={styles.loading}>
      <BrandLogo/>
    </div>
  )
}

export default Loading