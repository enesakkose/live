'use client'
import React from 'react'
import Button from '@/components/UI/Button'
import DatePicker from '@/components/DatePicker'
import { useTimezoneContext, TIMEZONE } from '@/context/TimezoneContext'
import styles from './Timezone.module.scss'

function Timezone() {
  const { timezoneStatus, setTimezoneStatus } = useTimezoneContext()
  const TimezoneStatusTabs = [
    { name: 'all', statusType: TIMEZONE.ALL },
    { name: 'live', statusType: TIMEZONE.LIVE },
  ]

  return (
    <div className={styles.timezone}>
      <div className={styles.filterActionBtns}>
        {TimezoneStatusTabs.map((tab) => (
          <Button
            key={tab.name}
            active={timezoneStatus === tab.statusType}
            onClick={() => setTimezoneStatus(tab.statusType)}
            variant='primary'
          >
            {tab.name}
          </Button>
        ))}
      </div>
      {timezoneStatus === TIMEZONE.ALL && (
        <div className={styles.queryBtns}>
          <Button icon='search' />
          <DatePicker />
        </div>
      )}
    </div>
  )
}

export default Timezone
