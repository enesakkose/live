"use client"
import React from 'react'
import { useGetEventSummary } from '@/services/sports'
import EventSummaryContainer from '@/containers/EventSummaryContainer'

type EventSummaryParamsType = {
  params: { id: string }
}

function Page({ params }: EventSummaryParamsType) {
  const { data } = useGetEventSummary(params.id)
  if(!data) return
  return (
    <>
      <EventSummaryContainer eventSummary={data.DATA} matchInfo={data.INFO}/>
    </>
  )
}

export default Page