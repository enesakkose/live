'use client'
import React from 'react'
import Loading from './loading'
import TournamentFlag from '@/components/TournamentFlag'
import { useGetEvent } from '@/services/sportsv2'
import styles from './Venue.module.scss'

type VenuePropsType = { eventId: number }

function Venue({ eventId }: VenuePropsType) {
  const { data: event, isLoading, isError } = useGetEvent(eventId)
  if (isLoading) return <Loading />
  if (isError || !event.venue?.city) return null
  
  return (
    <div className={styles.venue}>
      <span className={styles.title}>Venue</span>
      <div className={styles.informations}>
        <div className={styles.city}>
          <span>City:</span>
          <div className={styles.name}>
            {event.venue?.country.alpha2 ? (
              <TournamentFlag
                width={20}
                height={20}
                countryFlag={event.venue?.country.alpha2.toLowerCase()}
              />
            ) : null}
            <span className={styles.infoText}>{event.venue?.city?.name}</span>
          </div>
        </div>
        <div className={styles.stadium}>
          <span>Stadium:</span>
          <span className={styles.infoText}>{event.venue?.stadium?.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Venue
