import React from 'react'
import Image from 'next/image'
import type { Event } from '@/types'
import Button from '@/components/Button'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from '@/components/Events/Row.module.scss'

type TeamRowPropsType = {
  score: string | number
  teamImage: string[] | null
  teamName: string
}

function TeamRow({ score, teamImage, teamName }: TeamRowPropsType) {
  return (
    <div className={styles.teamRow}>
      <span className={styles.teamScore}>{score}</span>
      {teamImage && (
        <Image src={teamImage[0]} width={18} height={18} alt='logo' />
      )}
      <span className={styles.teamName}>{teamName}</span>
    </div>
  )
}

function EventStage({ stage }: { stage?: string | null }) {
  return <span className={styles.stage}>78'</span>
}

function Row({ event, href }: { event: Event, href: Url }) {
  return (
    <Link href={href} className={styles.eventRow}>
      <div className={styles.teams}>
        <TeamRow
          score={event.HOME_SCORE_CURRENT}
          teamImage={event?.HOME_IMAGES}
          teamName={event.HOME_NAME}
        />
        <TeamRow
          score={event.AWAY_SCORE_CURRENT}
          teamImage={event?.AWAY_IMAGES}
          teamName={event.AWAY_NAME}
        />
      </div>
      <EventStage />
    </Link>
  )
}

export default Row
