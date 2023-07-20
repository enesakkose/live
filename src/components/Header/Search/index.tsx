'use client'
import React, { useState } from 'react'
import Icon from '@/components/UI/Icon'
import QueryResult from './QueryResult'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/UI/Popover'
import { useGetSearchResult } from '@/services/sportsv2'
import { useDebounceValue } from '@/utils/hooks/useDebounceValue'
import styles from './Search.module.scss'

function Search() {
  const [query, setQuery] = useState('')
  const debouncedValue = useDebounceValue(query, 600)
  const { data: searchResults = [], isLoading } = useGetSearchResult(debouncedValue)
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => { setQuery(e.target.value) }

  return (
    <Popover className={styles.searchPopover}>
      <PopoverTrigger asChild>
        <div className={styles.search}>
          <input type='text' value={query} onChange={handleQuery} placeholder='Search' />
          <Icon icon='search' />
        </div>
      </PopoverTrigger>
      <PopoverContent className={styles.content}>
        <QueryResult searchResults={searchResults} isLoading={isLoading} />
      </PopoverContent>
    </Popover>
  )
}

export default Search
