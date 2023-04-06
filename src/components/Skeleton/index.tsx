import React from 'react'
import styles from './Skeleton.module.scss'

type SkeletonPropsType = {
  width?: number
  height: number
}

function Skeleton({ width, height }: SkeletonPropsType) {
  return (
    <div 
      className={styles.skeleton} 
      style={{ width, height }} 
    />
  )
}

export default Skeleton
