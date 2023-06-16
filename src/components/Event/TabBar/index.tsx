'use client'
import React from 'react'
import NavLink from '@/components/UI/NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './TabBar.module.scss'

function TabBar({ id }: { id: string }) {
  const segment = useSelectedLayoutSegment()
  const eventTabs = [
    {
      tabName: 'SUMMARY',
      href: `/event/${id}/summary/event-summary`,
      segment: 'event-summary',
    },
    {
      tabName: 'PLAYER STATISTICS',
      href: `/event/${id}/summary/player-statistics`,
      segment: 'player-statistics',
    },
    {
      tabName: 'STATS',
      href: `/event/${id}/summary/stats/0`,
      segment: 'stats',
    },
    {
      tabName: 'LINEUPS',
      href: `/event/${id}/summary/lineups`,
      segment: 'lineups',
    },
    {
      tabName: 'MATCH HISTORY',
      href: `/event/${id}/summary/match-history`,
      segment: 'match-history',
    },
    {
      tabName: 'H2H',
      href: `/event/${id}/summary/h2h/0`,
      segment: 'h2h',
    },
    {
      tabName: 'STANDINGS',
      href: `/event/${id}/standings`,
      segment: 'standings',
    },
  ]

  return (
    <div className={styles.tabBar}>
      {eventTabs.map((tab) => (
        <NavLink key={tab.tabName} href={tab.href} active={segment === tab.segment}>
          {tab.tabName}
        </NavLink>
      ))}
    </div>
  )
}

export default TabBar
