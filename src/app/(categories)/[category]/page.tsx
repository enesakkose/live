import React from 'react'
import TournamentContent from '@/components/Events/Content'

type CategoryRouteType = {
  params: {
    category: string
  }
}

type SportNameType = {
  [key: string]: number
}

const SportName: SportNameType = {
  football: 1,
  tennis: 2,
  basketball: 3,
}

function Page({ params }: CategoryRouteType) {
  const id = SportName[params.category]

  return <TournamentContent id={id} />
}

export default Page
