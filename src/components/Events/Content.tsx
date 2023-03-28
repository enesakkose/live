'use client'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import EventRow from '@/components/Events/Row'
import TournamentHeader from '@/components/Events/Header'
import styles from '@/components/Events/Content.module.scss'
import {
  AccordionHeader,
  AccordionItem,
  AccordionContainer,
  AccordionContent,
} from '../AccordionMenu'
import { getEvents } from '@/utils/hooks'

function Content({ id = 1 }: { id: number }) {
  const { data, isLoading, error } = useQuery(['events', id], () => getEvents(id))

  if (isLoading) return <>'Loading'</>

  return (
    <>
      {data?.map((tournament) => (
        <AccordionContainer
          key={tournament.TOURNAMENT_ID}
          className={styles.tournamentEvents}
        >
          <AccordionItem>
            <AccordionHeader className={styles.accordionHeader}>
              <TournamentHeader
                tournamentImage={tournament.TOURNAMENT_IMAGE}
                tournamentName={tournament.NAME}
              />
            </AccordionHeader>
            {tournament.EVENTS.map((match) => (
              <AccordionContent key={match.EVENT_ID}>
                <EventRow
                  href={`/event/${match.EVENT_ID}`}
                  event={match}
                />
              </AccordionContent>
            ))}
          </AccordionItem>
        </AccordionContainer>
      ))}
    </>
  )
}

export default Content
