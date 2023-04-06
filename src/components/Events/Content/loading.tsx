import React from 'react'
import TimezoneLoading from '../Timezone/loading'
import RowLoading from '../Row/loading'
import Skeleton from '@/components/Skeleton'

function Loading() {
  return (
    <div>
      <TimezoneLoading />
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            <Skeleton height={33} />
            <RowLoading />
            <RowLoading />
            <RowLoading />
            <RowLoading />
          </React.Fragment>
        ))}
    </div>
  )
}

export default Loading
