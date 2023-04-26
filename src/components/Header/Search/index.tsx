'use client'
import React, { useRef, useState, MouseEvent, CSSProperties } from 'react'
import Icon from '@/components/Icon'
import styles from '@/components/Header/Search/Search.module.scss'

function Search() {
  const searchRef = useRef<HTMLDivElement | null>(null)
  const [mouse, setMouse] = useState({ mouseX: 0, mouseY: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const { top, left } = searchRef.current?.getBoundingClientRect() || { top: 0, left: 0 }
    const mouseX = e.clientX - left
    const mouseY = e.clientY - top
    setMouse({ mouseX, mouseY })
  }

  return (
    <div
      ref={searchRef}
      onMouseMove={handleMouseMove}
      className={styles.search}
      style={
        {
          '--mouseX': `${mouse.mouseX}px`,
          '--mouseY': `${mouse.mouseY}px`,
        } as CSSProperties
      }
    >
      Search
      <Icon icon='search' />
    </div>
  )
}

export default Search
