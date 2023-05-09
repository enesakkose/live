import React from 'react'
import Icon from '@/components/Icon'
import MouseFollower from '@/components/MouseFollower'
import styles from '@/components/Header/Search/Search.module.scss'

function Search() {
  return (
    <MouseFollower className={styles.search}>
      Search
      <Icon icon='search' />
    </MouseFollower>
  )
}

export default Search
