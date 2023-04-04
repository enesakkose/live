import React from 'react'
import Header from '@/app/(categories)/event/[id]/components/Header'
import Hero from '@/app/(categories)/event/[id]/components/Hero'

type EventsParamsType = {
  params: {
    id: string
  }
}


function Page({ params }: EventsParamsType) {
  return (
    <div>
      <Header/>
      <Hero/>
      Page {params.id}
    </div>
  )
}

export default Page