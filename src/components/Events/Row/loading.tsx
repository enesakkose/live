import React from 'react'
import Skeleton from '@/components/Skeleton'
import styles from './Row.module.scss'

function Loading() {
  return (
    <div className={styles.eventRow} style={{ borderBottom: 0, paddingBlock: '1rem' }}>
      <Skeleton height={48} width={40} />
      <div className={styles.teams} style={{ borderRight: 0 }}>
        <Skeleton height={20} width={200} />
        <Skeleton height={20} width={200} />
      </div>
      <Skeleton height={48} />
    </div>
  )
}

export default Loading
