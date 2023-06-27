'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import ScrollContainer from '@/containers/ScrollContainer'
import Section from '@/components/Event/Incidents/Section'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import Button from '@/components/UI/Button'
import { useGetEventStats } from '@/services/sportsv2'
import styles from './Stats.module.scss'

type StatsPropsType = { eventId: number, periodTabs: boolean }

function Stats({ eventId, periodTabs = true }: StatsPropsType) {
  const { data: eventStats = [], isLoading, isError } = useGetEventStats(eventId)
  const [tabIndex, setTabIndex] = useState(0)

  if (isError) return <Error error='Match not started or stats not found.' />
  if (isLoading) return <Loading />

  const PeriodTabs = () => {
    return (
      <div className={styles.periodTabs}>
        {eventStats.map((period, index) => (
          <Button
            active={tabIndex === index}
            key={period.period}
            onClick={() => setTabIndex(index)}
            variant='primary'
          >
            {period.period}
          </Button>
        ))}
      </div>
    )
  }

  return (
    <ScrollContainer>
      {periodTabs && <PeriodTabs />}
      <div className={styles.statsGroups}>
        {eventStats[tabIndex].groups.map((stats) => (
          <Section key={stats.groupName} title={stats.groupName}>
            <ul className={styles.statsList}>
              {stats.statisticsItems.map((item) => (
                <li key={item.name} className={styles.stats}>
                  <span
                    className={clsx(styles.homeStats, item.compareCode === 1 ? styles.ahead : '')}
                  >
                    {item.home}
                  </span>
                  <h5 className={styles.statsType}>{item.name}</h5>
                  <span
                    className={clsx(styles.awayStats, item.compareCode === 2 ? styles.ahead : '')}
                  >
                    {item.away}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </ScrollContainer>
  )
}

export default Stats
