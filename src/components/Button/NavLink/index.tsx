import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import styles from './NavLink.module.scss'

type NavLinkProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  active: boolean
} & LinkProps


function NavLink({ active = false, children, variant = 'primary', size = 'medium', ...props }: NavLinkProps) {
  return (
    <Link
    className={clsx(
      styles.navLink,
      styles[variant],
      styles[size],
      active ? styles.active : ''
    )}
    {...props}
  >
    {children}
  </Link>
  )
}

export default NavLink