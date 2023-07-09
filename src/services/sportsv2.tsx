import { useQuery } from '@tanstack/react-query'
import { getDateV2 } from '@/utils/helpers/getFormatTime'
import { type Events, type Event } from '@/types/Events'
import { type SearchResult } from '@/types/SearchQuery'
import { type Statistics } from '@/types/Statistics'
import { type Incidents } from '@/types/EventIncidents'
import { type Player } from '@/types/Player'
import { type BestPlayer } from '@/types/EventBestPlayer'
import { type Highlights } from '@/types/EventHighlights'
import { TIMEZONE, type TimezoneStatusType } from '@/context/TimezoneContext'

export const getEventsV2 = async (category: string, date: string) => {
  const res = await fetch(`/api/getEvents?category=${category}&date=${date}`)
  const data: Events = await res.json()
  const currentDateEvents = data.events.filter((event) => getDateV2(event.startTimestamp) === date)
  const liveEventsFromPastDays = data.events.filter(
    (event) => event.status.type === 'inprogress' && getDateV2(event.startTimestamp) !== date
  )
  // DESCRIPTION: liveEventsFromPastDays CREATED FOR IF THERE LIVE EVENTS STARTING BEFORE 00:00 AT PREVIOUS DAY

  return [...liveEventsFromPastDays, ...currentDateEvents]
}

export const getLiveEventsV2 = async (category: string) => {
  const res = await fetch(`/api/getLiveEvents?category=${category}`)
  const data: Events = await res.json()
  return data.events
}

export const getSearchResult = async (query: string) => {
  const res = await fetch(`/api/getSearchData?q=${query}`)
  const data: SearchResult = await res.json()
  return data.results
}

export const getEventStats = async(eventId: number) => {
  const res = await fetch(`/api/statistics?eventId=${eventId}`)
  const data: Statistics = await res.json()
  return data.statistics
}

export const getEvent = async(eventId: number) => {
  const res = await fetch(`/api/event?eventId=${eventId}`)
  const { event }: { event: Event } = await res.json()
  return event
}

export const getEventIncidents = async(eventId: number) => {
  const res = await fetch(`/api/incidents?eventId=${eventId}`)
  const incidents: Incidents = await res.json()
  return incidents.incidents
}

export const getPlayerData = async(playerId: number) => {
  const res = await fetch(`/api/player?playerId=${playerId}`)
  const playerData: Player = await res.json()
  return playerData.player
}

export const getBestPlayers = async(eventId: number) => {
  const res = await fetch(`/api/bestPlayers?eventId=${eventId}`)
  const bestPlayers: BestPlayer = await res.json()
  return bestPlayers
}

export const getEventHighlights = async(eventId: number) => {
  const res = await fetch(`/api/highlights?eventId=${eventId}`)
  const highlights: Highlights = await res.json()
  return highlights.highlights
}

export const useGetEvents = (
  category: string,
  timezoneStatus: TimezoneStatusType,
  date: string
) => {
  return useQuery(['eventsV2', category, timezoneStatus, date], () =>
    timezoneStatus === TIMEZONE.LIVE ? getLiveEventsV2(category) : getEventsV2(category, date)
  )
}

export const useGetSearchResult = (query: string) => {
  return useQuery([query, 0], () => getSearchResult(query))
}

export const useGetEventStats = (eventId: number) => {
  return useQuery(['statistics', eventId], () => getEventStats(eventId))
}

export const useGetEvent = (eventId: number) => {
  return useQuery(['event', eventId], () => getEvent(eventId))
}

export const useGetIncidents = (eventId: number) => {
  return useQuery(['incidents', eventId], () => getEventIncidents(eventId))
}

export const useGetPlayerData = (playerId: number) => {
  return useQuery(['player', playerId], () => getPlayerData(playerId))
}

export const useGetBestPlayers = (eventId: number) => {
  return useQuery(['bestPlayers', eventId], () => getBestPlayers(eventId))
}

export const useGetEventHighlights = (eventId: number) => {
  return useQuery(['highlights', eventId], () => getEventHighlights(eventId))
}