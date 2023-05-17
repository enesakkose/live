import React from 'react'
import EventContainer from '@/containers/EventContainer'

type EventsParamsType = {
  children: React.ReactNode
  params: { id: string }
}

function Layout({ children, params }: EventsParamsType) {
  return (
    <>
      <EventContainer id={params.id} />
      {children}
    </>
  )
}

export default Layout
