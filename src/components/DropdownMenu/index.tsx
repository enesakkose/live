'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import styles from './DropdownMenu.module.scss'

type ComponentPropsType = {
  children: React.ReactNode
  className?: string
}

function DropdownMenu({  children, className }: ComponentPropsType) {
  const [open, setOpen] = useState(false)
  const dropdownListRef = useClickOutside<HTMLDivElement>(() => setOpen(false))
  
  const Item = ({
    children,
    className,
  }: ComponentPropsType) => {
    return <li className={clsx(styles.item, className)}>{children}</li>
  }
  
  function List ({
    children,
    className,
  }: ComponentPropsType) {
    return <ul className={clsx(styles.dropdownList, className)}>{children}</ul>
  }

  const TriggerButton = ({ children, className }: ComponentPropsType) => {
    return (
      <Button className={clsx(styles.trigger, className)} onClick={() => setOpen((prev) => !prev)}>
        {children}
      </Button>
    )
  }

  const ListContainer = ({ children, className }: ComponentPropsType) => {
    return <>{open && <div className={clsx(styles.ListContainer, className)}>{children}</div>}</>
  }

  return (
    <div ref={dropdownListRef} className={clsx(styles.dropdownMenu, className)}>
      {children}
    </div>
  )
}

export default DropdownMenu