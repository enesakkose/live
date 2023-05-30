"use client"
import React from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import Link from 'next/link'
import { getFilterEventScores } from '@/utils/helpers'
import { getStageType } from '@/utils/helpers/getStageType'
import { useGetEventTime } from '@/utils/hooks/useGetEventTime'
import { useGetWindowSize } from '@/utils/helpers/getWindowSize'
import { getFormatTime } from '@/utils/helpers/getFormatTime'
import { Url } from 'next/dist/shared/lib/router/router'
import { Event } from '@/types/Events'
import styles from './Row.module.scss'

type TeamRowPropsType = {
  score: string | number
  teamImage: string[] | null | string | number
  teamName: string
  status: string
  winner: boolean
  statusType: string
  partScores: string[]
  service: boolean
}

type EventStagePropsType = {
  status: string
  statusType: string
  startTime: number
  categoryFootball: boolean
  currentPeriodStartTime: number
}

function TeamRow({
  score,
  teamImage,
  teamName,
  status,
  winner,
  partScores,
  statusType,
  service,
}: TeamRowPropsType) {
  const notPlayedDue = [
    'Not started',
    'POSTPONED',
    'Walkover',
    'Retired',
    'Canceled',
    'DELAYED',
  ].includes(status)
  const inprogress = statusType === 'inprogress'
  const SM = useGetWindowSize('SM')

  const EmptyPlayerImg = () => <Icon icon='user' size={20} />

  const PlayerImg = () => {
    return (
      <>
        {teamImage !== null ? (
          <img
            loading='lazy'
            src={`https://api.sofascore.app/api/v1/team/${teamImage}/image/small`}
            width={20}
            height={20}
            alt='logo'
          />
        ) : (
          <EmptyPlayerImg />
        )}
      </>
    )
  }

  const PartScores = () => {
    return (
      <>
        {partScores.map((score, index) => (
          <span className={styles.partScore} key={index}>
            {score}
          </span>
        ))}
      </>
    )
  }

  const TeamScore = () => {
    return (
      <span className={clsx(styles.teamScore, !inprogress ? styles.finishOrScheduled : '')}>
        {notPlayedDue ? '-' : score}
      </span>
    )
  }

  const TeamName = () => {
    return (
      <span className={clsx(styles.teamName, winner ? styles.winnerTeam : '')}>{teamName}</span>
    )
  }

  return (
    <div className={styles.teamRow}>
      <PlayerImg />
      <TeamName />
      {service && inprogress && <Icon icon='tennis' size={20} />}
      <div className={styles.scoreContainer}>
        <TeamScore />
        {partScores.length > 0 && !SM && <PartScores />}
      </div>
    </div>
  )
}

function LiveBlink (){
  return(
    <span className={styles.liveBlink}>&apos;</span>
  )
}

function EventStage({
  status,
  statusType,
  startTime,
  categoryFootball,
  currentPeriodStartTime
}: EventStagePropsType) {
  const time = useGetEventTime(currentPeriodStartTime, status)
  const inprogress = statusType === 'inprogress'

  return (
    <div className={clsx(styles.stage, !inprogress ? styles.finishOrScheduled : '')}>
      {status === 'Not started'
        ? getFormatTime(startTime)
        : categoryFootball && inprogress && status !== 'Halftime'
          ? <span className={styles.time}>{time} <LiveBlink/></span>
          : <span className={styles.status}>{getStageType(status)}</span>} 
    </div>
  )
}

function Row({ event, href }: { event: Event, href: Url }) {
  const HOME_PART_SCORES = getFilterEventScores(event.homeScore)
  const AWAY_PART_SCORES = getFilterEventScores(event.awayScore)

  return (
    <Link href={href} className={styles.eventRow}>
      <div className={styles.teams}>
        <TeamRow
          score={event.homeScore.current}
          partScores={HOME_PART_SCORES}
          teamImage={event?.homeTeam.id}
          teamName={event.homeTeam.name}
          status={event.status.description}
          statusType={event.status.type}
          winner={event.winnerCode === 1}
          service={event.firstToServe === 1}
        />
        <TeamRow
          score={event.awayScore.current}
          partScores={AWAY_PART_SCORES}
          teamImage={event?.awayTeam.id}
          teamName={event.awayTeam.name}
          status={event.status.description}
          statusType={event.status.type}
          winner={event.winnerCode === 2}
          service={event.firstToServe === 2}
        />
      </div>
      <EventStage
        status={event.status.description}
        statusType={event.status.type}
        startTime={event.startTimestamp}
        currentPeriodStartTime={event.time.currentPeriodStartTimestamp}
        categoryFootball={event.tournament.category.sport.id === 1}
        key={event.id}
      />
    </Link>
  )
}

export default Row
