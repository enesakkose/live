import React from 'react'
import styles from './Timezone.module.scss'
import Skeleton from '@/components/Skeleton'

function Loading() {
  return (
    <div className={styles.timezone}>
      <div className={styles.filterActionBtns}>
        <Skeleton height={32} width={50}/>
        <Skeleton height={32} width={50}/>
      </div>
      <Skeleton height={32} width={142}/>
    </div>
  )
}

export default Loading