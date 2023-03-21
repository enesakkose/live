import React from 'react'
import Icon from '@/components/Icon'
import styles from '@/components/Header/Search/Search.module.scss'

function Search() {
  return (
    <div className={styles.search}>
      <Icon className={styles.searchIcon} icon='search' />
      <input type='text' name='search' autoComplete='off' />
    </div>
  )
}

export default Search
