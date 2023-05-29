'use client'
import React, { useState } from 'react'
import EventRow from '../Row'
import Loading from './loading'
import Timezone from '@/components/Events/Timezone'
import ClientOnly from '../../ClientOnly'
import TournamentHeader from '@/components/Events/Header'
import dayjs from 'dayjs'
import _ from 'lodash'
import { useGetEventsV2, a } from '@/services/sportsv2'
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
  const { data: Events = [] } = useGetEventsV2(category, timezone, today)
  const groupedEvents = _.groupBy(Events, 'tournament.id')
  const aaa = a()
  console.log(aaa)
  return (
    <ClientOnly Loading={Loading}>
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
    </ClientOnly>
  )
}

export default Content
