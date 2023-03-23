"use client"
import React, { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from '@/components/Button/Button.module.scss'

type ButtonTypes = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'underline' | 'icon',
  active?: boolean
  href?: Url
}

function Button({ children, variant = 'primary', active = false, href, ...props }: ButtonTypes) {
  const activeSegment = useSelectedLayoutSegment()
  if (href)
    return (
      <Link href={href} className={clsx(styles.button, styles[variant], active ? styles.active : '')} {...props}>
        {children}
      </Link>
    )

  return (
    <button
      type='button'
      className={clsx(styles.button, styles[variant])}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
