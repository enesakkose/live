import React, { useState } from 'react'
import Button from '@/components/Button'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import styles from '@/components/DatePicker/DatePicker.module.scss'

//date picker range should be max 7 - min -7 for instances: 0 = today, -1 = yesterday, 1 = tomorrow 

function DatePicker() {
  const [ open, setOpen ]  = useState(false)
  const datePickerRef = useClickOutside<HTMLDivElement>(() => setOpen(false))
  const handleOpen = () => setOpen(prev => !prev)
  
  return (
    <div ref={datePickerRef}  className={styles.datePicker}>
      <Button icon='left-chevron' size={20} />
      <Button onClick={handleOpen}>
        30/3  Thursday
      </Button>
      {open && <div className={styles.dates}>
      <Button   className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button   className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      <Button  className={styles.date}>
        30/3 <br/> Thr
      </Button>
      </div>}
      <Button icon='right-chevron' size={20} />
    </div>
  )
}

export default DatePicker