'use client'
import React from 'react'
import Header from '@/components/Event/Header'
import Hero from '@/components/Event/Hero'
import EventLoading from '@/app/(categories)/event/[id]/h2h/[h2h]/loading'
import StatsHeader from '@/components/Event/Stats/Header'
import { useGetEvent } from '@/services/sports'

type PropsType = {
  id: string
}

function EventContainer({ id }: PropsType) {
  const { data, isError, isLoading } = useGetEvent(id)

  if (!data) return <EventLoading />

  return (
    <div className='event'>
      <Header tournament={data.TOURNAMENT} />
      <Hero event={data.EVENT} />
      <StatsHeader id={id} />
    </div>
  )
}

export default EventContainer
