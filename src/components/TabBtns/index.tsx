'use client'
import React from 'react'
import NavLink from '../UI/NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './TabBtns.module.scss'

type TabBtnsType = {
  tabName: string
  href: string
  segment: string
}[]

function TabBtns({ tabBtns }: { tabBtns: TabBtnsType }) {
  const segment = useSelectedLayoutSegment()

  return (
    <div className={styles.tabBtns}>
      {tabBtns.map((tab) => (
        <NavLink
          active={tab.segment == segment}
          key={tab.tabName}
          href={tab.href}
          variant='secondary'
        >
          {tab.tabName}
        </NavLink>
      ))}
    </div>
  )
}

export default TabBtns
