'use client'
import React, { useState } from 'react'
import Icon from '@/components/UI/Icon'
import QueryResult from './QueryResult'
import { Dropdown, DropdownTrigger, DropdownList } from '@/components/Dropdown'
import styles from './Search.module.scss'

function Search() {
  const [query, setQuery] = useState('')
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <div className={styles.search}>
          <input type='text' value={query} onChange={handleQuery} placeholder='Search' />
          <Icon icon='search' />
        </div>
      </DropdownTrigger>
      <DropdownList>
        <QueryResult />
      </DropdownList>
    </Dropdown>
  )
}

export default Search
