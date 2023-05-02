import React from 'react'
import TabBtns from '@/components/TabBtns'

type SummaryParamsType = {
  params: { id: string }
  children: React.ReactNode
}

function Layout({ params, children }: SummaryParamsType) {
  const summaryTabs = [
    {
      tabName: 'Summary',
      href: `/event/${params.id}/summary/event-summary`,
      segment: 'event-summary',
    },
    {
      tabName: 'Player Statistics',
      href: `/event/${params.id}/summary/player-statistics`,
      segment: 'player-statistics',
    },
    {
      tabName: 'Stats',
      href: `/event/${params.id}/summary/stats`,
      segment: 'stats',
    },
    {
      tabName: 'Lineups',
      href: `/event/${params.id}/summary/lineups`,
      segment: 'lineups',
    },
    {
      tabName: 'Match History',
      href: `/event/${params.id}/summary/match-history`,
      segment: 'match-history',
    },
  ]

  return (
    <>
      <TabBtns tabBtns={summaryTabs} />
      {children}
    </>
  )
}

export default Layout
