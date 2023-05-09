import React from 'react'
import EventContainer from '@/containers/EventContainer'
import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation'

type EventsParamsType = {
  params: {
    id: string
  }
}

/*async function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}*/

function Page({ params }: EventsParamsType) {
  //await delay(4000)
  //console.log(params)
  if (params.id === 'YXKg7xSn8') {
    notFound()
  }

  /*if(params.id === 'YXKg7xSn') {
    throw new Error('error')
  } */
  return redirect(`event/${params.id}/summary/event-summary`)
}

export default Page
