import React from 'react'
import Skeleton from '@/components/Skeleton'
import HeroLoading from '@/components/Event/Hero/loading'

function EventLoading() {
  return (
    <div>
      <Skeleton height={46} />
      <HeroLoading />
    </div>
  )
}

export default EventLoading
