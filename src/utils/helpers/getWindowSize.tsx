"use client"
import useGetWindowSize from "@/utils/hooks/useGetWindowSize"

export const getWindowSize = (breakPoint: 'SM' | 'MD') => {
  const size = useGetWindowSize()

  if(breakPoint === 'SM'){
    const SM = size === 'SM' || size === 'MD'
  
    return SM
  }
}