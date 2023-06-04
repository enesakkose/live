import React from 'react'
import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import styles from './Timezone.module.scss'

function Timezone({
  timezone,
  setTimezone,
}: {
  timezone: 'all' | 'live'
  setTimezone: React.Dispatch<React.SetStateAction<'all' | 'live'>>
}) {
  return (
    <div className={styles.timezone}>
      <div className={styles.filterActionBtns}>
        <Button active={timezone === 'all'} onClick={() => setTimezone('all')} variant='primary'>
          all
        </Button>
        <Button active={timezone === 'live'} onClick={() => setTimezone('live')} variant='primary'>
          live
        </Button>
      </div>
      <DatePicker />
    </div>
  )
}

export default Timezone
