import React from 'react'
import Skeleton from '../Skeleton'
import styles from './GroupLabel.module.scss'

function Loading() {
  return (
    <Skeleton height={32} className={styles.groupLabel}/>
  )
}

export default Loading