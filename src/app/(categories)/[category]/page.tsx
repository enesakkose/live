import React from 'react'
import getQueryClient from '@/utils/helpers/getQueryClient'
import HydrateClient from '@/components/HydrateClient'
import dayjs from 'dayjs'
import TournamentContent from '@/components/Events/Content'
import Timezone from '@/components/Events/Timezone'
import { dehydrate } from '@tanstack/query-core'
import { getEventsV2 } from '@/services/sportsv2'

type CategoryRouteType = {
  params: { category: string }
}

async function Page({ params }: CategoryRouteType) {
  const today = dayjs().format('YYYY-MM-DD')
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['eventsV2', params.category, 'all', today], () => getEventsV2(params.category, today))
  const dehydratedState = dehydrate(queryClient)

  return (
    <>
    <Timezone />
    <HydrateClient state={dehydratedState}>
      <TournamentContent category={params.category} />
    </HydrateClient>
    </>
  )
}

export default Page
