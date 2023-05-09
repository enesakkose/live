import React from 'react'
import IncidentRow from '@/components/IncidentRow'
import Section from '@/components/Event/Incidents/Section'
import MatchInformation from '@/components/Event/Summary/MatchInformation'
import type { Data, Info } from '@/types/Summary.types'
import PlayerStats from '@/components/Event/Summary/Basketball/PlayerStats/PlayerStats'
import { v4 as uuidv4 } from 'uuid'
import styles from './EventSummaryContainer.module.scss'

type EventSummaryPropsTypes = {
  eventSummary: Data[]
  matchInfo: Info
  eventId: string
}

function EventSummaryContainer({
  eventSummary,
  matchInfo,
  eventId
}: EventSummaryPropsTypes) {
  return (
    <div className={styles.eventSummaryContainer}>
      {eventSummary.length > 0 && eventSummary.map((summary) => (
        <Section title={summary.STAGE_NAME}  key={uuidv4()}>
          <div className={styles.summaryItems}>
            {summary.ITEMS && summary.ITEMS.map((incident) => (
                <IncidentRow key={uuidv4()} incidentInfo={incident} />
            ))}
          </div>
        </Section>
      ))}
      {Object.keys(matchInfo).length > 0 && <MatchInformation info={matchInfo} />}
      <PlayerStats eventId={eventId}/>
    </div>
  )
}

export default EventSummaryContainer