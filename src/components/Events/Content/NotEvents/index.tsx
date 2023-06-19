import React from 'react'
import Icon from '@/components/UI/Icon'
import styles from './NotEvents.module.scss'

function NotEvents({ category }: { category: string }) {
  return (
    <div className={styles.notEvents}>
      <Icon icon={category} size={72} className={styles.categoryIcon} />
      <span className={styles.infoText}>Very quiet. Please select a different date.</span>
    </div>
  )
}

export default NotEvents
