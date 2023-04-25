import React from 'react'
import H2HContainer from '@/containers/H2HContainer'
import { redirect } from 'next/navigation'

type H2HEventsParamsType = {
  params: {
    id: string
  }
}

function Page({ params }: H2HEventsParamsType) {
  return redirect(`/event/${params.id}/h2h/0`)
}

export default Page
