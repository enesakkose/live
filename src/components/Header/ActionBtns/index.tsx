import React from 'react'
import Button from '@/components/Button'
import styles from '@/components/Header/ActionBtns/ActionBtns.module.scss'

function ActionBtns() {
  return (
    <div className={styles.actionBtns}>
      <Button icon="star" variant='icon'/>
      <Button icon="gear" variant='icon' />
    </div>
  )
}

export default ActionBtns
