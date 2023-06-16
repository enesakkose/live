import React, { createContext, useContext, useState } from 'react'

type DropdownContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined)

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {throw new Error('useDropdownContext must be used within a DropdownProvider')}
  return context
}

type DropdownProviderProps = {
  children: React.ReactNode
}

export const DropdownProvider = ({ children }: DropdownProviderProps) => {
  const [open, setOpen] = useState(false)
  const value = { open, setOpen }

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}
