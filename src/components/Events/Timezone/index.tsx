import React, { useState } from 'react'
import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import styles from '@/components/Events/Timezone/Timezone.module.scss'


function Timezone() {

  return (
    <div className={styles.timezone}>
      <div className={styles.filterActionBtns}>
        <Button variant='secondary'>all</Button>
        <Button variant='secondary'>live</Button>
      </div>
      <DatePicker />
    </div>
  )
}

export default Timezone
