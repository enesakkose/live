import React, { createContext, useContext, useState } from 'react'

type TooltipContextType = {
  isHovered: boolean
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

export const useTooltipContext = () => {
  const context = useContext(TooltipContext)
  if (!context) {throw new Error('useTooltipContext must be used within a TooltipProvider')}
  return context
}

type TooltipProviderProps = {
  children: React.ReactNode
}

export const TooltipProvider = ({ children }: TooltipProviderProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const value = { isHovered, setIsHovered }

  return <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
}
