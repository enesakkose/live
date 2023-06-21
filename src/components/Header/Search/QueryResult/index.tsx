'use client'
import React from 'react'
import Row from './Row'
import MouseFollower from '@/components/MouseFollower'
import ScrollContainer from '@/containers/ScrollContainer'
import Loading from '@/components/Loading'
import { useGetSearchResult } from '@/services/sportsv2'
import { useDebounceValue } from '@/utils/hooks/useDebounceValue'
import styles from './QueryResult.module.scss'

function QueryResult({ query }: { query: string }) {
  const debouncedValue = useDebounceValue(query, 600)
  const { data: searchResults = [], isLoading } = useGetSearchResult(debouncedValue)
  
  const List = () => {
    return (
      <ScrollContainer>
        <ul className={styles.list}>
          {searchResults.map((result) => (
            <Row key={result.entity.slug} result={result} />
          ))}
        </ul>
      </ScrollContainer>
    )
  }

  return (
    <MouseFollower className={styles.queryResult}>
      {isLoading ? <Loading /> : <List />}
    </MouseFollower>
  )
}

export default QueryResult
