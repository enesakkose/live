import React from 'react'
import Skeleton from '@/components/Skeleton'
import RowLoading from '@/components/Events/Row/loading'
import styles from './H2HContainer.module.scss'

function Loading() {
  return (
    <div className={styles.h2hContainer}>
      <div className={styles.tabBtns}>
        <Skeleton width={60} height={32} />
        <Skeleton width={60} height={32} />
        <Skeleton width={60} height={32} />
      </div>
      <div className={styles.group}>
        <Skeleton height={32} />
        <ul className={styles.groupList}>
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                <RowLoading />
                <RowLoading />
                <RowLoading />
                <RowLoading />
              </React.Fragment>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Loading
