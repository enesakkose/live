import React from 'react'
import clsx from 'clsx'
import ResultBadge from '@/components/ResultBadge'
import Link from 'next/link'
import { getDate } from '@/utils/helpers/getFormatTime'
import { type H2HEVENT } from '@/types/H2HTypes'
import styles from './Row.module.scss'

function Row({ event }: { event: H2HEVENT }) {
  
  const EventDate = () => {
    return <span className={styles.eventDate}>{getDate(event.START_TIME)}</span>
  }

  const Team = ({
    participant,
    name,
    img,
    score,
    mark
  }: {
    participant: 'home' | 'away'
    mark: 'home' | 'away'
    name: string
    img: string[]
    score: string | null
  }) => {
    const defaultTeam = 'https://www.flashscore.com/res/image/data/rHkUp5Wg-Qmtm30D7.png'
    return (
      <>
        <div className={clsx(styles.team, styles[participant])}>
          <img src={img ? img[0] : defaultTeam} width={16} height={16} alt='alt' />
          <span className={clsx(styles.name, participant === mark ? styles.mark : '')}>{name}</span>
        </div>
        {score && <span className={clsx(styles.score, styles[participant])}>{score}</span>}
      </>
    )
  }

  return (
    <Link href={`/event/${event.EVENT_ID}/summary/event-summary`} className={styles.h2hRow}>
      <EventDate />
      <Team
        participant='home'
        name={event.HOME_PARTICIPANT_NAME_ONE}
        img={event.HOME_IMAGES}
        score={event.HOME_SCORE_FULL}
        mark={event.TEAM_MARK}
      />
      <Team
        participant='away'
        name={event.AWAY_PARTICIPANT_NAME_ONE}
        img={event.AWAY_IMAGES}
        score={event.AWAY_SCORE_FULL}
        mark={event.TEAM_MARK}
      />
      <ResultBadge result={event.H_RESULT} />
    </Link>
  )
}

export default Row
