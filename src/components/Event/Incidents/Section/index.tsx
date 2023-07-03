import React from 'react'
import GroupLabel from '@/components/GroupLabel'

type SectionPropsTypes = {
  children?: React.ReactNode
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
