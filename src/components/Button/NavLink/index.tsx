import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import styles from './NavLink.module.scss'

type NavLinkProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  active: boolean
  title?: string 
  className?: string
} & LinkProps


function NavLink({ active = false, children, variant = 'primary', className, ...props }: NavLinkProps) {
  return (
    <Link
    className={clsx(
      styles.navLink,
      styles[variant],
      active ? styles.active : '',
      className
    )}
    {...props}
  >
    {children}
  </Link>
  )
}

export default NavLink