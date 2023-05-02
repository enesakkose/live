import React from 'react'
import GroupLabel from '@/components/GroupLabel'
import IncidentRow from '@/components/IncidentRow'
import type { Data, Info } from '@/types/Summary.types'
import { v4 as uuidv4 } from 'uuid'
import styles from './EventSummaryContainer.module.scss'

type EventSummaryPropsTypes = {
  eventSummary: Data[]
  matchInfo: Info
}

function EventSummaryContainer({
  eventSummary,
  matchInfo,
}: EventSummaryPropsTypes) {
  console.log(eventSummary)
  return (
    <div className={styles.eventSummaryContainer}>
      {eventSummary.length > 0 &&
        eventSummary.map((summary) => (
          <div className={styles.summaryGroup} key={uuidv4()}>
            <GroupLabel label={summary.STAGE_NAME}>
              <span>
                {summary.RESULT_HOME} - {summary.RESULT_AWAY}
              </span>
            </GroupLabel>
            <div className={styles.summaryItems}>
              {summary.ITEMS &&
                summary.ITEMS.map((incident) => (
                  <IncidentRow key={uuidv4()} incidentInfo={incident} />
                ))}
            </div>
          </div>
        ))}
      <div className={styles.matchInfo}>
        <GroupLabel label='Match Information' />
        <div className={styles.infoList}>
          {Object.keys(matchInfo)
            .filter((key) => key !== 'COUNTRY_FLAG')
            .map((key) => (
              <div className={styles.info} key={key}>
                <span className={styles.key}>{key}:</span>
                <span className={styles.value}>{matchInfo[key]}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default EventSummaryContainer