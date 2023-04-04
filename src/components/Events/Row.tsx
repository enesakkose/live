import React, { memo } from 'react'
import type { Event } from '@/types'
import Image from 'next/image'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import Link from 'next/link'
import dayjs from 'dayjs'
import { getStageType } from '@/utils/helpers/getStageType'
import { useGetEventTime } from '@/utils/hooks/useGetEventTime'
import { getFormatTime } from '@/utils/helpers/getFormatTime'
import { TEAM_AWAY_PART_SCORE, TEAM_HOME_PART_SCORE } from '@/utils/helpers/TournamentsTemplate'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from '@/components/Events/Row.module.scss'

type TeamRowPropsType = {
  score: string | number
  teamImage: string[] | null
  teamName: string
  stage: string,
  stageType: string,
  winner: boolean,
  partScores: string[]
}

function TeamRow({ score, teamImage, teamName, stage, stageType, winner, partScores }: TeamRowPropsType) {
  const finishOrScheduled = ['SCHEDULED', 'FINISHED'].includes(stageType)
  const notPlayedDue = ['SCHEDULED', 'POSTPONED', 'WALKOVER', 'RETIRED', 'CANCELED', 'DELAYED'].includes(stage)

  const EmptyPlayerImg = () => <Icon icon='user' size={20}  /> 

  const PlayerImg = () => {
    return (
      <>
        {teamImage !== null 
          ? <Image src={teamImage[0]} width={20} height={20} alt='logo' />
          : <EmptyPlayerImg />
        }
      </>
    )
  }

  return (
    <div className={styles.teamRow}>
      <PlayerImg/>
      <span className={clsx(styles.teamName, winner ? styles.winnerTeam : '')}>{teamName}</span>
      <div className={styles.scoreContainer}>
      <span className={clsx(styles.teamScore, finishOrScheduled ? styles.finishOrScheduled : '' )}>
        {notPlayedDue ? '-' : score}
      </span>
      {partScores.length > 0 && partScores.map((score,index) => (
        <span className={styles.partScore} key={index}>
          {score}
        </span>
      ))}
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
  startTime: number,
  stageType: string,
  gameTime: string | null
}) {
  const finishOrScheduled = stageType === 'SCHEDULED' || stageType === 'FINISHED' 
  
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
        : /*getStageType(stage)*/ stageType === 'LIVE' && stage === 'FIRST_HALF' || stage === 'SECOND_HALF'  ? t : getStageType(stage)} 
    </span>
  )
}

function Row({ event, href }: { event: Event; href: Url }) {
  const HOME_PART_SCORES: typeof TEAM_HOME_PART_SCORE = Object.entries(event)
    .filter(([key, value]) => TEAM_HOME_PART_SCORE.includes(key))
    .map(([key,value]) => value)

  const AWAY_PART_SCORES: typeof TEAM_AWAY_PART_SCORE = Object.entries(event)
    .filter(([key]) => TEAM_AWAY_PART_SCORE.includes(key))
    .map(([key,value]) => value)

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
        />
        <TeamRow
          score={event.AWAY_SCORE_CURRENT}
          partScores={AWAY_PART_SCORES}
          teamImage={event?.AWAY_IMAGES}
          teamName={event.AWAY_NAME}
          stage={event.STAGE}
          stageType={event.STAGE_TYPE}
          winner={event.WINNER === 2}
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
