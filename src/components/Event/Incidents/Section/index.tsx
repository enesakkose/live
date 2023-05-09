import React from 'react'
import GroupLabel from '@/components/GroupLabel'
import styles from './Section.module.scss'

type SectionPropsTypes = {
  children: React.ReactNode
  title: string
}

function Section({ children, title }: SectionPropsTypes) {
  return (
    <div className={styles.incidentSection}>
      <GroupLabel label={title}/>
      {children}
    </div>
  )
}

export default Section