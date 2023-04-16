'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useGetTodos } from '@/utils/hooks/useGetTodos'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import styles from '@/components/Sidebar/Sidebar.module.scss'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h4>Tournaments</h4>

    </aside>
  )
}

export default Sidebar
