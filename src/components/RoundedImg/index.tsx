import React, { ReactNode } from 'react'
import clsx from 'clsx'
import styles from '@/components/RoundedImg/RoundedImg.module.scss'

type RoundedImg = {
  width: string | number
  height: string | number
  children: ReactNode
  className?: string
}

function RoundedImg({ width, height, children, className }: RoundedImg) {
  return (
    <div
      className={clsx(styles.roundedImg, className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </div>
  )
}

export default RoundedImg
