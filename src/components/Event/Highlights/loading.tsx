import React from 'react'
import Skeleton from '@/components/Skeleton'
import styles from './Highlights.module.scss'

function Loading() {
  return (
    <div className={styles.highlights}>
      <Skeleton width={144} height={80}/>
    </div>
  )
}

export default Loading