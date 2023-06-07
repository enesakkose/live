"use client"
import React, { useState } from 'react'
import Icon from '@/components/Icon'
import MouseFollower from '@/components/MouseFollower'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import QueryResult from './QueryResult'
import Link from 'next/link'
import styles from './Search.module.scss'

function Search() {
  const [ query, setQuery ] = useState('')
  const [ open, setOpen ] = useState(false)
  const searchRef = useClickOutside<HTMLDivElement>(() => setOpen(false))
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setOpen(query.length > 0)
  }
  
  return (
    <div ref={searchRef} className={styles.search}>
      <input type="text" value={query} onChange={handleQuery} placeholder='Search' />
      {open && <QueryResult/>}
      <Icon icon='search' />
    </div>

  )
}

export default Search
