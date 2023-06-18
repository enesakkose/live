"use client"
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownList } from '../Dropdown'
import { Popover, PopoverContent, PopoverTrigger } from '../UI/Popover'
import { DayPicker } from 'react-day-picker'
import { useDateContext } from '@/context/DateContext'
import dayjs from 'dayjs'
import 'react-day-picker/dist/style.css'
import styles from '@/components/DatePicker/DatePicker.module.scss'

function DatePicker() {
  const { date, setDate } = useDateContext()
  const handleSelect = (selectedDate: any) => {
    const formatSelectedDate = dayjs(selectedDate).unix() 
    setDate(formatSelectedDate)
  }

  return (
    <Popover>
      <PopoverTrigger icon='calendar4-week' size={20} />
      <PopoverContent  className={styles.datePickerContainer}>
        <DayPicker
          showOutsideDays={true}
          mode='single'
          selected={dayjs.unix(date).toDate()}
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
