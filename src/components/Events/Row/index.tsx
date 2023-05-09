import React from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import Link from 'next/link'
import dayjs from 'dayjs'
import { getFilterEventScores } from '@/utils/helpers'
import { getStageType } from '@/utils/helpers/getStageType'
import { useGetEventTime } from '@/utils/hooks/useGetEventTime'
import { getFormatTime } from '@/utils/helpers/getFormatTime'
import { TEAM_AWAY_PART_SCORE_KEYS, TEAM_HOME_PART_SCORE_KEYS } from '@/utils/helpers/TournamentsTemplate'
import { Url } from 'next/dist/shared/lib/router/router'
import type { Event } from '@/types'
import styles from './Row.module.scss'

type TeamRowPropsType = {
  score: string | number
  teamImage: string[] | null
  teamName: string
  stage: string
  stageType: string
  winner: boolean
  partScores: string[]
  service: boolean
}

function TeamRow({
  score,
  teamImage,
  teamName,
  stage,
  stageType,
  winner,
  partScores,
  service,
}: TeamRowPropsType) {
  const finishOrScheduled = ['SCHEDULED', 'FINISHED'].includes(stageType)
  const notPlayedDue = [
    'SCHEDULED',
    'POSTPONED',
    'WALKOVER',
    'RETIRED',
    'CANCELED',
    'DELAYED',
  ].includes(stage)

  const EmptyPlayerImg = () => <Icon icon='user' size={20} />

  const PlayerImg = () => {
    return (
      <>
        {teamImage !== null ? (
          <img loading='lazy' src={teamImage[0]} width={20} height={20} alt='logo' />
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
      <span
        className={clsx(
          styles.teamScore,
          finishOrScheduled ? styles.finishOrScheduled : ''
        )}
      >
        {notPlayedDue ? '-' : score}
      </span>
    )
  }

  const TeamName = () => {
    return (
      <span className={clsx(styles.teamName, winner ? styles.winnerTeam : '')}>
        {teamName}
      </span>
    )
  }

  return (
    <div className={styles.teamRow}>
      <PlayerImg />
      <TeamName />
      {service && <Icon icon='tennis' size={20} />}
      <div className={styles.scoreContainer}>
        <TeamScore />
        {partScores.length > 0 && <PartScores />}
      </div>
    </div>
  )
}

function EventStage({
  stage,
  startTime,
  stageType,
  gameTime
}: {
  stage: string
  startTime: number
  stageType: string
  gameTime: string | null
}) {
  const finishOrScheduled =
    stageType === 'SCHEDULED' || stageType === 'FINISHED'

  const t = useGetEventTime(1680624001)
  // compore startTime with now date
  // time dont reset at 60:00
  // show service ball for tennis category
  //think first half and second half and arrange this component
  return (
    <span
      className={clsx(
        styles.stage,
        finishOrScheduled ? styles.finishOrScheduled : ''
      )}
    >
      {stage === 'SCHEDULED'
        ? getFormatTime(startTime)
        : /*getStageType(stage)*/ (stageType === 'LIVE' &&
            stage === 'FIRST_HALF') ||
          stage === 'SECOND_HALF'
        ? t
        : getStageType(stage)}
    </span>
  )
}

//${gameTime} for basket period time and calendar component perf load like memoziaton usememo for time

function Row({ event, href }: { event: Event, href: Url }) {
  const HOME_PART_SCORES = getFilterEventScores(event, TEAM_HOME_PART_SCORE_KEYS)
  const AWAY_PART_SCORES = getFilterEventScores(event, TEAM_AWAY_PART_SCORE_KEYS)

  return (
    <Link href={href} className={styles.eventRow}>
      <div className={styles.teams}>
        <TeamRow
          score={event.HOME_SCORE_CURRENT}
          partScores={HOME_PART_SCORES}
          teamImage={event?.HOME_IMAGES}
          teamName={event.HOME_NAME}
          stage={event.STAGE}
          stageType={event.STAGE_TYPE}
          winner={event.WINNER === 1}
          service={event.SERVICE === 1}
        />
        <TeamRow
          score={event.AWAY_SCORE_CURRENT}
          partScores={AWAY_PART_SCORES}
          teamImage={event?.AWAY_IMAGES}
          teamName={event.AWAY_NAME}
          stage={event.STAGE}
          stageType={event.STAGE_TYPE}
          winner={event.WINNER === 2}
          service={event.SERVICE === 2}
        />
      </div>
      <EventStage
        stage={event.STAGE}
        stageType={event.STAGE_TYPE}
        startTime={event.START_TIME}
        gameTime={event.GAME_TIME}
      />
    </Link>
  )
}

export default Row
