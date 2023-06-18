'use client'
import React from 'react'
import Button from '@/components/UI/Button'
import DatePicker from '@/components/DatePicker'
import { useTimezoneContext, TIMEZONE } from '@/context/TimezoneContext'
import styles from './Timezone.module.scss'

function Timezone() {
  const { timezone, setTimezone } = useTimezoneContext()

  return (
    <div className={styles.timezone}>
      <div className={styles.filterActionBtns}>
        <Button
          active={timezone === TIMEZONE.ALL}
          onClick={() => setTimezone(TIMEZONE.ALL)}
          variant='primary'
        >
          all
        </Button>
        <Button
          active={timezone === TIMEZONE.LIVE}
          onClick={() => setTimezone(TIMEZONE.LIVE)}
          variant='primary'
        >
          live
        </Button>
      </div>
      {timezone === TIMEZONE.ALL && (
        <div className={styles.queryBtns}>
          <Button icon='search' />
          <DatePicker />
        </div>
      )}
    </div>
  )
}

export default Timezone
