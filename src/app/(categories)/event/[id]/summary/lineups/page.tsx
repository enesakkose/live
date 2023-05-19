import React from 'react'
import EventLineupsContainer from '@/containers/EventLineupsContainer'

type LineupsParamsTypes = {
  params: { id: string }
}

function Page({ params }: LineupsParamsTypes) {
  return <EventLineupsContainer eventId={params.id} />
}

export default Page
