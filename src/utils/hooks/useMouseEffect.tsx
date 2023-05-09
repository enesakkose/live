import React, { useEffect, useRef, useState } from 'react'

export const useMouseEffect = <T extends HTMLDivElement = HTMLDivElement>(
) => {
  const ref = useRef<T>(null)
  const [mouse, setMouse] = useState({ mouseX: 0, mouseY: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { top, left } = ref?.current?.getBoundingClientRect() || { top: 0, left: 0 }
      const mouseX = e.clientX - left
      const mouseY = e.clientY - top
      setMouse({ mouseX, mouseY })
    }

    ref?.current?.addEventListener('mousemove', handleMouseMove)

    return () => {
      ref?.current?.removeEventListener('mousemove', handleMouseMove)
    }

  }, [ref])

  return {mouse, ref}
}