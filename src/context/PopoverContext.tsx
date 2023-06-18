import React, { createContext, useContext, useState } from 'react'

type PopoverContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined)

export const usePopoverContext = () => {
  const context = useContext(PopoverContext)
  if (!context) {throw new Error('usePopoverContext must be used within a PopoverProvider')}
  return context
}

type PopoverProviderProps = {
  children: React.ReactNode
}

export const PopoverProvider = ({ children }: PopoverProviderProps) => {
  const [open, setOpen] = useState(false)
  const value = { open, setOpen }

  return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
}