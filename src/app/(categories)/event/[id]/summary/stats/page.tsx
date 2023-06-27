import React from 'react'
import Stats from '@/components/Event/Stats'

type PagePropsTypes = {
  params: { id: number; stats: string }
}

function Page({ params }: PagePropsTypes) {
  return (
    <Stats eventId={params.id} periodTabs={true} />
  )
}

export default Page
