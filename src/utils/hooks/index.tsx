import type { Data } from '@/types'

const BASE_URL = 'https://flashlive-sports.p.rapidapi.com'

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
    'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com',
  },
}

export const getEvents = async (id: number): Promise<Data[]> => {
  const response = await fetch(
    `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`,
    OPTIONS
  )
  const data = await response.json()
  return data?.DATA || []
}


export const getEvent = async (id: number, date?: number): Promise<Data[]> => {
  const live = `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`
  const all = `${BASE_URL}/v1/events/list?sport_id=${id}&timezone=-4&indent_days=${date}&locale=en_INT`

  const response = await fetch(`${BASE_URL}/v1/events/list?sport_id=${id}&timezone=-4&indent_days=${date}&locale=en_INT`,
    OPTIONS
  )
  const data = await response.json()
  return data?.DATA || []
}
