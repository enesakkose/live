"use client"

import React, { useState } from 'react'
import Button from '@/components/Button'
import styles from '@/components/Timezone/Timezone.module.scss'

type TimezoneType = 'all' | 'live' | 'scheduled'

function Timezone() {
  const [ timezone, setTimezone ] = useState<TimezoneType>('all')

  return (
    <div className={styles.timezone}>
      <Button variant='secondary'>
        all
      </Button>
      <Button variant='secondary'>
        live
      </Button>
      <Button variant='secondary'>
        scheduled
      </Button>
    </div>
  )
}

export default Timezone