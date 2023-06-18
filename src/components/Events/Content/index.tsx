'use client'
import React from 'react'
import EventRow from '../Row'
import Loading from './loading'
import TournamentHeader from '@/components/Events/Header'
import _ from 'lodash'
import { useTimezoneContext } from '@/context/TimezoneContext'
import { useDateContext } from '@/context/DateContext'
import { useGetEvents } from '@/services/sportsv2'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@/components/AccordionMenu'
import styles from './Content.module.scss'

type ContentPropsType = {
  category: string
}

function Content({ category = 'football' }: ContentPropsType) {
  const { date } = useDateContext()
  const { timezone } = useTimezoneContext()
  const { data: Events = [], isLoading } = useGetEvents(category, timezone, date)
  const groupedEvents = _.groupBy(Events, 'tournament.id')

  if (isLoading) return <Loading />

  return (
    <>
      {Object.keys(groupedEvents).map((key) => (
        <Accordion key={key} className={styles.tournamentEvents}>
          <AccordionItem>
            <AccordionHeader className={styles.accordionHeader}>
              <TournamentHeader
                tournamentImage={groupedEvents[key][0].tournament.category.alpha2?.toLowerCase()}
                uniqueTournamentId = {groupedEvents[key][0].tournament.uniqueTournament?.id}
                tournamentName={groupedEvents[key][0].tournament.name}
              />
            </AccordionHeader>
            <AccordionContent>
              {groupedEvents[key].map((match) => (
                <EventRow
                  key={match.id}
                  href={`/event/${match.id}/summary/event-summary`}
                  event={match}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  )
}

export default Content
