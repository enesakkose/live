"use client"
import React from 'react'
import Section from '@/components/Event/Incidents/Section'
import { useGetBasketPlayerStats } from '@/services/sports'
import styles from './PlayerStats.module.scss'

const LABELS = ['PLAYER', 'POINT', 'REBOUND', 'ASSIST']

function PlayerStats({ eventId }: { eventId: string}) {
  const { data: playerStats } = useGetBasketPlayerStats(eventId)
  //if(!playerStats) return

  return (
    <Section title='Player Statistics'>
      <div className={styles.playerStatsTable}>
        <div className={styles.labels}>
          {LABELS.map((label) => (
            <h5 key={label}>{label}</h5>
          ))}
        </div>
        <div className={styles.playerLists}>
          {playerStats?.BLOCKS[0].ITEMS.map((item, index) => (
            <div key={index} className={styles.player}>
              {item.filter((i) => i.ID !== 1).map((stat) => (
                <span key={stat.ID}>{stat.VALUE}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default PlayerStats
// idyi al hangi idse o componenti bas idye göre tab barları ayarla