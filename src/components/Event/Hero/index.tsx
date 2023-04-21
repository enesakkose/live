import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import RoundedImg from '@/components/RoundedImg'
import { getDate, getFormatTime } from '@/utils/helpers/getFormatTime'
import { getStageType } from '@/utils/helpers/getStageType'
import type { EVENTDATA } from '@/types/event.types'
import { Josefin_Sans } from 'next/font/google'
import styles from './Hero.module.scss'

const josefin = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin'],
})

type HeroType = {
  event: EVENTDATA
}

function EventTeam({ src, teamName }: { src: string; teamName: string }) {
  return (
    <div className={styles.eventTeam}>
      <RoundedImg width={120} height={120}>
        <Image src={src} alt='team' width={100} height={100} priority={true} />
      </RoundedImg>
      <span className={styles.teamName}>{teamName}</span>
    </div>
  )
}

function Hero({ event }: HeroType) {
  function EventCurrentScore() {
    return (
      <div className={clsx(styles.eventCurrentScore, josefin.variable)}>
        <span>{event.HOME_SCORE_CURRENT}</span>
        <span>-</span>
        <span>{event.AWAY_SCORE_CURRENT}</span>
      </div>
    )
  }

  return (
    <div className={styles.eventHero}>
      <div className={styles.eventInfo}>
        <EventTeam
          src={event.HOME_IMAGES[0]}
          teamName={event.HOME_PARTICIPANT_NAME_ONE}
        />
        <div
          className={clsx(
            styles.eventStatement,
            event.STAGE_TYPE === 'LIVE' ? styles.liveEventStatement : ''
          )}
        >
          <span>
            {getDate(event.START_UTIME)} {getFormatTime(event.START_UTIME)}
          </span>
          <EventCurrentScore />
          {event.STAGE !== 'SCHEDULED' && (
            <span className={styles.eventStage}>
              {getStageType(event.STAGE)}
            </span>
          )}
          {event.INFO_NOTICE && (
            <span className={styles.infoNotice}>{event.INFO_NOTICE}</span>
          )}
        </div>
        <EventTeam
          src={event.AWAY_IMAGES[0]}
          teamName={event.AWAY_PARTICIPANT_NAME_ONE}
        />
      </div>
    </div>
  )
}

export default Hero
