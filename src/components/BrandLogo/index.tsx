import React from 'react'
import MouseFollower from '../MouseFollower'
import styles from './BrandLogo.module.scss'

function BrandLogo() {
  return (
    <MouseFollower className={styles.brandLogo}>
      <span className={styles.text}>L</span>
    </MouseFollower>
  )
}

export default BrandLogo