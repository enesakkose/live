import React from 'react'
import Incidents from '@/components/Event/Incidents'
import EndInfo from '@/components/Event/EndInfo'
import Venue from '@/components/Event/Venue'

type EventSummaryParamsType = {
  params: { id: number }
}

function Page({ params }: EventSummaryParamsType) {
  return (
    <>
    <EndInfo eventId={params.id}/>
    <Incidents eventId={params.id} />
    <Venue eventId={params.id}/>
    </>
  )
}

export default Page
