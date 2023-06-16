import React from 'react'
import Icon from '../UI/Icon'
import styles from './Avatar.module.scss'

function Avatar() {
  return (
    <div className={styles.avatar}>
      <Icon icon='user' size={24} />
    </div>
  )
}

export default Avatar
