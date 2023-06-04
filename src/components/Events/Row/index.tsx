'use client'
import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
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
  tennisPoint?: string
  currentTennisPeriod?: number | string
  teamImage: string[] | null | string | number
  teamName: string
  status: { code: number; description: string; type: string }
  winner: boolean
  partScores: string[]
  service: boolean
}

type EventStagePropsType = {
  status: { code: number; description: string; type: string }
  startTime: number
  categoryFootball: boolean
  currentPeriodStartTime: number
}

function TeamRow({
  score,
  tennisPoint,
  currentTennisPeriod,
  teamImage,
  teamName,
  status,
  winner,
  partScores,
  service,
}: TeamRowPropsType) {
  const notPlayedDue = [
    'Not started',
    'Postponed',
    'Walkover',
    'Retired',
    'Canceled',
    'DELAYED',
  ].includes(status.description)
  const inprogress = status.type === 'inprogress'
  const SM = useGetWindowSize('SM')

  const EmptyPlayerImg = () => <Icon icon='user' size={20} />

  const TeamImg = () => {
    return (
      <>
        {teamImage !== null ? (
          <img
            loading='lazy'
            src={`https://api.sofascore.app/api/v1/team/${teamImage}/image/small`}
            width={16}
            height={16}
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
      <TeamImg />
      <TeamName />
      {service && inprogress && <Icon icon='tennis' size={19} />}
      {tennisPoint && inprogress && <span className={styles.tennisPoint}>{tennisPoint}</span>}
      <div className={styles.scoreContainer}>
        <TeamScore />
        {tennisPoint && currentTennisPeriod && inprogress && SM ? currentTennisPeriod : null}
        {partScores.length > 0 && !SM && <PartScores />}
      </div>
    </div>
  )
}

function CurrentEventTime({
  currentPeriodStartTime,
  status,
}: Pick<EventStagePropsType, 'currentPeriodStartTime' | 'status'>) {
  return (
    <div className={styles.time}>
      {useGetEventTime(currentPeriodStartTime, status.description)}
      <span className={styles.liveBlink}>&apos;</span>
    </div>
  )
}

function EventStage({
  status,
  startTime,
  categoryFootball,
  currentPeriodStartTime,
}: EventStagePropsType) {
  const inprogress = status.type === 'inprogress'
  const playing = status.code === 7 || status.code === 6

  return (
    <div className={clsx(styles.stage, !inprogress ? styles.finishOrScheduled : '')}>
      {status.description === 'Not started' 
        ? getFormatTime(startTime)
        : categoryFootball && inprogress && playing 
          ? <CurrentEventTime status={status} currentPeriodStartTime={currentPeriodStartTime} />
          : <span className={styles.status}>{getStageType(status.description)}</span>}
    </div>
  )
}

function FavEventBtn() {
  return(
    <Button variant='icon' icon='bell' />
  )
}

function Row({ event, href }: { event: Event; href: Url }) {
  const HOME_PART_SCORES = getFilterEventScores(event.homeScore)
  const AWAY_PART_SCORES = getFilterEventScores(event.awayScore)

  return (
    <Link href={href} prefetch={false} className={styles.eventRow}>
      <FavEventBtn  />
      <div className={styles.teams}>
        <TeamRow
          score={event.homeScore.current}
          tennisPoint={event.homeScore.point}
          currentTennisPeriod={event.homeScore[event.lastPeriod]}
          partScores={HOME_PART_SCORES}
          teamImage={event?.homeTeam.id}
          teamName={event.homeTeam.name}
          status={event.status}
          winner={event.winnerCode === 1}
          service={event.firstToServe === 1}
        />
        <TeamRow
          score={event.awayScore.current}
          tennisPoint={event.awayScore.point}
          currentTennisPeriod={event.awayScore[event.lastPeriod]}
          partScores={AWAY_PART_SCORES}
          teamImage={event?.awayTeam.id}
          teamName={event.awayTeam.name}
          status={event.status}
          winner={event.winnerCode === 2}
          service={event.firstToServe === 2}
        />
      </div>
      <EventStage
        status={event.status}
        startTime={event.startTimestamp}
        currentPeriodStartTime={event.time.currentPeriodStartTimestamp}
        categoryFootball={event.tournament.category.sport.id === 1}
      />
    </Link>
  )
}

export default Row
