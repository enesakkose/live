'use client'
import React from 'react'
import clsx from 'clsx'
import { useGetEventTime } from '@/utils/hooks/useGetEventTime'
import { useGetWindowSize } from '@/utils/helpers/getWindowSize'
import { getStartTime } from '@/utils/helpers/getFormatTime'
import { getStageType } from '@/utils/helpers/getStageType'
import { type Status, EVENT_STATUS } from '@/types/Events'
import styles from './EventStatus.module.scss'

type EventStatusPropsType = {
  status: Status
  startTime: number
  categoryFootball: boolean
  currentPeriodStartTime: number
  className?: string
}

const CurrentEventTime = ({
  currentPeriodStartTime,
  status,
}: Pick<EventStatusPropsType, 'currentPeriodStartTime' | 'status'>) => {
  const currentTime = useGetEventTime(currentPeriodStartTime, status.description)

  return (
    <div className={styles.time}>
      {currentTime}
      <span className={styles.liveBlink}>&apos;</span>
    </div>
  )
}

function EventStatus({
  status,
  startTime,
  categoryFootball,
  currentPeriodStartTime,
  className,
}: EventStatusPropsType) {
  const inprogress = status.type === EVENT_STATUS.INPROGRESS
  const SM = useGetWindowSize('SM')
  const eventStartTime = getStartTime(startTime)
  const statusDescription = getStageType(status.description, SM)
  const footballHalfs = [
    EVENT_STATUS.FIRST_HALF,
    EVENT_STATUS.SECOND_HALF,
    EVENT_STATUS.FIRST_EXTRA,
    EVENT_STATUS.SECOND_EXTRA,
  ].includes(status.description as EVENT_STATUS)

  return (
    <div className={clsx(styles.stage, !inprogress ? styles.finishOrScheduled : '', className)}>
      {status.description === EVENT_STATUS.NOT_STARTED 
      ? <span className={styles.eventStartTime}>{eventStartTime}</span>
      : categoryFootball && inprogress && footballHalfs 
        ? <CurrentEventTime status={status} currentPeriodStartTime={currentPeriodStartTime} />
        : <span className={styles.status}>{statusDescription}</span>
      }
    </div>
  )
}

export default EventStatus