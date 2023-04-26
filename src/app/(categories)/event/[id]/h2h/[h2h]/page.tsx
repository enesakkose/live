
import React from 'react'
import H2HContainer from '@/containers/H2HContainer'
import NavLink from '@/components/Button/NavLink'
import Loading from '@/components/Event/Hero/loading'

type H2HEventsParamsType = {
  params: {
    id: string,
    h2h: string
  }
}

function Page({params}: H2HEventsParamsType) {  
  return (
    <H2HContainer h2h={Number(params.h2h)} eventId={params.id}/>
  )
}

export default Page