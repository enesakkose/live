'use client'
import React from 'react'
import { useGetEventSummary } from '@/services/sports'
import EventSummaryContainer from '@/containers/EventSummaryContainer'

type EventSummaryParamsType = {
  params: { id: string }
}

function Page({ params }: EventSummaryParamsType) {
  const { data } = useGetEventSummary(params.id)
  if (!data) return

  const summaryData = data.DATA.filter(
    (d) =>
      !(
        d.hasOwnProperty('TVT') ||
        d.hasOwnProperty('TVB') ||
        d.hasOwnProperty('II')
      )
  ) //this problem is caused by api

  return (
    <EventSummaryContainer
      eventId={params.id}
      eventSummary={summaryData}
      matchInfo={data.INFO}
    />
  )
}

export default Page
