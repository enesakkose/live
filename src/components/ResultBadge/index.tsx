import React from 'react'
import clsx from 'clsx'
import { type HResult } from '@/types/H2HTypes'
import styles from './ResultBadge.module.scss'

function ResultBadge({ result }: { result: HResult }) {
  return (
    <div className={clsx(styles.resultBadge)}>
      <span className={clsx(styles.badge, styles[result])}>{result?.[0]}</span>
    </div>
  )
}

export default ResultBadge
