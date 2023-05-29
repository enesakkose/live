"use client"
import useGetBreakPoint from "@/utils/hooks/useGetWindowSize"

export const useGetWindowSize = (breakPoint: 'SM' | 'MD') => {
  const size = useGetBreakPoint()

  if(breakPoint === 'SM'){
    const SM = size === 'SM' || size === 'MD'
  
    return SM
  }
}