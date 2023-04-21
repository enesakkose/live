"use client"
import React from 'react'
import NavLink from '@/components/Button/NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './Header.module.scss'

function StatsTabs({id}: {id: string}) {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  const tabs = [
    {}
  ]

  return (
    <div className={styles.statsTabs}>
      <NavLink size='small' href={`/event/${id}/summary`} active={segment === 'summary'} >
        MATCH
      </NavLink>
      <NavLink size='small' href={`/event/${id}/h2h`} active={segment === 'h2h'} >
        H2H
      </NavLink>
      <NavLink size='small' href={`/event/${id}/standings`} active={segment === 'standings'} >
        STANDINGS
      </NavLink>
    </div>
  )
}

export default StatsTabs