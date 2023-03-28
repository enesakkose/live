import React, {
  PropsWithChildren,
  ReactNode,
  useRef,
  cloneElement,
  ReactElement,
  forwardRef,
  useState,
  Children,
} from 'react'
import clsx from 'clsx'
import ChevronBtn from '@/components/IconButtons/ChevronBtn'
import styles from '@/components/AccordionMenu/AccordionMenu.module.scss'

type PropsType = {
  children: ReactNode
  className?: string
}

export const AccordionHeader = ({ children, className }: PropsType) => {
  return (
    <div className={clsx(styles.accordionHeader, className)}>
      {children}
      <ChevronBtn />
    </div>
  )
}

export const AccordionItem = ({ children, className }: PropsType) => {
  return <div className={clsx(styles.accordionItem, className)}>{children}</div>
}

export const AccordionContent = ({ children, className }: PropsType) => {
  return (
    <div className={clsx(styles.accordionContent, className)}>{children}</div>
  )
}

export const AccordionContainer = ({ children, className }: PropsType) => {
  return (
    <div className={clsx(styles.accordionContainer, className)}>{children}</div>
  )
}

/*
type PropsType = {
  children: ReactNode
  className?: string
}

interface AccordionChildProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  open?: boolean
}

export const AccordionHeader = forwardRef<HTMLDivElement, PropsType & AccordionChildProps>(({ children, className, setOpen, open }, ref) => {
  //take to collopse statemnt and change
  const collapseHandle = () => {
    setOpen(!open)
  }

  return (
    <div className={clsx(styles.accordionHeader, className)}>
      {children}
      <Button onClick={collapseHandle}>
        <Icon icon='chevron' size={20} />
      </Button>
    </div>
  )
})

export const AccordionItem = forwardRef<HTMLDivElement, PropsType & AccordionChildProps>(({ children, className, setOpen, open}, ref) => {

  //console.log(open)
  //take open close statemnt and collopse or no collapse
  return (
    <>
    {open && <div ref={ref} className={clsx(styles.accordionItem, className)}>{children}</div>}
    </>
  )
})

export const AccordionContent = ({ children, className }: PropsType & AccordionChildProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [ open, setOpen ] = useState<boolean>(true)
  //send open close statement to all children
  const childrenWithRef = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {  setOpen, open })
    }
    return child
  })
  return (
    <div ref={contentRef}  className={clsx(styles.accordionContent, className)}>
      {childrenWithRef}
    </div>
  )
}

export const AccordionContainer = ({ children, className }: PropsType) => {
  return (
    <div className={clsx(styles.accordionContainer, className)}>
      {children}
    </div>
  )
}



*/
