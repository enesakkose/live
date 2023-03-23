"use client"

import React, { useEffect, useState, Suspense } from 'react'
import { useGetTodos } from '@/utils/hooks/useGetTodos'
import { useGetCategory } from '@/utils/hooks'
import styles from '@/components/Sidebar/Sidebar.module.scss'

function Sidebar() {

  const { error, data, isFetching } = useGetCategory('1')
  //if (isLoading) return 'Loading'
  if (error) return 'Error'
  
  return (
    <aside className={styles.sidebar}>
      <Suspense fallback={<h4>Loading</h4>}>
      <h4>Tournaments</h4>
      </Suspense>
    </aside>
  )
}

export default Sidebar
