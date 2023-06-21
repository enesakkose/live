import React, { createContext, useContext, useState } from 'react'

type AccordionContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {throw new Error('useAccordionContext must be used within a AccordionProvider')}
  return context
}

type AccordionProviderProps = {
  children: React.ReactNode
}

export const AccordionProvider = ({ children }: AccordionProviderProps) => {
  const [open, setOpen] = useState(true)
  const value = { open, setOpen }

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>
}
