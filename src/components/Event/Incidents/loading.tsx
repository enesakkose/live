import React from 'react'
import Skeleton from '@/components/Skeleton'
import styles from './Incidents.module.scss'

function Loading() {
  return (
    <div className={styles.incidents}>
      <Skeleton height={32} />
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Skeleton
            width={325}
            height={28}
            className={index % 2 === 0 ? styles.incidentAwaySkeleton : ''}
          />
        ))}
    </div>
  )
}

export default Loading
