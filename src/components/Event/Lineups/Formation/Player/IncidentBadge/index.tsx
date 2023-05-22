import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import styles from './IncidentBadge.module.scss'

type ExistIncidentsType = {
  incidentKey: number
  length: number
}

type IncidentBadgePropsType = {
  incidents: number[]
  className?: string
}

function IncidentBadge({ incidents, className }: IncidentBadgePropsType) {
  const IncidentsWithLength = incidents.reduce((acc: ExistIncidentsType[], curr: number) => {
    const existIncident = acc.find((incident) => incident.incidentKey === curr)

    if(existIncident) {
      existIncident.length++
    } else {
      acc.push({ incidentKey: curr, length: 1 })
    }

    return acc
  }, [])

  const incidentKeys: { [key: number]: string } = {
    1: 'Yellow Card',
    2: 'Red Card',
    3: 'Goal',
    6: 'Substitution',
    7: 'Substitution',
    8: 'Assist'
  }

  return (
    <div className={clsx(styles.incidentBadges, className)}>
      {IncidentsWithLength.map((incident, index) => (
        <div
          key={incident.incidentKey}
          className={styles.incident}
          style={{ zIndex: `-${index}` } as CSSProperties}
          title={incidentKeys[incident.incidentKey]}
        >
          {incident.length > 1 && <span className={styles.incidentLength}>{incident.length}</span>}
          <Icon icon={incidentKeys[incident.incidentKey]} size={16} />
        </div>
      ))}
    </div>
  )
}

export default IncidentBadge
