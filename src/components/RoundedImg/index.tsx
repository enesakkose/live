import React, { ReactNode } from 'react'
import clsx from 'clsx'
import styles from '@/components/RoundedImg/RoundedImg.module.scss'

function RoundedImg({
  width,
  height,
  full = false,
  children,
  className
}: {
  width: string | number,
  height: string | number
  full?: boolean
  children: ReactNode
  className?: string
}) {
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
