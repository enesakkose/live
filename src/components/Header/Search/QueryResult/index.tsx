'use client'
import React, { useId } from 'react'
import Row from './Row'
import MouseFollower from '@/components/MouseFollower'
import ScrollContainer from '@/containers/ScrollContainer'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { type Search, Type } from '@/types/SearchQuery'
import styles from './QueryResult.module.scss'

type QueryResultTypeProps = { searchResults: Search[]; isLoading: boolean }

function QueryResult({ searchResults, isLoading }: QueryResultTypeProps) {
  const onlyPlayers = searchResults.filter((result) => result.type !== Type.Event)

  const List = () => {
    return (
      <ScrollContainer>
        <ul className={styles.list}>
          {onlyPlayers.map((result) => (
            <Row key={useId()} result={result} />
          ))}
        </ul>
      </ScrollContainer>
    )
  }

  return (
    <MouseFollower className={styles.queryResult}>
      {isLoading 
        ?  <Loading />
        : onlyPlayers.length === 0 
          ? <Error error='Your request not found.' />
          : <List />
      }
    </MouseFollower>
  )
}

export default QueryResult
