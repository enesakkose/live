'use client'
import React from 'react'
import Header from '@/components/Event/Header'
import Hero from '@/components/Event/Hero'
import EventLoading from '@/app/(categories)/event/[id]/loading'
import { useGetEvent } from '@/services/sports'

type PropsType = {
  id: string
}

function EventContainer({ id }: PropsType) {
  const { data, isError, isLoading } = useGetEvent(id)

  if(!data) return <EventLoading/>
  console.log(data)
  return (
    <div className='event'>
      <Header tournament={data.TOURNAMENT}/>
      <Hero event={data.EVENT}/>
      EventContainer {id}
    </div>
  )
}

export default EventContainer