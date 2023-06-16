'use client'
import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import Section from '@/components/Event/Incidents/Section'
import NavLink from '@/components/UI/NavLink'
import { convertPercentage, valueWithoutPercentage } from '@/utils/helpers'
import { useGetEventStats } from '@/services/sports'
import type { Data } from '@/types/EventStats'
import styles from './EventStatsContainer.module.scss'

type IncidenPropsTypes = {
  homeValue: string
  awayValue: string
  incidentName: string
}

type StatsBarPropsTypes = {
  percentage: number
  variant: 'homePercentage' | 'awayPercentage'
  ahead: boolean
}

type EventStatsContainerPropsTypes = {
  eventId: string
  statsTab: number
}

export const Incident = ({ homeValue, awayValue, incidentName }: IncidenPropsTypes) => {
  const { homePercentage, awayPercentage } = convertPercentage(
    valueWithoutPercentage(homeValue),
    valueWithoutPercentage(awayValue)
  )

  const StatsBar = ({ percentage, variant, ahead }: StatsBarPropsTypes) => {
    return (
      <div className={clsx(styles.bar)}>
        <div
          className={clsx(styles.percentage, styles[variant], ahead ? styles.ahead : '')}
          style={{ '--width': `${percentage}%` } as CSSProperties}
        />
      </div>
    )
  }

  return (
    <li className={styles.incident}>
      <div className={styles.incidentUnit}>
        <span>{homeValue}</span>
        <h4>{incidentName}</h4>
        <span>{awayValue}</span>
      </div>
      <div className={styles.incidentBars}>
        <StatsBar
          percentage={homePercentage}
          variant='homePercentage'
          ahead={homePercentage > awayPercentage}
        />
        <StatsBar
          percentage={awayPercentage}
          variant='awayPercentage'
          ahead={awayPercentage > homePercentage}
        />
      </div>
    </li>
  )
}

function EventStatsContainer({ eventId, statsTab }: EventStatsContainerPropsTypes) {
  const { data = [], isError } = useGetEventStats(eventId)
  console.log(isError)
  const Tabs = () => {
    return (
      <div className={styles.tabs}>
        {data.map((stageName, index) => (
          <NavLink
            href={`/event/${eventId}/summary/stats/${index}`}
            active={Number(statsTab) === index}
            variant='secondary'
            key={stageName.STAGE_NAME}
          >
            {stageName.STAGE_NAME}
          </NavLink>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.eventStatsContainer}>
      <Tabs />
      {data[statsTab].GROUPS.map((stats) => (
        <Section key={stats.GROUP_LABEL} title={stats.GROUP_LABEL}>
          <ul className={styles.statsList}>
            {stats.ITEMS.map((incident) => (
              <Incident
                key={incident.INCIDENT_NAME}
                homeValue={incident.VALUE_HOME}
                awayValue={incident.VALUE_AWAY}
                incidentName={incident.INCIDENT_NAME}
              />
            ))}
          </ul>
        </Section>
      ))}
    </div>
  )
}

export default EventStatsContainer
