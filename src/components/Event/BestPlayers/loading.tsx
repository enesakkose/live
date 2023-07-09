import React from 'react'
import Skeleton from '@/components/Skeleton'
import styles from './BestPlayers.module.scss'

function Loading() {
  return (
    <div className={styles.bestPlayers}>
      <Skeleton width={115} height={45}/>
      <Skeleton width={115} height={45}/>
    </div>
  )
}

export default Loading