'use client'
import React, { useState } from 'react'
import Icon from '@/components/UI/Icon'
import QueryResult from './QueryResult'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/UI/Popover'
import styles from './Search.module.scss'

function Search() {
  const [query, setQuery] = useState('')
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Popover className={styles.searchPopover}>
      <PopoverTrigger asChild>
        <div className={styles.search}>
          <input type='text' value={query} onChange={handleQuery} placeholder='Search' />
          <Icon icon='search' />
        </div>
      </PopoverTrigger>
      <PopoverContent className={styles.content}>
        <QueryResult query={query} />
      </PopoverContent>
    </Popover>
  )
}

export default Search
