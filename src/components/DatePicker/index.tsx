import React from 'react'
import Button from '@/components/Button'
import styles from '@/components/DatePicker/DatePicker.module.scss'

function DatePicker() {
  //date picker range should be max 7 - min -7 for instances: 0 = today, -1 = yesterday, 1 = tomorrow 
  return (
    <div className={styles.datePicker}>
      <Button icon='left-chevron' size={20} />
      DatePicker
      <Button icon='right-chevron' size={20} />
    </div>
  )
}

export default DatePicker