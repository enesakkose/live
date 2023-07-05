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
import { Accordion, AccordionContent, AccordionTrigger } from '@/components/UI/Accordion'
import { CATEGORY_BY_ID } from '@/types/Events'
import styles from './Content.module.scss'

type ContentPropsType = { category: string }

function Content({ category = 'football' }: ContentPropsType) {
  const { date } = useDateContext()
  const { timezoneStatus } = useTimezoneContext()
  const { data: events = [], isLoading } = useGetEvents(category, timezoneStatus, date)
  const groupedEvents = _.groupBy(events, 'tournament.id')

  if (isLoading) return <Loading />
  if (events.length === 0) return <NotEvents category={category} />

  return (
    <>
      {Object.keys(groupedEvents).map((key) => (
        <Accordion key={key} className={styles.tournamentEvents}>
          <AccordionTrigger className={styles.accordionHeader}>
            <TournamentHeader
              countryFlag={groupedEvents[key][0].tournament.category.alpha2?.toLowerCase()}
              uniqueFlag={groupedEvents[key][0].tournament.category?.flag}
              uniqueTournamentId={groupedEvents[key][0].tournament.uniqueTournament?.id}
              categoryTennis={groupedEvents[key][0].tournament.category.sport.id === CATEGORY_BY_ID.TENNIS}
              name={groupedEvents[key][0].tournament.name}
            />
          </AccordionTrigger>
          <AccordionContent>
            {groupedEvents[key].map((match) => (
              <EventRow key={match.id} event={match} />
            ))}
          </AccordionContent>
        </Accordion>
      ))}
    </>
  )
}

export default Content
