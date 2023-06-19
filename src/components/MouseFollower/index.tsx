'use client'
import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import { useMouseEffect } from '@/utils/hooks/useMouseEffect'
import styles from './MouseFollower.module.scss'

type MouseFollowerPropsTypes = {
  children: React.ReactNode
  className?: string
}

function MouseFollower<T extends HTMLDivElement>({
  children,
  className,
  ...props
}: MouseFollowerPropsTypes) {
  const { mouse, ref } = useMouseEffect<T>()

  return (
    <div
      ref={ref}
      className={clsx(styles.mouseFollower, className)}
      style={
        {
          '--mouseX': `${mouse.mouseX}px`,
          '--mouseY': `${mouse.mouseY}px`,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
}

export default MouseFollower

/*
const Element = as as keyof JSX.IntrinsicElements
ref={ref}
className={clsx(styles.mouseFollower, className)}
style={
  {
    '--mouseX': `${mouse.mouseX}px`,
    '--mouseY': `${mouse.mouseY}px`,
  } as CSSProperties
}*/
