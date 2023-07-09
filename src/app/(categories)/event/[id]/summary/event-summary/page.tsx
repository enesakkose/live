import React from 'react'
import Incidents from '@/components/Event/Incidents'
import EndInfo from '@/components/Event/EndInfo'

type EventSummaryParamsType = {
  params: { id: number }
}

function Page({ params }: EventSummaryParamsType) {
  return (
    <>
    <EndInfo eventId={params.id}/>
    <Incidents eventId={params.id} />
    </>
  )
}

export default Page
