import React from 'react'
import Image from 'next/image'
import type { Event } from '@/types'
import clsx from 'clsx'
import Button from '@/components/Button'
import dayjs from 'dayjs'
import { useGetEventTime } from '@/utils/hooks/useGetEventTime'
import { getFormatTime } from '@/utils/helpers/getFormatTime'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from '@/components/Events/Row.module.scss'

type TeamRowPropsType = {
  score: string | number
  teamImage: string[] | null
  teamName: string
  stage: string
}

function TeamRow({ score, teamImage, teamName, stage }: TeamRowPropsType) {
  const finishOrScheduled = stage === 'SCHEDULED' || stage === 'FINISHED'

  return (
    <div className={styles.teamRow}>
      <span
        className={clsx(
          styles.teamScore,
          finishOrScheduled ? styles.finishOrScheduled : ''
        )}
      >
        {stage === 'SCHEDULED' ? '-' : score}
      </span>
      {teamImage && (
        <Image src={teamImage[0]} width={18} height={18} alt='logo' />
      )}
      <span className={styles.teamName}>{teamName}</span>
    </div>
  )
}

function EventStage({
  stage,
  startTime,
}: {
  stage?: string | null
  startTime: number
}) {
  const finishOrScheduled = stage === 'SCHEDULED' || stage === 'FINISHED'
  const t = useGetEventTime(1680222702)
  //buradaki start timeı unix ile ver 
  // compore startTime with now date
  // 60.dk sıfırlanmasın
  // 00:00 şeklinde yaz
  console.log(t)

  
  return (
    <span
      className={clsx(
        styles.stage,
        finishOrScheduled ? styles.finishOrScheduled : ''
      )}
    >
      {stage === 'SCHEDULED'
        ? getFormatTime(startTime)
        : stage === 'FINISHED'
        ? 'Finished'
        : 78}
    </span>
  )
}

function Row({ event, href }: { event: Event; href: Url }) {
  return (
    <Link href={href} className={styles.eventRow}>
      <div className={styles.teams}>
        <TeamRow
          score={event.HOME_SCORE_CURRENT}
          teamImage={event?.HOME_IMAGES}
          teamName={event.HOME_NAME}
          stage={event.STAGE}
        />
        <TeamRow
          score={event.AWAY_SCORE_CURRENT}
          teamImage={event?.AWAY_IMAGES}
          teamName={event.AWAY_NAME}
          stage={event.STAGE}
        />
      </div>
      <EventStage stage={event.STAGE} startTime={event.START_TIME} />
    </Link>
  )
}

export default Row
