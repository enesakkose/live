import React, { useId } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import Icon from '../Icon'
import { AccordionProvider, useAccordionContext } from '@/context/AccordionContext'
import { type ButtonPropTypes } from '../Button'
import styles from './Accordion.module.scss'

type AccordionElementType = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const AccordionContainer = ({ children, className }: AccordionElementType) => {
  const { open } = useAccordionContext()

  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={clsx(styles.accordionContainerr, className)}
    >
      {children}
    </div>
  )
}

export const AccordionContent = ({ children }: AccordionElementType) => {
  const { open } = useAccordionContext()

  return (
    <>
      {open ? (
        <div data-state={open ? 'open' : 'closed'} className={styles.accordionContentt}>
          {children}
        </div>
      ) : null}
    </>
  )
}

export const AccordionTrigger = ({ children, className }: Partial<ButtonPropTypes>) => {
  const { open, setOpen } = useAccordionContext()
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Button
      data-state={open ? 'open' : 'closed'}
      onClick={handleOpen}
      className={clsx(styles.accordionTrigger, className)}
    >
      {children}
      <Icon icon='chevron' size={20} className={styles.chevronBtnn} />
    </Button>
  )
}

export const Accordion = ({ children, className }: AccordionElementType) => {
  const id = useId()

  return (
    <AccordionProvider key={id}>
      <AccordionContainer className={className}>{children}</AccordionContainer>
    </AccordionProvider>
  )
}
