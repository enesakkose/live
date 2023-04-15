import type { Data, Category } from '@/types'
import { useQuery } from '@tanstack/react-query'

const BASE_URL = 'https://flashlive-sports.p.rapidapi.com'

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
    'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com',
  },
}

/*const getEvents = async (id: number): Promise<Data[]> => {
  const response = await fetch(
    `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`,
    OPTIONS
  )
  const data: Category = await response.json()
  return data.DATA
}*/

const getEvents = async (id: number, time?: number): Promise<Data[]> => {
  const resp = await fetch(
    `${BASE_URL}/v1/events/list?sport_id=${id}&timezone=-4&indent_days=0&locale=en_INT`,
    { ...OPTIONS, cache: 'no-store' }
  )

  const data: Category = await resp.json()
  return data.DATA
}

const getLiveEvents = async (id: number): Promise<Data[]> => {
  const resp = await fetch(
    `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`,
    { ...OPTIONS, cache: 'no-store' }
  )

  const data: Category = await resp.json()
  return data.DATA
}

export const useGetEvents = (id: number = 1, timezone: 'live' | 'all') => {
  return useQuery(['events', id, timezone], () =>
    timezone === 'live' ? getLiveEvents(id) : getEvents(id)
  )
}
