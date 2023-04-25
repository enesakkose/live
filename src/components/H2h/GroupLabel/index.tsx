import React from 'react'
import styles from './GroupLabel.module.scss'

function GroupLabel({ label }: { label: string }) {
  return <div className={styles.groupLabel}>{label}</div>
}

export default GroupLabel
