import React from 'react'
import Scoreboard from '@/components/Scoreboard'
import EventContainer from '@/containers/EventContainer'

type EventsParamsType = {
  children: React.ReactNode
  params: { id: number }
}

function Layout({ children, params }: EventsParamsType) {
  return (
    <>
      <Scoreboard eventId={params.id} />
      {children}
    </>
  )
}

export default Layout
