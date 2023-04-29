import React from 'react'
import styles from './GroupLabel.module.scss'

type GroupLabelPropsTypes = {
  label: string
  children?: React.ReactNode
}

function GroupLabel({ label, children }: GroupLabelPropsTypes) {
  return (
    <div className={styles.groupLabel}>
      {label}
      {children}
    </div>
  )
}

export default GroupLabel
