'use client'
import React from 'react'
import NavLink from '@/components/Button/NavLink'
import GroupLabel from '@/components/H2h/GroupLabel'
import GroupList from '@/components/H2h/GroupList'
import { useGetH2HEvents } from '@/services/sports'
import styles from './H2HContainer.module.scss'

function H2HContainer({ h2h, eventId }: { h2h: number; eventId: string }) {
  const { data: H2HEvents } = useGetH2HEvents(eventId)

  return (
    <div className={styles.h2hContainer}>
      <div className={styles.tabBtns}>
        {H2HEvents?.map((event, index) => (
          <NavLink
            key={event.TAB_NAME}
            size='xsmall'
            active={Number(index) === Number(h2h)}
            href={`/event/${eventId}/h2h/${index}`}
            variant='secondary'
          >
            {event.TAB_NAME}
          </NavLink>
        ))}
      </div>
      {H2HEvents?.[h2h].GROUPS.map((group) => (
        <div key={group.GROUP_LABEL} className={styles.group}>
          <GroupLabel label={group.GROUP_LABEL} />
          <GroupList group={group}/>
        </div>
      ))}
    </div>
  )
}

export default H2HContainer
