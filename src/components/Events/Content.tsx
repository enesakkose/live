'use client'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import EventRow from '@/components/Events/Row'
import TournamentHeader from '@/components/Events/Header'
import styles from '@/components/Events/Content.module.scss'
import { Accordion } from '../AccordionMenu'
import { getEvents } from '@/utils/hooks'

function Content({ id = 1 }: { id: number }) {
  const { data, isLoading, error } = useQuery(['events', id], () =>
    getEvents(id)
  )

  if (isLoading) return <>'Loading'</>

  return (
    <>
      {data?.map((tournament) => (
        <Accordion
          key={tournament.TOURNAMENT_ID}
          className={styles.tournamentEvents}
        >
          <Accordion.Item>
            <Accordion.Header className={styles.accordionHeader}>
              <TournamentHeader
                tournamentImage={tournament.TOURNAMENT_IMAGE}
                tournamentName={tournament.NAME}
              />
            </Accordion.Header>
            <Accordion.Content>
              {tournament.EVENTS.map((match) => (
                <EventRow
                  key={match.EVENT_ID}
                  href={`/event/${match.EVENT_ID}`}
                  event={match}
                />
              ))}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  )
}

export default Content
