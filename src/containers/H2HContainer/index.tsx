'use client'
import React from 'react'
import { gettH2HEvents } from '@/services/sports'
import clsx from 'clsx'
import { getDate } from '@/utils/helpers/getFormatTime'
import Link from 'next/link'
import Button from '@/components/Button'
import NavLink from '@/components/Button/NavLink'
import ResultBadge from '@/components/ResultBadge'
import GroupLabel from '@/components/H2h/GroupLabel'
import Row from '@/components/H2h/Row'
import styles from './H2HContainer.module.scss'

function H2HContainer({ h2h, eventId }: { h2h: number; eventId: string }) {
  const { data: H2HEvents } = gettH2HEvents(eventId)
  
  return (
    <div className={styles.h2hContainer}>
      <div className={styles.tabBtns}>
        {H2HEvents?.map((event, index) => (
          <NavLink
            key={index}
            size='xsmall'
            active={Number(index) === Number(h2h)}
            href={`/event/${eventId}/h2h/${index}`}
            variant='secondary'
          >
            {event.TAB_NAME}
          </NavLink>
        ))}
      </div>
      <div className={styles.h2hEventsGroup}>
        {H2HEvents?.[h2h].GROUPS.map((group) => (
          <div className={styles.group}>
            <GroupLabel label={group.GROUP_LABEL}/>
            <ul className={styles.groupList}>
              {group.ITEMS.map((match) => (
                <Row/>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default H2HContainer
