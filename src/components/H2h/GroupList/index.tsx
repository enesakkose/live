'use client'
import React, { useState } from 'react'
import Button from '@/components/Button'
import Row from '@/components/H2h/Row'
import type { Group } from '@/types/H2HTypes'
import styles from './GroupList.module.scss'

//This component created because the api endpoint not suitable for useInfiniteQuery feature of react-query

function GroupList({ group }: { group: Group }) {
  const [itemCount, setItemCount] = useState(5)
  const showLoadMoreBtn =
    itemCount !== group.ITEMS.length && group.ITEMS.length > 5

  return (
    <>
      <ul className={styles.groupList}>
        {group.ITEMS.slice(0, itemCount).map((event) => (
          <Row key={event.EVENT_ID} event={event} />
        ))}
      </ul>
      {showLoadMoreBtn && (
        <Button
          variant='underline'
          className={styles.loadMoreBtn}
          icon='chevron'
          size={20}
          onClick={() => setItemCount((prev) => prev + 5)}
        >
          Show More
        </Button>
      )}
    </>
  )
}

export default GroupList
