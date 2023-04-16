import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import type { IconNameType } from '@/types'
import styles from '@/components/Button/Button.module.scss'
import Icon from '@/components/Icon'

type ButtonTypes = {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'underline' | 'icon'
  active?: boolean
  icon?: IconNameType
  size?: number
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  children,
  variant = 'primary',
  active = false,
  icon,
  className,
  size,
  ...props
}: ButtonTypes) {
  if (icon)
    return (
      <button
        type='button'
        className={clsx(styles.button, styles[variant], className)}
        {...props}
      >
        <Icon icon={icon} size={size} />
        {children}
      </button>
    )

  return (
    <button
      type='button'
      className={clsx(
        styles.button,
        styles[variant],
        active ? styles.active : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
