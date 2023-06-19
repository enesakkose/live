'use client'
import React from 'react'
import EventRow from '../Row'
import Loading from './loading'
import TournamentHeader from '@/components/Events/Header'
import NotEvents from './NotEvents'
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
  const { timezoneStatus } = useTimezoneContext()
  const { data: Events = [], isLoading } = useGetEvents(category, timezoneStatus, date)
  const groupedEvents = _.groupBy(Events, 'tournament.id')

  if (isLoading) return <Loading />
  if (Events.length === 0) return <NotEvents category={category} />

  return (
    <>
      {Object.keys(groupedEvents).map((key) => (
        <Accordion key={key} className={styles.tournamentEvents}>
          <AccordionItem>
            <AccordionHeader className={styles.accordionHeader}>
              <TournamentHeader
                countryFlag={groupedEvents[key][0].tournament.category.alpha2?.toLowerCase()}
                uniqueFlag={groupedEvents[key][0].tournament.category?.flag}
                uniqueTournamentId = {groupedEvents[key][0].tournament.uniqueTournament?.id}
                categoryTennis={groupedEvents[key][0].tournament.category.sport.id === 5}
                name={groupedEvents[key][0].tournament.name}
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
