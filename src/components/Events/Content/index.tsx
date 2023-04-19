'use client'
import React, { useState } from 'react'
import EventRow from '../Row'
import Loading from './loading'
import Timezone from '@/components/Events/Timezone'
import ClientOnly from '../../ClientOnly'
import TournamentHeader from '@/components/Events/Header'
import { useGetEvents } from '@/services/sports'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@/components/AccordionMenu'
import { TEMPLATE_SPORTS } from '@/utils/helpers/TournamentsTemplate'
import styles from './Content.module.scss'

function Content({ id = 1 }: { id: number }) {
  const [timezone, setTimezone] = useState<'all' | 'live'>('all')
  const { data } = useGetEvents(id, timezone)

  const popularTournaments = data?.filter((t) =>
    TEMPLATE_SPORTS.includes(t.TEMPLATE_ID)
  )

  return (
    <ClientOnly Loading={Loading}>
      <Timezone timezone={timezone} setTimezone={setTimezone} />
      {data?.map((tournament, index) => (
        <Accordion key={index} className={styles.tournamentEvents}>
          <AccordionItem>
            <AccordionHeader className={styles.accordionHeader}>
              <TournamentHeader
                tournamentImage={tournament.TOURNAMENT_IMAGE}
                tournamentName={tournament.NAME}
              />
            </AccordionHeader>
            <AccordionContent>
              {tournament.EVENTS.map((match, index) => (
                <EventRow
                  key={index}
                  href={`/event/${match.EVENT_ID}`}
                  event={match}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </ClientOnly>
  )
}

export default Content
