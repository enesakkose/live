import React from 'react'
import Incidents from '@/components/Event/Incidents'
import EndInfo from '@/components/Event/EndInfo'
import Venue from '@/components/Event/Venue'
import Votes from '@/components/Event/Votes'

type EventSummaryParamsType = {
  params: { id: number }
}

function Page({ params }: EventSummaryParamsType) {
  return (
    <>
      <EndInfo eventId={params.id} />
      <Incidents eventId={params.id} />
      <Votes eventId={params.id} />
      <Venue eventId={params.id} />
    </>
  )
}

export default Page
