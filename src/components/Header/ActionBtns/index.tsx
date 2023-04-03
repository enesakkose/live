import React from 'react'
import Button from '@/components/Button'
import styles from '@/components/Header/ActionBtns/ActionBtns.module.scss'

function ActionBtns() {
  return (
    <div className={styles.actionBtns}>
      <Button icon="star" variant='icon' style={{ gap: '.5rem' }}>
        FAVORITES
      </Button>
      <Button icon="gear" variant='icon' />
    </div>
  )
}

export default ActionBtns

//buttona iconlu style bak dkya ayarla brief logolarını ayarla
