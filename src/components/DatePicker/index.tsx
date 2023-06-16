import React, { useState } from 'react'
import Button from '@/components/UI/Button'
import { Dropdown, DropdownTrigger, DropdownList } from '../Dropdown'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import styles from '@/components/DatePicker/DatePicker.module.scss'

function DatePicker() {
  const [selected, setSelected] = React.useState<Date>()
  const [open, setOpen] = useState(false)
  const datePickerRef = useClickOutside<HTMLDivElement>(() => setOpen(false))
  const handleOpen = () => setOpen((prev) => !prev)

  return (
    <Dropdown>
      <DropdownTrigger icon='calendar4-week' size={20} />
      <DropdownList className={styles.datePickerContainer}>
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={setSelected}
          className={styles.datePicker}
          modifiersClassNames={{
            selected: styles.selected,
            today: styles.today,
            months: styles.month,
          }}
        />
      </DropdownList>
    </Dropdown>
  )
}

export default DatePicker
