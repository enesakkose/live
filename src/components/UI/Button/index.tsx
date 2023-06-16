import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/UI/Icon'
import { Slot } from '@radix-ui/react-slot'
import { type IconNameType } from '@/components/UI/Icon'
import styles from './Button.module.scss'

export type ButtonPropTypes = {
  children: React.ReactNode
  variant: 'unstyled' | 'primary' | 'secondary' | 'tertiary' | 'underline' | 'icon'
  active: boolean
  asChild: boolean
  icon: IconNameType
  size: number
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, Partial<ButtonPropTypes>>((props, ref) => {
  const {
    children,
    variant = 'unstyled',
    active = false,
    asChild = false,
    icon,
    className,
    size,
    ...rest
  } = props
  const Element = asChild ? Slot : 'button'

  if (icon)
    return (
      <Element
        type='button'
        className={clsx(styles.button, styles.icon, className)}
        ref={ref}
        {...rest}
      >
        <Icon icon={icon} size={size} />
        {children}
      </Element>
    )

  return (
    <Element
      type='button'
      className={clsx(styles.button, styles[variant], active ? styles.active : '', className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Element>
  )
})

Button.displayName = 'Button'

export default Button
