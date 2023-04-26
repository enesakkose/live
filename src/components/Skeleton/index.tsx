import React from 'react'
import clsx from 'clsx'
import styles from './Skeleton.module.scss'

type SkeletonPropsType = {
  width?: number
  height: number
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
