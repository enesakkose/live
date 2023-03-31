"use client"
import React, { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import type { IconNameType } from '@/types'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from '@/components/Button/Button.module.scss'
import Icon from '@/components/Icon'

type ButtonTypes = {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'underline' | 'icon',
  active?: boolean,
  icon?: IconNameType,
  size?: number,
  href?: Url,
  onClick?: () => void,
  className?: string
}

function Button({ children, variant = 'primary', active = false, href, className, icon, size, ...props }: ButtonTypes) {
  if (href)
    return (
      <Link href={href} className={clsx(styles.button, styles[variant], active ? styles.active : '')} {...props}>
        {children}
      </Link>
    )
  
  if(icon)
    return(
      <button
      type='button'
      className={clsx(styles.button, className, styles[variant])}
      {...props}
    >
      <Icon icon={icon} size={size}/>
    </button>
    )

  return (
    <button
      type='button'
      className={clsx(styles.button, className, styles[variant])}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
