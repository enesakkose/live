import React from 'react'
import Skeleton from '@/components/Skeleton'
import styles from './Votes.module.scss'

function Loading() {
  return (
    <div className={styles.votes}>
      <Skeleton width={110} height={24}/>
      <Skeleton height={48}/>
    </div>
  )
}

export default Loading