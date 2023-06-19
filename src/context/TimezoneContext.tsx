"use client"
import React, { createContext, useContext, useState } from 'react'

export enum TIMEZONE {
  ALL = 'all',
  LIVE = 'live',
}

export type TimezoneStatusType = 'all' | 'live'

type TimezoneContextType = {
  timezoneStatus: TimezoneStatusType
  setTimezoneStatus: React.Dispatch<React.SetStateAction<TimezoneStatusType>>
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
  const [timezoneStatus, setTimezoneStatus] = useState<TimezoneStatusType>(TIMEZONE.ALL)
  const value = { timezoneStatus, setTimezoneStatus }

  return <TimezoneContext.Provider value={value}>{children}</TimezoneContext.Provider>
}