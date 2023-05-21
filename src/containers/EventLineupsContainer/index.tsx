"use client"
import React from 'react'
import Formation from '@/components/Event/Lineups/Formation'
import List from '@/components/Event/Lineups/List'
import { useGetEventLineups } from '@/services/sports'
import styles from './EventLineupsContainer.module.scss'

function EventLineupsContainer({ eventId }: { eventId: string }) {
  const { data: lineups = [] } = useGetEventLineups(eventId)
  console.log(lineups)
  return (
    <div className={styles.eventLineupsContainer}>
      <Formation lineups={lineups[0]}/>
      <List list={lineups[1]}/>
      <List list={lineups[0]}/>
      <List list={lineups[2]}/>
    </div>
  )
}

export default EventLineupsContainer