'use client'
import React from 'react'
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
    </div>
  )
}

export default EventContainer
