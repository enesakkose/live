'use client'
import React, { useId } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import { useTooltipContext, TooltipProvider } from '@/context/TooltipContext'
import { Slot } from '@radix-ui/react-slot'
import { type ButtonPropTypes } from '../Button'
import styles from './Tooltip.module.scss'

type TooltipElementType<T = HTMLDivElement> = {
  children: React.ReactNode
  asChild?: boolean
} & React.HTMLAttributes<T>


export const TooltipTrigger = ({ children, className, ...props }: Partial<ButtonPropTypes>) => {
  const { setIsHovered } = useTooltipContext()
  
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      className={clsx(styles.tooltipTrigger, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

const TooltipContainer = ({ children, className }: TooltipElementType) => {
  const { setIsHovered } = useTooltipContext()

  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(styles.tooltipContainer, className)}
    >
      {children}
    </div>
  )
}

export const TooltipContent = ({ children, asChild = false, className }: TooltipElementType) => {
  const Component = asChild ? Slot : 'div'
  const { isHovered } = useTooltipContext()
  return (
    <>
      {isHovered ? (
        <Component className={clsx(styles.tooltipContent, className)}>{children}</Component>
      ) : null}
    </>
  )
}

export const Tooltip = ({ children, className, ...props }: TooltipElementType) => {
  const id = useId()

  return (
    <TooltipProvider key={id}>
      <TooltipContainer className={className} {...props}>
        {children}
      </TooltipContainer>
    </TooltipProvider>
  )
}
