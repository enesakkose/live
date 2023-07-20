'use client'
import React from 'react'
import Row from './Row'
import Loading from './loading'
import EventRow from '@/components/Events/Row'
import { useGetIncidents } from '@/services/sportsv2'
import { useGetEvent } from '@/services/sportsv2'
import { CATEGORY_BY_ID } from '@/types/Events'
import styles from './Incidents.module.scss'

type IncidentsPropsType = { eventId: number }

function Incidents({ eventId }: IncidentsPropsType) {
  const { data: incidents = [], isLoading } = useGetIncidents(eventId)
  const { data: event, isLoading: isLoadingEvent } = useGetEvent(eventId)

  if (isLoading || isLoadingEvent || !event) return <Loading />
  const CATEGORY_FOOTBALL = event.tournament.category.sport.id === CATEGORY_BY_ID.FOOTBALL

  return (
    <div className={styles.incidents}>
      {!CATEGORY_FOOTBALL ? (
        <EventRow event={event} className={styles.eventRow} />
      ) : null}
      {incidents.map((incident, index) => (
        <Row incident={incident} key={index} />
      ))}
    </div>
  )
}

export default Incidents
