import React from 'react'
import clsx from 'clsx'
import GroupLabel from '@/components/GroupLabel'
import styles from './Section.module.scss'

type SectionPropsTypes = {
  children: React.ReactNode
  title: string | React.ReactNode
  className?: string
}

function Section({ children, title, className }: SectionPropsTypes) {
  return (
    <div className={clsx(styles.incidentSection, className)}>
      <GroupLabel label={title} />
      {children}
    </div>
  )
}

export default Section
