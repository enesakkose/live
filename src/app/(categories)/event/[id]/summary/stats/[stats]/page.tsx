import React from 'react'
import EventStatsContainer from '@/containers/EventStatsContainer'
import styles from './layout.module.scss'

type PagePropsTypes = {
  params: { id: string; stats: string }
}

function Page({ params }: PagePropsTypes) {
  return (
    <EventStatsContainer statsTab={Number(params.stats)} eventId={params.id} />
  )
}

export default Page
