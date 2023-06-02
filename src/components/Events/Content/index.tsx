'use client'
import React, { useState } from 'react'
import EventRow from '../Row'
import Timezone from '@/components/Events/Timezone'
import Loading from './loading'
import TournamentHeader from '@/components/Events/Header'
import dayjs from 'dayjs'
import _ from 'lodash'
import { useGetEvents } from '@/services/sportsv2'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@/components/AccordionMenu'
import styles from './Content.module.scss'

function Content({ category = 'football' }: { category: string }) {
  const today = dayjs().unix() // temporary value
  const [timezone, setTimezone] = useState<'all' | 'live'>('all')
  const { data: Events = [], isLoading, isFetching } = useGetEvents(category, timezone, today)
  const groupedEvents = _.groupBy(Events, 'tournament.id')
  if(isLoading || isFetching) return <Loading/>

  return (
    <>
      <Timezone timezone={timezone} setTimezone={setTimezone} />
      {Object.keys(groupedEvents).map((key) => (
        <Accordion key={key} className={styles.tournamentEvents}>
          <AccordionItem>
            <AccordionHeader className={styles.accordionHeader}>
              <TournamentHeader
                tournamentImage={groupedEvents[key][0].tournament.category.alpha2?.toLowerCase()}
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
