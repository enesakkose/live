import React from 'react'
import Section from '../../Incidents/Section'
import type { Info } from '@/types/Summary.types'
import styles from './MatchInformation.module.scss'

function MatchInformation({ info }: {info: Info}) {
  return (
    <Section title='Match Information'>
      {Object.keys(info)
        .filter((key) => key !== 'COUNTRY_FLAG')
        .map((key) => (
          <div className={styles.info} key={key}>
            <span className={styles.key}>{key}:</span>
            <span className={styles.value}>{info[key]}</span>
          </div>
      ))}
    </Section>
  )
}

export default MatchInformation
