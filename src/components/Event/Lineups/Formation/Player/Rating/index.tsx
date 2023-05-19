import React from 'react'
import clsx from 'clsx'
import styles from './Rating.module.scss'

function Rating({ rating, className }: { rating: number, className?: string }) {
  return (
    <div
      className={clsx(
        styles.rating,
        rating <= 6 ? styles.low : rating >= 6 && rating < 8 ? styles.medium : styles.high,
        className
      )}
      title={`${rating}`}
    >
      {rating}
    </div>
  )
}

export default Rating
