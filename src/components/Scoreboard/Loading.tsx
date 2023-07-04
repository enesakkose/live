import React from 'react'
import Skeleton from '../Skeleton'
import styles from './Scoreboard.module.scss'

function Loading() {
  return (
    <div style={{ height: '14.125rem' }} className={styles.scoreboardContainer}>
      <Skeleton height={40} />
      <div className={styles.scoreboard}>
        <Skeleton width={100} height={100} className={styles.homeTeamInfo} />
        <Skeleton height={0} className={styles.eventStatus}/>
        <Skeleton height={24} width={72} className={styles.score} />
        <Skeleton height={0} className={styles.eventTime}/>
        <Skeleton width={100} height={100} className={styles.awayTeamInfo} />
      </div>
    </div>
  )
}

export default Loading