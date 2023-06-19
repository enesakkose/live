import { useQuery } from '@tanstack/react-query'
import { getDateV2 } from '@/utils/helpers/getFormatTime'
import { type Events } from '@/types/Events'
import { type Search } from '@/types/SearchQuery'
import { TIMEZONE, type TimezoneStatusType } from '@/context/TimezoneContext'

export const getEventsV2 = async(category: string, date: number) => {
  const res = await (fetch(`/api/getEvents?category=${category}&date=${getDateV2(date)}`))
  const data: Events = await res.json()
  const currentDateEvents = data.events.filter(event => getDateV2(event.startTimestamp) === getDateV2(date))
  return currentDateEvents
}

export const getLiveEventsV2 = async(category: string) => {
  const res = await (fetch(`/api/getLiveEvents?category=${category}`))
  const data: Events = await res.json()
  return data.events
}

export const getSearchResult = async(query: string) => {
  const res = await (fetch(`/api/getSearchData?q=${query}`))
  const data: Search[] = await res.json()
  return data
}

export const useGetEvents = (category: string, timezoneStatus: TimezoneStatusType, date: number) => {
  return useQuery(['eventsV2', category, timezoneStatus, date], 
    () => timezoneStatus === TIMEZONE.LIVE ? getLiveEventsV2(category) : getEventsV2(category, date))
}

export const useGetSearchResult = (query: string) => {
  return useQuery([query], () => getSearchResult(query))
}