import React from 'react'
import clsx from 'clsx'
import Player from '../Player'
import type { Formation } from '@/types/EventLineups'
import styles from './Team.module.scss'

function Team({ formation }: { formation: Formation }) {
  return (
    <div className={clsx(styles.team, formation.FORMATION_LINE === 1 ? styles.home : styles.away)}>
      <span className={styles.disposition}>{formation.FORMATION_DISPOSTION.slice(2)}</span>
      <ul className={styles.playerList}>
        {formation.MEMBERS.map(player => (
          <span>{player.SHORT_NAME}</span>
        ))}
      </ul>
    </div>
  )
}

export default Team
