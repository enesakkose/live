import React from 'react'
import clsx from 'clsx'
import Player from '../Player'
import type { Formation } from '@/types/EventLineups'
import styles from './Team.module.scss'

function Team({ formation }: { formation: Formation }) {
  const dispositionArray = formation.FORMATION_DISPOSTION.split('-').map(Number) ?? [2,1,2]
  const sortedByPosition = formation.MEMBERS.sort((a, b) => a.PLAYER_POSITION - b.PLAYER_POSITION)

  let startIndex = 0
  const chunkPlayerList = dispositionArray.map((playerListSize, index) => {
    const playerList = sortedByPosition.slice(startIndex, startIndex + playerListSize)
    startIndex += playerListSize

    return playerList
  })

  return (
    <div className={clsx(styles.team, formation.FORMATION_LINE === 1 ? styles.home : styles.away)}>
      <span className={styles.disposition}>{formation.FORMATION_DISPOSTION.slice(2)}</span>
      <ul className={styles.playerList}>
        {chunkPlayerList.map((playerLists, index) => (
          <li className={styles.playerLine} key={index}>
            {playerLists.map((player) => (
              <Player key={player.PLAYER_ID} player={player}/>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team
