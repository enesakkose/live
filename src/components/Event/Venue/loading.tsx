import React from 'react'
import Skeleton from '@/components/Skeleton'
import styles from './Venue.module.scss'

function Loading() {
  return (
    <div className={styles.venue}>
        <Skeleton width={150} height={24}/>
      <div className={styles.informations}>
        <Skeleton height={24}/>
        <Skeleton height={24}/>
      </div>
    </div>
  )
}

export default Loading