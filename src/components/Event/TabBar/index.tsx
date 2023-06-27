'use client'
import React from 'react'
import NavLink from '@/components/UI/NavLink'
import MouseFollower from '@/components/MouseFollower'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './TabBar.module.scss'

function TabBar({ eventId }: { eventId: string }) {
  const segment = useSelectedLayoutSegment()
  const eventTabs = [
    {
      tabName: 'Summary',
      href: `/event/${eventId}/summary/event-summary`,
      segment: 'event-summary',
    },
    {
      tabName: 'Player Statistics',
      href: `/event/${eventId}/summary/player-statistics`,
      segment: 'player-statistics',
    },
    {
      tabName: 'Stats',
      href: `/event/${eventId}/summary/stats`,
      segment: 'stats',
    },
    {
      tabName: 'Lineups',
      href: `/event/${eventId}/summary/lineups`,
      segment: 'lineups',
    },
    {
      tabName: 'Match History',
      href: `/event/${eventId}/summary/match-history`,
      segment: 'match-history',
    },
    {
      tabName: 'H2H',
      href: `/event/${eventId}/summary/h2h/0`,
      segment: 'h2h',
    },
    {
      tabName: 'Standings',
      href: `/event/${eventId}/standings`,
      segment: 'standings',
    },
  ]

  return (
    <nav className={styles.tabBar}>
      {eventTabs.map((tab) => (
        <NavLink variant='primary' key={tab.tabName} href={tab.href} active={segment === tab.segment}>
          {tab.tabName.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  )
}

export default TabBar
