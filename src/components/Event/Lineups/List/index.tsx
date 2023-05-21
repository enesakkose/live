import React from 'react'
import clsx from 'clsx'
import Section from '../../Incidents/Section'
import RoundedImg from '@/components/RoundedImg'
import type { Data } from '@/types/EventLineups'
import styles from './List.module.scss'

function List({ list }: { list: Data }) {
  console.log(list)
  return (
    <Section title={list.FORMATION_NAME}>
      <div className={styles.formationList}>
        {list.FORMATIONS.map((formation) => (
          <ul key={formation.FORMATION_LINE} className={styles.playerList}>
            {formation.MEMBERS.map((player) => (
              <li
                key={player.PLAYER_ID}
                className={clsx(
                  styles.playerInfo,
                  formation.FORMATION_LINE === 2 ? styles.awayPlayerInfo : ''
                )}
              >
                <span>{player.PLAYER_NUMBER}</span>
                {player.LPI && (
                  <RoundedImg width={30} height={30}>
                    <img
                      src={`https://www.flashscore.com/res/image/data/${player.LPI}`}
                      alt={player.PLAYER_FULL_NAME}
                    />
                  </RoundedImg>
                )}
                <span>{player.PLAYER_FULL_NAME}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  )
}

export default List
