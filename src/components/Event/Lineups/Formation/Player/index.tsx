import React from 'react'
import RoundedImg from '@/components/RoundedImg'
import Rating from './Rating'
import IncidentBadge from './IncidentBadge'
import type { Member } from '@/types/EventLineups'
import styles from './Player.module.scss'

function Player({ player }: { player: Member }) {
  return (
    <div className={styles.player}>
      <div className={styles.info}>
        <RoundedImg width={50} height={50} className={styles.roundedImg}>
          <img
            src={`https://www.flashscore.com/res/image/data/${player.LPI}`}
            alt={player.PLAYER_FULL_NAME}
          />
          {player.INCIDENTS && (
            <IncidentBadge incidents={player.INCIDENTS} className={styles.incidentBadges} />
          )}
          {player.LPR && <Rating className={styles.rating} rating={Number(player.LPR)} />}
        </RoundedImg>
        <div className={styles.playerName}>
          {player.PLAYER_NUMBER}. {player.SHORT_NAME}
        </div>
      </div>
    </div>
  )
}

export default Player
