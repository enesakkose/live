import React from 'react'
import Header from '@/app/(categories)/event/[id]/components/Header'

type EventsParamsType = {
  params: {
    id: string
  }
}


function Page({ params }: EventsParamsType) {
  return (
    <div>
      <Header/>
      Page {params.id}</div>
  )
}

export default Page