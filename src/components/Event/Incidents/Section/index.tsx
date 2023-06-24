import React from 'react'
import clsx from 'clsx'
import GroupLabel from '@/components/GroupLabel'
import styles from './Section.module.scss'

type SectionPropsTypes = {
  children: React.ReactNode
  title: string | React.ReactNode
}

function Section({ children, title }: SectionPropsTypes) {
  return (
    <>
      <GroupLabel label={title} />
      {children}
    </>
  )
}

export default Section
