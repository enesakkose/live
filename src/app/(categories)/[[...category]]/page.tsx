import React from 'react'
import getQueryClient from '@/utils/helpers/getQueryClient'
import HydrateClient from '@/components/HydrateClient'
import dayjs from 'dayjs'
import { dehydrate } from "@tanstack/query-core"
import { getEventsV2 } from '@/services/sportsv2'
import TournamentContent from '@/components/Events/Content'

type CategoryRouteType = {
  params: { category: string }
}

async function Page({ params }: CategoryRouteType) {
  const today = dayjs().unix()
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['eventsV2'], () => getEventsV2(params.category, today))
  const dehydratedState = dehydrate(queryClient)
  
  return (
    <HydrateClient state={dehydratedState}>
      <TournamentContent category={params.category} />
    </HydrateClient>
  )
}

export default Page
