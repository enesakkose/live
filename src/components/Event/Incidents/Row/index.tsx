import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import Section from '../Section'
import PlayerTooltip from '@/components/PlayerTooltip'
import { type Incident } from '@/types/EventIncidents'
import { IncidentType, IncidentClass } from '@/types/EventIncidents'
import styles from './Row.module.scss'

type RowPropsType = { incident: Incident }

type SignPropsType = {
  children?: React.ReactNode
  icon?: string
  className?: string
}

enum BASKETBALL_GOAL_TYPE {
  twoPoints = '+2',
  threePoints = '+3',
  onePoint = '+1',
}

function Row({ incident }: RowPropsType) {
  
  const Content = () => {
    const IncidentTime = () => {
      return (
        <span className={styles.incidentTime}>
          {`${incident.time} ${incident.addedTime ? `+${incident.addedTime}` : ''}`}&apos;
        </span>
      )
    }

    const IncidentGoalType = () => {
      const goalType = ['twoPoints', 'threePoints', 'onePoint'].includes(incident?.incidentClass)
        ? BASKETBALL_GOAL_TYPE[incident?.incidentClass as keyof typeof BASKETBALL_GOAL_TYPE]
        : incident?.incidentClass
      return (
        <>
          {incident.incidentClass !== IncidentClass.REGULAR && (
            <span className={styles.incidentClass}>({goalType})</span>
          )}
        </>
      )
    }

    const Sign = ({ children, icon, className }: SignPropsType) => {
      return (
        <div
          className={clsx(
            styles.rowBase,
            styles.sign,
            incident.isHome ? '' : styles.incidentAwayRow,
            className
          )}
        >
          {icon && <Icon icon={icon} size={16} />}
          {children}
        </div>
      )
    }

    const Goal = () => {
      return (
        <div className={clsx(styles.goal, incident.isHome ? '' : styles.incidentAwayRow)}>
          {incident.time && <IncidentTime />}
          <Sign icon='football' className={styles.goalSign}>
            <span className={clsx(styles.score, incident.isHome ? styles.activeScore : '')}>
              {incident.homeScore}
            </span>
            -
            <span className={clsx(styles.score, incident.isHome ? '' : styles.activeScore)}>
              {incident.awayScore}
            </span>
          </Sign>
          {incident.player && incident.player.id && (
            <PlayerTooltip playerId={incident.player.id} playerName={incident.player.shortName} />
          )}
          {incident.assist1 && incident.assist1.id && (
            <PlayerTooltip
              playerId={incident.assist1.id}
              playerName={`(${incident.assist1?.shortName})`}
            />
          )}
          <IncidentGoalType />
        </div>
      )
    }

    const Card = () => {
      return (
        <div className={clsx(styles.card, incident.isHome ? '' : styles.incidentAwayRow)}>
          <IncidentTime />
          <Sign icon={incident.incidentClass} />
          {incident.player || incident.manager ? (
            <PlayerTooltip
              playerId={incident.player ? incident.player.id : incident.manager.id}
              playerName={incident?.playerName}
            />
          ) : null}
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
            <Sign>
              <span className={styles.in}>IN</span>
            </Sign>
            {incident.playerIn.id && (
              <PlayerTooltip
                playerId={incident.playerIn.id}
                playerName={incident.playerIn?.shortName}
              />
            )}
          </div>
          <div className={styles.subOut}>
            <Sign>
              <span className={styles.out}>OUT</span>
            </Sign>
            {incident.playerOut.id && (
              <PlayerTooltip
                playerId={incident.playerOut.id}
                playerName={incident.playerOut?.shortName}
              />
            )}
          </div>
        </div>
      )
    }

    const MissedPenalty = () => {
      return (
        <div className={clsx(styles.missedPenalty, incident.isHome ? '' : styles.incidentAwayRow)}>
          <Sign icon='redball' />
          {incident.player.id && (
            <PlayerTooltip playerId={incident.player.id} playerName={incident.player?.shortName} />
          )}
          <IncidentGoalType />
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
        return (
          <Section title={incident.text}>
            {incident.homeScore} - {incident.awayScore}
          </Section>
        )
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
