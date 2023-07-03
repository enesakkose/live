import React from 'react'
import GroupLabel from '@/components/GroupLabel'
import styles from './Section.module.scss'

type SectionPropsTypes = {
  children?: React.ReactNode
  title: string | React.ReactNode
}

function Section({ children, title }: SectionPropsTypes) {
  return (
    <div className={styles.section}>
      <span>{title}</span>
      {children}
    </div>
  )
}

export default Section
