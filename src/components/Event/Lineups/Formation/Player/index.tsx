import React from 'react'
import RoundedImg from '@/components/RoundedImg'
import Rating from './Rating'
import IncidentBadge from './IncidentBadge'
import styles from './Player.module.scss'

const player = {
  ROW_ID: 8,
  PLAYER_ID: 'lUg03qcR',
  PLAYER_FULL_NAME: 'Silva B.',
  LPG: 'men',
  LPI: 'Ec2A4yEa-4CIh5uRh.png',
  LPR: '6.1',
  SHORT_NAME: 'Silva Mutasami',
  PLAYER_NUMBER: 20,
  PLAYER_COUNTRY: 155,
  PLAYER_POSITION_ID: 1,
  PLAYER_TYPE: 1,
  INCIDENTS: [
    3,
    3,
    3,
    3,
    3, //gol
    6, //subs
    1, //yellow
    2, //red
  ],
  PLAYER_POSITION: 7,
}

function Player() {
  return (
    <div className={styles.player}>
      {player.INCIDENTS && <IncidentBadge incidents={player.INCIDENTS} />}
      <div className={styles.info}>
        <RoundedImg width={70} height={70}>
          <img
            src={`https://www.flashscore.com/res/image/data/${player.LPI}`}
            alt={player.PLAYER_FULL_NAME}
          />
        </RoundedImg>
        <div className={styles.playerName}>
          {player.PLAYER_NUMBER}. {player.SHORT_NAME}
        </div>
      </div>
      {player.LPR && (
        <Rating className={styles.rating} rating={Number(player.LPR)} />
      )}

    </div>
  )
}

export default Player
