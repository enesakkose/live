import { type Events } from '@/types/Events'
import { useQuery } from '@tanstack/react-query'
import { getDateV2 } from '@/utils/helpers/getFormatTime'

const BASE_URL = 'https://api.sofascore.com/api/v1/sport'
const OPTIONS: any = {
  headers: {
    accept: '*/*',
    'accept-language': 'tr,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
    'cache-control': 'max-age=0',
    'if-none-match': 'W/"563dba55bd"',
    'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
  },
  referrer: 'https://www.sofascore.com/',
  referrerPolicy: 'strict-origin-when-cross-origin',
  body: null,
  method: 'GET',
  mode: 'cors',
  credentials: 'omit',
}

const getEvents = async (category: string, date: number) => {
  const resp = await fetch(`${BASE_URL}/${category}/scheduled-events/${getDateV2(date)}`,{
    headers: {
      accept: '*/*',
      'accept-language': 'tr,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
      'cache-control': 'max-age=0',
      'if-none-match': 'W/"563dba55bd"',
      'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrer: 'https://www.sofascore.com/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  })
  const data: Events = await resp.json()
  return data.events
}

const getLiveEvents = async (category: string) => {
  const resp = await fetch(`${BASE_URL}/${category}/events/live`, {
    headers: {
      accept: '*/*',
      'accept-language': 'tr,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
      'cache-control': 'max-age=0',
      'if-none-match': 'W/"563dba55bd"',
      'sec-ch-ua': '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrer: 'https://www.sofascore.com/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  })
  const data: Events = await resp.json()
  return data.events
}

export const a = async() => {
  const res = await (fetch('/api/hello'))
  const data: Events = await res.json()
  return data.events
}

export const getEventsV2 = async(category: string, date: number) => {
  const res = await (fetch(`/api/getEvents?category=${category}&date=${getDateV2(date)}`))
  const data: Events = await res.json()
  return data.events
}

export const getLiveEventsV2 = async(category: string) => {
  const res = await (fetch(`/api/getLiveEvents?category=${category}`))
  const data: Events = await res.json()
  return data.events
}

export const useGetEventsV2 = (category: string, timezone: 'live' | 'all', date: number) => {
  return useQuery(['eventss', category, timezone], () =>
    timezone === 'live' ? getLiveEvents(category) : getEvents(category, date),  { /*refetchInterval: 30000*/ }
  )
}


export const useGetA = () => {
  return useQuery(['assa'], () => a())
}

export const useGetEvents = (category: string, timezone: 'live' | 'all', date: number) => {
  return useQuery(['eventsV2', category, timezone], () => timezone === 'live' ? getLiveEventsV2(category) : getEventsV2(category, date))
}