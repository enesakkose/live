'use client'
import React from 'react'
import { useGetEventStats } from '@/services/sports'
import Section from '@/components/Event/Incidents/Section'
import Button from '@/components/Button'
import EventStatsContainer from '@/containers/EventStatsContainer'
import NavLink from '@/components/Button/NavLink'
import styles from './layout.module.scss'

type PagePropsTypes = {
  params: { id: string; stats: string }
  children: React.ReactNode
}

function Page({ params }: PagePropsTypes) {
  const { data = [] } = useGetEventStats(params.id)
  console.log(params)
  const Tabs = () => {
    return (
      <div className={styles.title}>
        {data.map((stageName, index) => (
          <NavLink
            size='xsmall'
            href={`/event/${params.id}/summary/stats/${index}`}
            active={Number(params.stats) === index}
            variant='tertiary'
            key={stageName.STAGE_NAME}
          >
            {stageName.STAGE_NAME}
          </NavLink>
        ))}
      </div>
    )
  }

  return (
    <Section title={<Tabs />}>
      <EventStatsContainer eventStats={data[Number(params.stats)]} />
    </Section>
  )
}

export default Page
