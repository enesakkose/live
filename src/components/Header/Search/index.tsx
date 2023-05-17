import React from 'react'
import Icon from '@/components/Icon'
import MouseFollower from '@/components/MouseFollower'
import Link from 'next/link'
import styles from '@/components/Header/Search/Search.module.scss'

function Search() {
  return (
    <Link href='/upload'>
    <MouseFollower className={styles.search}>
      Search
      <Icon icon='search' />
    </MouseFollower>
    </Link>
  )
}

export default Search
