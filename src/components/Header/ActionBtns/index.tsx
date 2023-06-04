import React from 'react'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import styles from './ActionBtns.module.scss'

function ActionBtns() {
  return (
    <div className={styles.settingsBtns}>
      <Button variant='secondary'>
        <Icon size={20} icon='gear' />
      </Button>
      <Button variant='secondary'>
        <Icon size={20} icon='user' />
      </Button>
    </div>
  )
}

export default ActionBtns