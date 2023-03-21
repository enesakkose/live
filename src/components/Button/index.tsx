import React, { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from '@/components/Button/Button.module.scss'

type ButtonTypes = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'underline' | 'icon',
  href?: Url
}

function Button({ children, variant = 'primary', href, ...props }: ButtonTypes) {
  if (href)
    return (
      <Link href={href} {...props}>
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
