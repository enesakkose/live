"use client"
import React from 'react'
import Row from './Row'
import Loading from './loading'
import { useGetIncidents } from '@/services/sportsv2'
import styles from './Incidents.module.scss'

type IncidentsPropsType = { eventId: number }

function Incidents({ eventId }: IncidentsPropsType) {
  const { data: incidents = [], isLoading } = useGetIncidents(eventId)

  if(isLoading) return <Loading />

  return (
    <div className={styles.incidents}>
      {incidents.map((incident, index) => (
        <Row incident={incident} key={index}/>
      ))}
    </div>
  )
}

export default Incidents