import React from 'react'
import TournamentContent from '@/components/Events/Content'

type CategoryRouteType = {
  params: {
    category: string
  }
}

function Page({ params }: CategoryRouteType) {

  return <TournamentContent category={params.category} />
}

export default Page
