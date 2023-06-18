import React from 'react'
import RowLoading from '../Row/loading'
import Skeleton from '@/components/Skeleton'

function Loading() {
  return (
    <div>
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
