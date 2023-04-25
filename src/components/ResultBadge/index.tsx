import React from 'react'
import clsx from 'clsx'
import { type HResult } from '@/types/H2HTypes'
import styles from './ResultBadge.module.scss'

function ResultBadge({ result }: { result: string }) {
  return (
    <div className={clsx(styles.resultBadge, styles[result])}>
      <span className={styles.badge}>{result?.[0]}</span>
    </div>
  )
}

export default ResultBadge
