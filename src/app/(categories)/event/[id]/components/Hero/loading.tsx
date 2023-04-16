import React from 'react'
import styles from './Hero.module.scss'
import Skeleton from '@/components/Skeleton'

function Loading() {
  return (
    <div className={styles.eventHero}>
      <div className={styles.eventInfo}>
        <Skeleton width={144} height={144} />
        <div className={styles.eventStatement}>
          <div className={styles.eventCurrentScore}>
            <Skeleton height={72} width={250} />
          </div>
        </div>
        <Skeleton width={144} height={144} />
      </div>
    </div>
  )
}

export default Loading
