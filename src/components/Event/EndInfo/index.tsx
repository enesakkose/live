import React from 'react'
import Highlights from '../Highlights'
import BestPlayers from '../BestPlayers'
import styles from './EndInfo.module.scss'

type EndInfoPropsType = { eventId: number }

function EndInfo({ eventId }: EndInfoPropsType) {
  return (
    <div className={styles.endInfo}>
      <BestPlayers eventId={eventId} />
      <Highlights eventId={eventId} />
    </div>
  )
}

export default EndInfo
