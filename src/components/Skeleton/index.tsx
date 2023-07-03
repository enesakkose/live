import React from 'react'
import clsx from 'clsx'
import styles from './Skeleton.module.scss'

type SkeletonPropsType = {
  width?: number | string
  height: number | string
  className?: string
}

function Skeleton({ width, height, className }: SkeletonPropsType) {
  return (
    <div 
      className={clsx(styles.skeleton, className)} 
      style={{ width, height }} 
    />
  )
}

export default Skeleton
