import React from 'react'
import clsx from 'clsx'
import ScrollContainer from '@/containers/ScrollContainer'
import Section from '@/components/Event/Incidents/Section'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { useGetEventStats } from '@/services/sportsv2'
import styles from './RowTooltipContent.module.scss'

type RowTooltipContentPropsType = { eventId: number }

function RowTooltipContent({ eventId }: RowTooltipContentPropsType) {
  const { data: eventStats = [], isLoading, isError } = useGetEventStats(eventId)
  
  if(isError) return <Error error='Match not started or stats not found.' />
  if(isLoading) return <Loading/>

  return (
    <ScrollContainer>
      <div className={styles.statsGroups}>
        {eventStats[0].groups.map((stats) => (
          <Section key={stats.groupName} title={stats.groupName}>
            <ul className={styles.statsList}>
              {stats.statisticsItems.map((item) => (
                <li key={item.name} className={styles.stats}>
                  <span className={clsx(styles.homeStats, item.compareCode === 1 ? styles.ahead : '')}>
                    {item.home}
                  </span>
                  <h5 className={styles.statsType}>{item.name}</h5>
                  <span className={clsx(styles.awayStats, item.compareCode === 2 ? styles.ahead : '')}>
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

export default RowTooltipContent
