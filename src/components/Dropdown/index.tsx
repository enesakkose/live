import React, { useId } from 'react'
import clsx from 'clsx'
import Button from '../UI/Button'
import { useDropdownContext } from '@/context/DropdownContext'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import { DropdownProvider } from '@/context/DropdownContext'
import { type ButtonPropTypes } from '../UI/Button'
import styles from './Dropdown.module.scss'

type DropdownElementType<T extends HTMLElement> = {
  children?: React.ReactNode
} & React.HTMLAttributes<T>

export const DropdownTrigger = ({ children, ...props }: Partial<ButtonPropTypes>) => {
  const { setOpen } = useDropdownContext()

  return (
    <Button onClick={() => setOpen((prev) => !prev)} {...props}>
      {children}
    </Button>
  )
}

export const DropdownItem: React.FC<DropdownElementType<HTMLLIElement>> = ({
  children,
  onClick,
  ...props
}) => {
  const { setOpen } = useDropdownContext()
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (onClick) { onClick(event) }
    setOpen(false)
  }

  return (
    <li onClick={handleClick} {...props}>
      {children}
    </li>
  )
}

export const DropdownList: React.FC<DropdownElementType<HTMLUListElement>> = ({
  children,
  className,
  ...props
}) => {
  const { open } = useDropdownContext()

  return (
    <>
      {open ? (
        <ul className={clsx(styles.dropdownList, className)} {...props}>
          {children}
        </ul>
      ) : null}
    </>
  )
}

const DropdownContainer: React.FC<DropdownElementType<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { setOpen } = useDropdownContext()
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <div ref={dropdownRef} className={clsx(styles.dropdownContainer, className)} {...props}>
      {children}
    </div>
  )
}

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const dropdownId = useId()

  return (
    <DropdownProvider key={dropdownId}>
      <DropdownContainer>{children}</DropdownContainer>
    </DropdownProvider>
  )
}

/*DESCRIPTION
- This Dropdown element  is unstyled, you can style it however you want.
- This component can develop with a lot of feature (checkboxDropdown, subContent etc. )
- React context is used for open, close trigger events
- Please add className for your custom style
- For usage: 
import {
  DropdownRoot,
  DropdownContainer,
  DropdownTrigger,
  DropdownList,
  DropdownItem,
} from '@/components/Dropdown'

const DropdownDemo = () => {
  return(
    <DropdownRoot>
      <DropdownTrigger>
        TriggerButton
      </DropdownTrigger>
      <DropdownList className={styles.selectRows}>
        <DropdownItem onClick={//your event handlers}>
          Select1
        </DropdownItem>
        <DropdownItem onClick={//your event handlers}>
          Select2
        </DropdownItem>
        <DropdownItem onClick={//your event handlers}>
          Select3
        </DropdownItem>
      </DropdownList>
    </DropdownRoot>
  )
}
*/
