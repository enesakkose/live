import React, { useId } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import { usePopoverContext, PopoverProvider } from '@/context/PopoverContext'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import { type ButtonPropTypes } from '../Button'
import styles from './Popover.module.scss'

type PopoverElementType = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const PopoverTrigger = ({ children, ...props }: Partial<ButtonPropTypes>) => {
  const { setOpen } = usePopoverContext()

  return(
    <Button onClick={() => setOpen(prev => !prev)} {...props}>
      {children}
    </Button>
  )
}

export const PopoverContent = ({ children, className, ...props }: PopoverElementType) => {
  const { open } = usePopoverContext()

  return (
    <>
      {open ? ( 
        <div className={clsx(styles.popoverContent, className)} {...props}>
          {children}
        </div>
      ) : null}
    </>
  )
}

const PopoverContainer = ({ children, ...props }: PopoverElementType) => {
  const { setOpen } = usePopoverContext()
  const popoverRef = useClickOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <div ref={popoverRef} className={styles.popoverContainer} {...props}>
      {children}
    </div>
  )
}

export const Popover = ({ children }: { children: React.ReactNode }) => {
  const popoverId = useId()

  return (
    <PopoverProvider key={popoverId}>
      <PopoverContainer>{children}</PopoverContainer>
    </PopoverProvider>
  )
}
