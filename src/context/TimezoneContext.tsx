"use client"
import React, { createContext, useContext, useState } from 'react'

export enum TIMEZONE {
  ALL = 'all',
  LIVE = 'live',
}

type TimezoneStatusType = 'all' | 'live'

type TimezoneContextType = {
  timezone: TimezoneStatusType
  setTimezone: React.Dispatch<React.SetStateAction<TimezoneStatusType>>
}

const TimezoneContext = createContext<TimezoneContextType | undefined>(undefined)

export const useTimezoneContext = () => {
  const context = useContext(TimezoneContext)
  if (!context) {throw new Error('useTimezoneContext must be used within a TimezoneProvider')}
  return context
}

type TimezoneProviderProps = {
  children: React.ReactNode
}

export const TimezoneProvider = ({ children }: TimezoneProviderProps) => {
  const [timezone, setTimezone] = useState<TimezoneStatusType>(TIMEZONE.ALL)
  const value = { timezone, setTimezone }

  return <TimezoneContext.Provider value={value}>{children}</TimezoneContext.Provider>
}