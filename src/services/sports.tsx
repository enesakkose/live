import type {  Category, Event } from '@/types'
import { Data } from '@/types/event.types'
import { H2H } from '@/types/H2HTypes'
import { useQuery } from '@tanstack/react-query'

const BASE_URL = 'https://flashscore.p.rapidapi.com'

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
    'X-RapidAPI-Host': 'flashscore.p.rapidapi.com',
  },
}
//flashlive-sports.p.rapidapi.com
//https://flashlive-sports.p.rapidapi.com
//https://flashscore.p.rapidapi.com
/*const getEvents = async (id: number): Promise<Data[]> => {
  const response = await fetch(
    `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`,
    OPTIONS
  )
  const data: Category = await response.json()
  return data.DATA
}*/

const getEvent = async(id: string) => {
  const resp = await fetch(`${BASE_URL}/v1/events/data?locale=en_INT&event_id=${id}`, { ...OPTIONS, cache: 'no-store' })
  const { DATA }: { DATA: Data } = await resp.json()
  return DATA
}

const getEvents = async (id: number, time?: number) => {
  const resp = await fetch(
    `${BASE_URL}/v1/events/list?sport_id=${id}&timezone=-4&indent_days=0&locale=en_INT`,
    { ...OPTIONS, cache: 'no-store' }
  )
  const data: Category = await resp.json()
  return data.DATA
}

const getLiveEvents = async (id: number) => {
  const resp = await fetch(
    `${BASE_URL}/v1/events/live-list?locale=en_INT&timezone=-4&sport_id=${id}`,
    { ...OPTIONS, cache: 'no-store' }
  )

  const data: Category = await resp.json()
  return data.DATA
}

const getH2HEvents = async(id: string) => {
  const resp = await fetch(`${BASE_URL}/v1/events/h2h?event_id=${id}&locale=en_INT`, { ...OPTIONS })

  const data: H2H = await resp.json()
  return data.DATA
}

export const useGetEvents = (id: number = 1, timezone: 'live' | 'all') => {
  return useQuery(['events', id, timezone], () =>
    timezone === 'live' ? getLiveEvents(id) : getEvents(id)
  )
}

export const useGetEvent = (id: string) => {
  return useQuery(['event', id], () => getEvent(id))
}

export const useGetH2HEvents = (id: string) => {
  return useQuery(['h2hEvents', id], () => getH2HEvents(id))
}
