import React, { ReactNode } from 'react'
import styles from '@/components/RoundedImg/RoundedImg.module.scss'

function RoundedImg({
  width,
  height,
  full = false,
  children,
}: {
  width: string | number,
  height: string | number
  full?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={styles.roundedImg}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </div>
  )
}

export default RoundedImg
