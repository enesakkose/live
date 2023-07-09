import React from 'react'
import clsx from 'clsx'
import styles from './Rating.module.scss'

type RatingPropsType = {
  rating: number
  width?: string | number
  height?: string | number
  className?: string
}

function Rating({ rating, width, height, className }: RatingPropsType) {
  return (
    <div
      className={clsx(
        styles.rating,
        rating <= 6 ? styles.low : rating >= 6 && rating < 8 ? styles.medium : styles.high,
        className
      )}
      title={`${rating}`}
      style={{ width: width, height: height }}
    >
      {rating}
    </div>
  )
}

export default Rating
