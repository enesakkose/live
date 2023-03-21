import React from 'react'
import FavoriteBtn from '@/components/IconButtons/FavoriteBtn'
import GearBtn from '@/components/IconButtons/GearBtn'
import styles from '@/components/Header/ActionBtns/ActionBtns.module.scss'

function ActionBtns() {
  return (
    <div className={styles.actionBtns}>
      <FavoriteBtn />
      <GearBtn />
    </div>
  )
}

export default ActionBtns
