import React, { CSSProperties } from 'react'
import Icon from '@/components/Icon'
import styles from './IncidentBadge.module.scss'

type ExistIncidentsType = {
  incidentKey: number
  length: number
}

function IncidentBadge({ incidents }: { incidents: number[] }) {
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
    1: 'yellowcard',
    2: 'redcard',
    3: 'soccer',
    6: 'subs',
    8: 'a'
  }

  return (
    <div className={styles.incidentBadges}>
      {IncidentsWithLength.map((incident, index) => (
        <div
          key={incident.incidentKey}
          className={styles.incident}
          style={{ zIndex: `-${index}` } as CSSProperties}
        >
          {incident.length > 1 && <span className={styles.incidentLength}>{incident.length}</span>}
          <Icon icon={incidentKeys[incident.incidentKey]} size={16} />
        </div>
      ))}
    </div>
  )
}

export default IncidentBadge
