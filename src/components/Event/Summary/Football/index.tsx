import React from 'react'
import Section from '../../Incidents/Section'
import IncidentRow from '@/components/IncidentRow'
import type { Data, Info } from '@/types/Summary.types'
import { v4 as uuidv4 } from 'uuid'


function Football({ eventSummary }: {eventSummary: Data[]}) {
  return (
    {/*eventSummary.map((summary) => (
      <Section title={summary.STAGE_NAME}  key={uuidv4()}>
        {summary.ITEMS && summary.ITEMS.map((incident) => (
          <IncidentRow key={uuidv4()} incidentInfo={incident} />
        ))}
      </Section>
        ))*/}
  )
}

export default Football