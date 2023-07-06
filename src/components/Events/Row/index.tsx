'use client'
import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import clsx from 'clsx'
import Link from 'next/link'
import EventStatus from '@/components/EventStatus'
import Stats from '@/components/Event/Stats'
import { getFilterEventScores } from '@/utils/helpers'
import { useGetWindowSize } from '@/utils/helpers/getWindowSize'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/UI/Tooltip'
import { type Status, type TeamCountry, type Event, CATEGORY_BY_ID } from '@/types/Events'
import styles from './Row.module.scss'

type TeamRowPropsType = {
  score: string | number
  tennisPoint?: string
  currentTennisPeriod?: number | string
  teamImage: string[] | null | string | number
  teamName: string
  status: Status
  winner: boolean
  partScores: string[]
  service: boolean
  subTeams: boolean
  playerCountryFlag: TeamCountry
  categoryTennis: boolean
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
  playerCountryFlag,
  categoryTennis,
  subTeams
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
  const teamImgSrc = categoryTennis
    ? `https://www.sofascore.com/static/images/flags/${playerCountryFlag?.alpha2?.toLowerCase()}.png`
    : `https://api.sofascore.app/api/v1/team/${teamImage}/image/small`

  const TeamImg = () => {
    return (
      <>
        {subTeams ? (
          <img
            loading='lazy'
            src={teamImgSrc}
            width={18}
            height={18}
            alt={categoryTennis ? playerCountryFlag.name : teamName}
            title={categoryTennis ? playerCountryFlag.name : teamName}
          />
        ) : null}
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
      <div className={clsx(styles.scoreContainer, categoryTennis ? styles.tennisTeamRow : '')}>
        <TeamScore />
        {inprogress && SM && categoryTennis && currentTennisPeriod}
        {partScores.length > 0 && !SM && <PartScores />}
      </div>
    </div>
  )
}

function FavEventBtn() {
  const favEvent = () => {
    const favListJson = localStorage.getItem('idList')
    const favList = favListJson ? JSON.parse(favListJson) : []
    favList.push('1')
    localStorage.setItem('idList', JSON.stringify(favList))
  }
  return <Button onClick={favEvent} variant='icon' icon={'bell'} size={20} />
}

function Row({ event }: { event: Event }) {
  const HOME_PART_SCORES = getFilterEventScores(event.homeScore)
  const AWAY_PART_SCORES = getFilterEventScores(event.awayScore)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={`/event/${event.id}/summary/event-summary`} prefetch={false} className={styles.eventRow}>
          <div className={styles.teams}>
            <TeamRow
              score={event.homeScore.current}
              tennisPoint={event.homeScore.point}
              currentTennisPeriod={event.homeScore[event.lastPeriod]}
              partScores={HOME_PART_SCORES}
              teamImage={event.homeTeam.id}
              teamName={event.homeTeam.name}
              status={event.status}
              winner={event.winnerCode === 1}
              service={event.firstToServe === 1}
              subTeams={event.homeTeam.subTeams.length === 0}
              playerCountryFlag={event.homeTeam.country}
              categoryTennis={event.tournament.category.sport.id === CATEGORY_BY_ID.TENNIS}
            />
            <TeamRow
              score={event.awayScore.current}
              tennisPoint={event.awayScore.point}
              currentTennisPeriod={event.awayScore[event.lastPeriod]}
              partScores={AWAY_PART_SCORES}
              teamImage={event.awayTeam.id}
              teamName={event.awayTeam.name}
              status={event.status}
              winner={event.winnerCode === 2}
              service={event.firstToServe === 2}
              subTeams={event.awayTeam.subTeams.length === 0}
              playerCountryFlag={event.awayTeam.country}
              categoryTennis={event.tournament.category.sport.id === CATEGORY_BY_ID.TENNIS}
            />
          </div>
        <EventStatus
          status={event.status}
          startTime={event.startTimestamp}
          currentPeriodStartTime={event.time.currentPeriodStartTimestamp}
          categoryFootball={event.tournament.category.sport.id === CATEGORY_BY_ID.FOOTBALL}
        />
      </Link>
      </TooltipTrigger>
      {/*<TooltipContent className={styles.rowTooltipContent}>
        {/*<Stats eventId={event.id} periodTabs={false}/>}
      </TooltipContent>*/}
    </Tooltip>
  )
}

export default Row
