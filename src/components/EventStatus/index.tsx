"use client"
import React from 'react'
import clsx from 'clsx'
import { useGetEventTime } from '@/utils/hooks/useGetEventTime'
import { useGetWindowSize } from '@/utils/helpers/getWindowSize'
import { getStartTime } from '@/utils/helpers/getFormatTime'
import { getStageType } from '@/utils/helpers/getStageType'
import { type Status } from '@/types/Events'
import styles from './EventStatus.module.scss'

type EventStagePropsType = {
  status: Status
  startTime: number
  categoryFootball: boolean
  currentPeriodStartTime: number
  className?: string
}

const CurrentEventTime = ({
  currentPeriodStartTime,
  status,
}: Pick<EventStagePropsType, 'currentPeriodStartTime' | 'status'>) =>  {
  return (
    <div className={styles.time}>
      {useGetEventTime(currentPeriodStartTime, status.description)}
      <span className={styles.liveBlink}>&apos;</span>
    </div>
  )
}

function EventStatus({
  status,
  startTime,
  categoryFootball,
  currentPeriodStartTime,
  className
}: EventStagePropsType) {
  const inprogress = status.type === 'inprogress'
  const playing = status.code === 7 || status.code === 6
  const SM = useGetWindowSize('SM')

  return (
    <div className={clsx(styles.stage, !inprogress ? styles.finishOrScheduled : '', className)}>
      {status.description === 'Not started' ? (
        getStartTime(startTime)
      ) : categoryFootball && inprogress && playing ? (
        <CurrentEventTime status={status} currentPeriodStartTime={currentPeriodStartTime} />
      ) : (
        <span className={styles.status}>{getStageType(status.description, SM)}</span>
      )}
    </div>
  )
}

export default EventStatus