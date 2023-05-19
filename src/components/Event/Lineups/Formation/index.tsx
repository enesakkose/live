import React from 'react'
import Section from '../../Incidents/Section'
import Player from './Player'
import Team from './Team'
import type { Data } from '@/types/EventLineups'
import styles from './Formation.module.scss'

function Formation({ lineups }: { lineups: Data }) {
  return (
    <Section title='Formation'>
      <div className={styles.pitchContainer}>
        <div className={styles.pitch}>
          {lineups.FORMATIONS.map(formation => (
            <Team key={formation.FORMATION_LINE} formation={formation}/>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Formation
