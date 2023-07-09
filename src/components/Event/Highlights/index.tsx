'use client'
import React from 'react'
import Icon from '@/components/UI/Icon'
import Link from 'next/link'
import Loading from './loading'
import { getTimeFromNow } from '@/utils/helpers/getFormatTime'
import { useGetEventHighlights } from '@/services/sportsv2'
import styles from './Highlights.module.scss'

type HighlightsPropsType = { eventId: number }

function Highlights({ eventId }: HighlightsPropsType) {
  const { data: highlights = [], isLoading, isError } = useGetEventHighlights(eventId)

  if (isLoading) return <Loading />
  if (isError) return null

  const shareTime = getTimeFromNow(highlights[0].createdAtTimestamp)

  return (
    <div className={styles.highlights}>
      <Link href={highlights[0].url} target='_blank' className={styles.linkBtn}>
        <img
          className={styles.thumbnail}
          src={`${highlights[0].thumbnailUrl}`}
          alt={highlights[0].title}
        />
        <Icon icon='play' className={styles.playIcon} />
      </Link>
      <div className={styles.info}>
        <span className={styles.title}>Highlight</span>
        <span className={styles.eventScore}>{highlights[0].title}</span>
        <span className={styles.shareTime}>{shareTime}</span>
      </div>
    </div>
  )
}

export default Highlights
