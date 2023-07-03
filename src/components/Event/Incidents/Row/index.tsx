import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import Section from '../Section'
import { type Incident } from '@/types/EventIncidents'
import { IncidentType, IncidentClass } from '@/types/EventIncidents'
import styles from './Row.module.scss'

type RowPropsType = { incident: Incident }

type SignPropsType = {
  children?: React.ReactNode
  icon?: string
}

function Row({ incident }: RowPropsType) {

  const Content = () => {

    const IncidentTime = () => {
      return(
        <span className={styles.incidentTime}>
          {`${incident.time} ${incident.addedTime ? `+${incident.addedTime}` : ''}`}&apos;
        </span>
      )
    }
    
    const IncidentGoalType = () => {
      return(
        <>
          {incident.incidentClass !== IncidentClass.REGULAR ?
            <span className={styles.incidentClass}>
              ({incident.incidentClass})
            </span>
          : null}
        </>
      )
    }
    
    const Sign = ({ children, icon }: SignPropsType) => {
      return (
        <div
          className={clsx(
            styles.rowBase,
            styles.sign,
            incident.isHome ? '' : styles.incidentAwayRow
          )}
        >
          {icon && <Icon icon={icon} size={20} />}
          {children}
        </div>
      )
    }

    const Goal = () => {
      return (
        <div className={clsx(styles.goal, incident.isHome ? '' : styles.incidentAwayRow)}>
          {incident.time && <IncidentTime />}
          <Sign icon='football'>{incident.homeScore} - {incident.awayScore}</Sign>
          {incident.player?.name}
          {incident.assist1?.name && <span className={styles.assist}>({incident.assist1?.name})</span>}
          <IncidentGoalType />
        </div>
      )
    }

    const Card = () => {
      return (
        <div className={clsx(styles.card, incident.isHome ? '' : styles.incidentAwayRow)}>
          <IncidentTime />
          <Sign icon={incident.incidentClass} />
          {incident.playerName}
          {incident.reason && <span className={styles.reason}>({incident.reason})</span>}
        </div>
      )
    }

    const InjuryTime = () => {
      return <span className={styles.injuryTime}>Additional Time +{incident.length}&apos;</span>
    }

    const Substitution = () => {
      return (
        <div className={clsx(styles.substitution, incident.isHome ? '' : styles.incidentAwayRow)}>
          <IncidentTime />
          <div className={styles.subIn}>
            <Sign><span className={styles.in}>IN</span></Sign>
            {incident.playerIn?.name}
          </div>
          <div className={styles.subOut}>
            <Sign><span className={styles.out}>OUT</span></Sign>
            {incident.playerOut?.name}
          </div>
        </div>
      )
    }

    const MissedPenalty = () => {
      return(
        <div className={clsx(styles.missedPenalty, incident.isHome ? '' : styles.incidentAwayRow)}>
          <Sign icon='redball' />
          {incident.player?.name}
          <IncidentGoalType/>
        </div>
      )
    }

    const Penalty = () => {
      return (
        <div className={clsx(styles.penalty, incident.isHome ? '' : styles.incidentAwayRow)}>
          {incident.incidentClass === IncidentClass.MISSED ? <MissedPenalty /> : <Goal />}
        </div>
      )
    }

    switch (incident.incidentType) {
      case IncidentType.GOAL:
        return <Goal />
      case IncidentType.SUBSTITUTION:
        return <Substitution />
      case IncidentType.CARD:
        return <Card />
      case IncidentType.PENALTY_SHOOTOUT:
        return <Penalty />
      case IncidentType.PERIOD:
        return <Section title={incident.text} />
      case IncidentType.INJURY_TIME:
        return <InjuryTime />
      /*case 'OWN_GOAL':
        return <OwnGoal />*/
      default:
        return null
    }
  }

  return (
    <div
      className={clsx(
        styles.incidentRow,
        incident.incidentType === IncidentType.PERIOD ? styles.periodRow : '',
        incident.incidentType === IncidentType.INJURY_TIME ? styles.injuryTimeRow : '',
        incident.isHome ? '' : styles.incidentAwayRow
      )}
    >
      <Content />
    </div>
  )
}

export default Row
