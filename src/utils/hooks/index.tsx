import { useQuery } from '@tanstack/react-query'
import type { Data } from '@/types'

const BASE_URL = 'https://flashscore.p.rapidapi.com'
const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
    'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com',
  },
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
    'X-RapidAPI-Host': 'flashscore.p.rapidapi.com',
  },
}

export const getEvents = async (id: number): Promise<Data[]> => {
  const response = await fetch(
    `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`,
    options
  )
  const data = await response.json()
  return data?.DATA || []
}
