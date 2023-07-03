import React from 'react'
import Incidents from '@/components/Event/Incidents'

type EventSummaryParamsType = {
  params: { id: number }
}

function Page({ params }: EventSummaryParamsType) {
  return <Incidents eventId={params.id} />
}

export default Page
