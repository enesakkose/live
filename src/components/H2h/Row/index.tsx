import React from 'react'
import clsx from 'clsx'
import ResultBadge from '@/components/ResultBadge'
import Link from 'next/link'
import styles from './Row.module.scss'

function Row() {
  const EventDate = () => {
    return <span className={styles.eventDate}>25.04.2023</span>
  }

  const Team = ({ participant }: { participant: 'home' | 'away'}) => {
    return (
      <>
        <span className={clsx(styles.team, styles[participant])}>Monaco</span>
        <span className={clsx(styles.score, styles[participant])}>68</span>
      </>
    )
  }
  return (
    <Link href='/' className={styles.h2hRow}>
      <EventDate />
      <Team participant='home' />
      <Team participant='away' />
      <ResultBadge result='WIN' />
    </Link>
  )
}

export default Row
