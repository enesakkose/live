'use client'
import React from 'react'
import clsx from 'clsx'
import RoundedImg from '../RoundedImg'
import EventStatus from '../EventStatus'
import Icon from '../UI/Icon'
import TennisPlayerRank from '../TennisPlayerRank'
import Header from '../Event/Header'
import Loading from './Loading'
import { Josefin_Sans } from 'next/font/google'
import { useGetEvent } from '@/services/sportsv2'
import { getStartTime, getDate } from '@/utils/helpers/getFormatTime'
import { CATEGORY_BY_ID, EVENT_STATUS } from '@/types/Events'
import styles from './Scoreboard.module.scss'

const josefin = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin'],
})

type ScoreboardPropsType = {
  eventId: number
}

function Scoreboard({ eventId }: ScoreboardPropsType) {
  const { data: event, isLoading, isError } = useGetEvent(eventId)
  if (isLoading || isError) return <Loading />
  const inprogress = event.status.description === EVENT_STATUS.INPROGRESS
  const notStarted = event.status.description === EVENT_STATUS.NOT_STARTED
  const categoryTennis = event.tournament.category.sport.id === CATEGORY_BY_ID.TENNIS
  const startTime = getStartTime(event.startTimestamp)
  const startDate = getDate(event.startTimestamp)

  return (
    <div className={styles.scoreboardContainer}>
      <Header tournament={event.tournament} />
      <div className={styles.scoreboard}>
        <div className={styles.homeTeamInfo}>
          <RoundedImg width={100} height={100} className={styles.homeImg}>
            <img
              src={`https://api.sofascore.app/api/v1/team/${event.homeTeam.id}/image`}
              alt={event.homeTeam.name}
              width={100}
              height={100}
              className={styles.teamImg}
            />
            {event?.homeTeam?.ranking && categoryTennis && (
              <img
                src={`https://www.sofascore.com/static/images/flags/${event.homeTeam.country.alpha2.toLowerCase()}.png`}
                title={`${event.homeTeam.country.name}`}
                alt={`${event.homeTeam.country.name}`}
                className={styles.countryFlag}
              />
            )}
          </RoundedImg>
          <span className={clsx(styles.teamName, styles.homeName)}>{event.homeTeam.shortName}</span>
          {event.homeTeam?.ranking && categoryTennis && (
            <TennisPlayerRank
              gender={event.homeTeam?.gender}
              rank={event?.homeTeam?.ranking}
              className={styles.homeRank}
            />
          )}
          <div className={styles.homeToServe}>
            {event.firstToServe === 1 && inprogress && <Icon icon='tennis' />}
          </div>
        </div>
        <span className={styles.eventTime}>
          {startDate} {startTime}
        </span>
        <div className={clsx(styles.score, josefin.variable, inprogress ? styles.liveScore : '')}>
          <span className={styles.homeScore}>{event.homeScore?.current}</span>
          <span>-</span>
          <span className={styles.awayScore}>{event.awayScore?.current}</span>
        </div>
        {!notStarted && (
          <EventStatus
            status={event.status}
            startTime={event.startTimestamp}
            currentPeriodStartTime={event.time?.currentPeriodStartTimestamp}
            categoryFootball={event.tournament.category.sport.id === 1}
            className={styles.eventStatus}
          />
        )}
        <div className={styles.awayTeamInfo}>
          <RoundedImg width={100} height={100} className={styles.awayImg}>
            <img
              src={`https://api.sofascore.app/api/v1/team/${event.awayTeam.id}/image`}
              alt={event.awayTeam.name}
              width={100}
              height={100}
              className={styles.teamImg}
            />
            {event?.awayTeam?.ranking && categoryTennis && (
              <img
                src={`https://www.sofascore.com/static/images/flags/${event.awayTeam.country.alpha2.toLowerCase()}.png`}
                title={`${event.awayTeam.country.name}`}
                alt={`${event.awayTeam.country.name}`}
                className={styles.countryFlag}
              />
            )}
          </RoundedImg>
          <span className={clsx(styles.teamName, styles.awayName)}>{event.awayTeam.shortName}</span>
          {event.awayTeam?.ranking && categoryTennis && (
            <TennisPlayerRank
              gender={event.awayTeam.gender}
              rank={event?.awayTeam?.ranking}
              className={styles.awayRank}
            />
          )}
          <div className={styles.awayToServe}>
            {event.firstToServe === 2 && inprogress && <Icon icon='tennis' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
