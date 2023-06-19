import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import Link, { type LinkProps } from 'next/link'
import styles from './NavLink.module.scss'

type NavLinkPropsType = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  active: boolean
  className?: string
} & LinkProps

function NavLink({ active, variant = 'primary', children, ...props }: NavLinkPropsType) {
  return (
    <Button asChild className={clsx(styles.navLink, styles[variant], active ? styles.active : '')}>
      <Link {...props}>{children}</Link>
    </Button>
  )
}

export default NavLink
