import React from 'react'
import Icon from '../UI/Icon'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import type { Item, IncidentParticipant, IncidentType } from '@/types/Summary.types'
import styles from './IncidentRow.module.scss'

type IncidentRowPropsTypes = {
  incidentInfo: Item
}

type InfoPropsType = {
  variant?: IncidentType
  info: IncidentParticipant
  incidentTeam: number
}

type SignPropsType = {
  children?: React.ReactNode
  icon?: 'subs' | 'warning' | 'soccer'
  className?: string
}

const Info = ({ variant = 'GOAL', info, incidentTeam }: InfoPropsType) => {
  const Sign = ({ children, icon, ...props }: SignPropsType) => {
    return (
      <div className={clsx(styles.sign, incidentTeam === 2 ? styles.incidentAwayRow : '')}>
        {icon && <Icon icon={icon} size={20} {...props} />}
        {children}
      </div>
    )
  }

  const Goal = ({ ...props }) => {
    return (
      <div className={clsx(styles.infoGoal, incidentTeam === 2 ? styles.incidentAwayRow : '')}>
        <Sign icon='soccer' {...props}>
          {info.HOME_SCORE} {info.HOME_SCORE ? '-' : ''} {info.AWAY_SCORE}
        </Sign>
        {info.PARTICIPANT_NAME}
      </div>
    )
  }

  const Assist = () => {
    return <span>({info.PARTICIPANT_NAME})</span>
  }

  const SubIn = () => {
    return (
      <div className={clsx(styles.infoSubs)}>
        <Sign>
          <span className={styles.in}>IN</span>
        </Sign>
        {info.PARTICIPANT_NAME}
      </div>
    )
  }

  const SubOut = () => {
    return (
      <div className={styles.infoSubs}>
        <Sign>
          <span className={styles.out}>OUT</span>
        </Sign>
        {info.PARTICIPANT_NAME}
      </div>
    )
  }

  const MissedPenalty = () => {
    return (
      <div className={clsx(styles.missedPenalty, incidentTeam === 2 ? styles.incidentAwayRow : '')}>
        <Sign className={styles.icon} icon='warning' />
        <span className={styles.participantName}>{info.PARTICIPANT_NAME}</span>
        (Penalty Missed)
      </div>
    )
  }

  const OwnGoal = () => {
    return (
      <div className={clsx(styles.ownGoal, incidentTeam === 2 ? styles.incidentAwayRow : '')}>
        <Goal className={styles.redBall} />
        (Own Goal)
      </div>
    )
  }

  const PenaltyScored = () => {
    return (
      <div className={clsx(styles.penaltyScored, incidentTeam === 2 ? styles.incidentAwayRow : '')}>
        <Goal />
        (Penalty)
      </div>
    )
  }

  const Card = ({ variant }: { variant: 'RED_CARD' | 'YELLOW_CARD' }) => {
    return (
      <div className={clsx(styles.card, incidentTeam === 2 ? styles.incidentAwayRow : '')}>
        <Sign>
          <div className={clsx(styles.badge, styles[variant])} />
        </Sign>
        {info.PARTICIPANT_NAME}
      </div>
    )
  }

  switch (variant) {
    case 'GOAL':
      return <Goal />
    case 'ASSISTANCE':
      return <Assist />
    case 'SUBSTITUTION_IN':
      return <SubIn />
    case 'SUBSTITUTION_OUT':
      return <SubOut />
    case 'YELLOW_CARD':
      return <Card variant='YELLOW_CARD' />
    case 'RED_CARD':
      return <Card variant='RED_CARD' />
    case 'PENALTY_MISSED':
      return <MissedPenalty />
    case 'PENALTY_SCORED':
      return <PenaltyScored />
    case 'OWN_GOAL':
      return <OwnGoal />
    default:
      return null
  }
}

function IncidentRow({ incidentInfo }: IncidentRowPropsTypes) {
  return (
    <div
      className={clsx(
        styles.incidentRow,
        incidentInfo.INCIDENT_TEAM === 2 ? styles.incidentAwayRow : ''
      )}
    >
      <span className={styles.time}>{incidentInfo.INCIDENT_TIME}</span>
      {incidentInfo.INCIDENT_PARTICIPANTS.map((participant) => (
        <Info
          key={uuidv4()}
          variant={participant.INCIDENT_TYPE}
          info={participant}
          incidentTeam={incidentInfo.INCIDENT_TEAM}
        />
      ))}
    </div>
  )
}

export default IncidentRow
