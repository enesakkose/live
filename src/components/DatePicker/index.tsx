"use client"
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../UI/Popover'
import { DayPicker } from 'react-day-picker'
import { useDateContext } from '@/context/DateContext'
import dayjs from 'dayjs'
import 'react-day-picker/dist/style.css'
import styles from '@/components/DatePicker/DatePicker.module.scss'

function DatePicker() {
  const { date, setDate } = useDateContext()
  const handleSelect = (selectedDate: Date | undefined) => {
    const formatSelectedDate = dayjs(selectedDate).format('YYYY-MM-DD')
    if(formatSelectedDate !== date) return setDate(formatSelectedDate)
  }

  return (
    <Popover>
      <PopoverTrigger variant='tertiary' icon='calendar4-week' size={16}>
        {date}
      </PopoverTrigger>
      <PopoverContent className={styles.datePickerContainer}>
        <DayPicker
          showOutsideDays={true}
          mode='single'
          selected={dayjs(date).toDate()}
          onSelect={handleSelect}
          className={styles.datePicker}
          classNames={{
            day: `${styles.day}`,
            nav_button_previous: `${styles.previous}`,
            nav_button_next: `${styles.next}`,
          }}
          modifiersClassNames={{
            selected: styles.selected,
            today: styles.today,
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
