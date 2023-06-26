'use client'
import React from 'react'
import Hero from '@/components/Event/Hero'
import EventLoading from '@/app/(categories)/event/[id]/summary/h2h/[h2h]/loading'
import { useGetEvent } from '@/services/sports'

type PropsType = {
  id: string
}

function EventContainer({ id }: PropsType) {
  const { data, isError, isLoading } = useGetEvent(id)

  if (!data) return <EventLoading />

  return (
    <div className='event'>
      <Hero event={data.EVENT} />
    </div>
  )
}

export default EventContainer
