import React from 'react'
import Timezone from '@/components/Timezone'
import TournamentContent from '@/components/Events/Content'

//import { SportName } from '@/types'

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

  return (
    <>
      <Timezone />
      <TournamentContent id={id} />
    </>
  )
}

export default Page
